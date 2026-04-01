export interface SEOCheck {
  label: string
  status: 'pass' | 'warning' | 'fail'
  detail: string
}

export interface SEOCategory {
  name: string
  weight: number
  score: number
  afterScore: number
  checks: SEOCheck[]
}

export interface SEOAction {
  title: string
  description: string
  urgency: 'Immediate' | 'This Month' | 'Ongoing'
  impact: 'High' | 'Medium' | 'Low'
}

export interface SEOReport {
  url: string
  domain: string
  overallScore: number
  afterScore: number
  grade: string
  afterGrade: string
  categories: SEOCategory[]
  topIssues: string[]
  strengths: string[]
  actions: SEOAction[]
  estimatedTrafficLoss: number
}
