const PAST_ROLES: {
  company: string
  role: string
  description: string | string[]
  startDate: string
  endDate: string
}[] = [
  {
    company: 'Atom Solution',
    role: 'Frontend Developer Intern',
    description: [
      'Built responsive Next.js interfaces from Figma using Tailwind CSS and TypeScript',
      'Implemented reusable components with shadcn/ui and managed state with Redux',
      'Collaborated in agile sprints with code reviews and Git workflows',
      'Focused on performance, accessibility, and clean code (ESLint/TypeScript)',
    ],
    startDate: 'March 2025',
    endDate: 'March 2025',
  },
  {
    company: 'Personal Projects',
    role: 'Frontend Developer',
    description: [
      'Delivered multiple React/Next.js projects with modern UI patterns, API integrations, and state management',
      'Translated Figma designs into pixel-perfect, mobile-first UIs',
      'Deployed to Vercel with environment-aware setups',
      'Practiced component composition, custom hooks, and performance best practices',
    ],
    startDate: '2023',
    endDate: 'Present',
  },
]

export default PAST_ROLES
