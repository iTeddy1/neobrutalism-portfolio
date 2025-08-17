type Project = {
  name: string
  description: string
  previewImage: string
  repoUrl: string
  liveLink: string
  role?: string
  stack?: string[]
  highlights?: string[]
}

const PROJECTS: Project[] = [
  {
    name: 'TVE Technical',
    description:
      'Freelance project building a website with high performance and accessibility.',
    liveLink: 'https://iteddy1.vercel.app/work',
    previewImage: '/project1.png',
    repoUrl: '',
    stack: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'GraphQL',
      'WordPress',
      'TanStack Query',
      'Vercel',
      'Render',
      'TiDB',
      'i18next',
      'shadcn/ui',
    ],
    highlights: [
      '100/100 Lighthouse scores',
      'Reduced First Contentful Paint by 40%',
      'Built custom CMS with ACF and TanStack Query',
      'CI/CD pipeline with Vercel, Render, TiDB',
      'Site-wide search (<200ms), multilingual support',
      '100% accessibility score',
    ],
  },
  {
    name: 'Laandlin (React Native App)',
    description:
      'School project for a mobile e-commerce app with optimized backend.',
    liveLink: '',
    previewImage: '/project2.png',
    repoUrl: '',
    stack: [
      'React Native',
      'Node.js',
      'Express',
      'MongoDB',
      'Vercel',
      'Expo',
      'TypeScript',
    ],
    highlights: [
      'JWT authentication',
      'Product filtering & recommendations',
      'API response time reduced from 800ms to 210ms',
      'Backend deployed on Vercel',
    ],
  },
  {
    name: 'Laandlin E-Commerce Website',
    description:
      'Freelance web project with full e-commerce functionality and performance optimization.',
    liveLink: '',
    previewImage: '/project3.png',
    repoUrl: '',
    stack: ['React', 'Tailwind CSS', 'TypeScript', 'Redux', 'Vite'],
    highlights: [
      'Product catalog, search, cart, checkout',
      'Unified color palette across 25+ pages',
      'Bundle size reduced from 20MB to 2MB',
      '90% improvement in load performance',
    ],
  },
  {
    name: 'Frenzy',
    description:
      'School project delivering a full-stack Laravel e-commerce site.',
    liveLink: '',
    previewImage: '/project4.png',
    repoUrl: '',
    stack: ['Laravel', 'Blade', 'JavaScript', 'MySQL'],
    highlights: [
      '10-table MySQL schema',
      'Multi-step checkout',
      'Usability testing reduced bugs by 15%',
    ],
  },
]

export default PROJECTS
