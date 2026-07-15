import { PromptLine } from './prompt-line'

const contributions = [
  {
    org: 'open-telemetry/opentelemetry-java-contrib',
    prs: [
      { perms: '2887', title: 'fix(ibm-mq-metrics): update metric unit from microseconds to us', link: 'https://github.com/open-telemetry/opentelemetry-java-contrib/pull/2887' },
      { perms: '2835', title: 'feat(ibm-mq-metrics): report queue manager uptime', link: 'https://github.com/open-telemetry/opentelemetry-java-contrib/pull/2835' },
    ],
  },
  {
    org: 'open-telemetry/opentelemetry-collector-contrib',
    prs: [
      { perms: '48707', title: '[exporter/alibabacloudlogservice] Add support for STS security_token authentication', link: 'https://github.com/open-telemetry/opentelemetry-collector-contrib/pull/48707' },
      { perms: '48055', title: '[exporter/googlecloudstorage] Add timeout, sending_queue, and retry settings', link: 'https://github.com/open-telemetry/opentelemetry-collector-contrib/pull/48055' },
      { perms: '48053', title: 'feat(opampsupervisor): make log format configurable', link: 'https://github.com/open-telemetry/opentelemetry-collector-contrib/pull/48053' },
      { perms: '47382', title: 'feat(tailsampling): enable nesting of not policy within and_sub_policy', link: 'https://github.com/open-telemetry/opentelemetry-collector-contrib/pull/47382' },
      { perms: '47381', title: '[receiver/oracledb] Exclude collectors own queries from Top Query analyses', link: 'https://github.com/open-telemetry/opentelemetry-collector-contrib/pull/47381' },
    ],
  },
  {
    org: 'meshery/meshery',
    prs: [
      { perms: '17759', title: '[Docs - New] Fix and enhance lightbox image viewer functionality', link: 'https://github.com/meshery/meshery/pull/17759' },
      { perms: '17747', title: '[docs-new] Fix missing favicons by correcting paths in head.html', link: 'https://github.com/meshery/meshery/pull/17747' },
    ],
  },
  {
    org: 'meshery-extensions/kanvas-site',
    prs: [
      { perms: '136', title: 'fix: resolve semantic HTML and accessibility warnings on landing page', link: 'https://github.com/meshery-extensions/kanvas-site/pull/136' },
    ],
  },
  {
    org: 'kestra-io/kestra',
    prs: [
      { perms: '14857', title: 'fix(core): use toDashboardFilterBuilder for namespace filter in ITriggers and IMetrics', link: 'https://github.com/kestra-io/kestra/pull/14857' },
    ],
  },
]

export function ContributionsSection() {
  return (
    <section id="contributions" className="space-y-3">
      <PromptLine command="ls -la ~/contributions" />

      <div className="bg-[#1b1714] border border-[#2c2620] rounded p-4 space-y-4 text-xs overflow-x-auto">
        {contributions.map((group) => (
          <div key={group.org} className="space-y-1">
            {/* Org / repo header */}
            <div className="text-[#ffb648]">/{group.org}</div>

            {/* PR entries */}
            {group.prs.map((pr) => (
              <a
                key={pr.title}
                href={pr.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 pl-4 text-[#e9e4d8] whitespace-nowrap hover:text-[#ffb648] transition-colors group"
              >
                <span className="text-[#948c7e] flex-shrink-0 group-hover:text-[#948c7e]">#{pr.perms}</span>
                <span className="flex-shrink-0">{pr.title}</span>
              </a>
            ))}
          </div>
        ))}
        <div className="mt-4 flex justify-end">
          <a
            href="https://github.com/search?q=is%3Apr+author%3Aharshitt13+is%3Amerged&type=pullrequests"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6b6560] hover:text-[#ffb648] transition-colors text-xs"
          >
            ...more
          </a>
        </div>
      </div>
    </section>
  )
}
