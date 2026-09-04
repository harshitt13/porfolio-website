/**
 * Core TypeScript interfaces for portfolio data structure
 * Centralizes all type definitions for better maintainability
 */

export interface Project {
  id: string
  name: string
  description: string
  tech: string[]
  repoLink: string
  statusLabel: 'Active' | 'Demonstration' | 'Live' | 'Github'
  statusLink: string
}

export interface Contribution {
  org: string
  prs: PullRequest[]
}

export interface PullRequest {
  /** Upstream pull request number. */
  number: string
  title: string
  link: string
}

export interface CareerEntry {
  id: string
  role: string
  org: string
  scope: string
  message: string
  /** ISO 8601 year-month, e.g. '2026-04'. Drives the <time datetime> attribute. */
  start: string
  /** ISO 8601 year-month, or null when the role is ongoing. */
  end: string | null
}

export interface Skill {
  category: string
  skills: string[]
}

export interface Contact {
  label: string
  value: string
  href: string
  /**
   * Emitted as rel="me" so search engines can tie this profile to the same
   * person as the site. Off for addresses that are not identity profiles.
   */
  isIdentity?: boolean
}

export interface PortfolioTheme {
  base: string
  surface: string
  panel: string
  edge: string
  edgeStrong: string
  dim: string
  muted: string
  fg: string
  accent: string
  accentDim: string
  cyan: string
}

export interface SeoMetadata {
  title: string
  description: string
  keywords: string[]
  ogImage?: string
  ogUrl?: string
}
