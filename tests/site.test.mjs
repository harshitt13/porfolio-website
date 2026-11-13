import assert from 'node:assert/strict'
import test from 'node:test'

// Run against a production build: npm run build, npm start, then npm test.
const base = process.env.SITE_TEST_URL || 'http://localhost:3000'

test('IP endpoint validates complete addresses and prevents caching/indexing', async () => {
  for (const [input, expected] of [
    ['203.0.113.7', '203.0.113.7'],
    ['2001:db8::1', '2001:db8::1'],
    ['203.0.113.7, 192.0.2.1', '203.0.113.7'],
    ['::1]/path?x=[', '127.0.0.1'],
    ['999.1.2.3', '127.0.0.1'],
    ['<script>alert(1)</script>', '127.0.0.1'],
  ]) {
    const response = await fetch(`${base}/api/ip`, { headers: { 'x-forwarded-for': input } })
    assert.equal(response.status, 200)
    assert.equal(response.headers.get('cache-control'), 'no-store')
    assert.equal(response.headers.get('x-robots-tag'), 'noindex')
    assert.deepEqual(await response.json(), { ip: expected })
  }
})

test('public pages expose canonical metadata and parseable structured data', async () => {
  for (const path of ['/', '/quotes']) {
    const response = await fetch(`${base}${path}`)
    assert.equal(response.status, 200)
    const html = await response.text()
    assert.match(html, /<h1[ >]/)
    assert.match(html, /<link rel="canonical" href="https:\/\/harshitt13.in/)
    const graphs = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)]
    assert.ok(graphs.length >= 2)
    for (const [, json] of graphs) assert.equal(JSON.parse(json)['@context'], 'https://schema.org')
    if (path === '/quotes') {
      const title = html.match(/<title>(.*?)<\/title>/s)?.[1] || ''
      assert.equal(title.split('Harshit Kushwaha').length - 1, 1)
    } else {
      const contributions = html.match(/<section id="contributions".*?<\/section>/s)?.[0] || ''
      const links = [...contributions.matchAll(/href="(https:\/\/github.com\/[^\"]+\/pull\/\d+)"/g)]
      assert.equal(links.length, 22)
      assert.equal(new Set(links.map(match => match[1])).size, 22)
      assert.ok(contributions.includes('jaegertracing/jaeger-ui/pull/3987'))
      assert.ok(!contributions.includes('/issues/'))
    }
  }
})

test('sitemap has canonical destinations and unknown paths return 404', async () => {
  const response = await fetch(`${base}/sitemap.xml`)
  assert.equal(response.status, 200)
  const xml = await response.text()
  assert.deepEqual(
    [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]),
    ['https://harshitt13.in', 'https://harshitt13.in/quotes']
  )
  assert.equal((await fetch(`${base}/does-not-exist-audit`)).status, 404)
})
