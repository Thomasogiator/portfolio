export interface Screenshot {
  src: string;
  caption: string;
}

export interface CaseStudy {
  problem: string;
  approach: string;
  decisions: string[];
  results: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  caseStudy: CaseStudy;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
  isPrivate?: boolean;
  privateNote?: string;
  images?: Screenshot[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  link: string;
}

// ─── HERO ────────────────────────────────────────────────────────────────────

export const hero = {
  name: 'Thomas Ogiator',
  title: 'Senior Frontend Engineer',
  roles: [
    'React Engineer',
    'Next.js Specialist',
    'TypeScript Advocate',
    'UI/UX Engineer',
  ],
  subtitle:
    "I build interfaces that feel inevitable, fast, reliable, and intuitive. Based in Lagos, Nigeria and open to remote opportunities locally and globally.",
  cta: 'View My Work',
  ctaLink: '#projects',
  ctaSecondary: "Let's Talk",
  ctaSecondaryLink: '#contact',
  availability: true,
};

// ─── ABOUT ───────────────────────────────────────────────────────────────────

export const about = {
  title: 'About Me',
  paragraphs: [
    "I'm a Frontend Engineer with 4+ years of experience building production web applications across fintech, e-commerce, and SaaS. I work across the full frontend lifecycle, from architecture and component design to performance tuning and shipping, and I'm comfortable influencing product decisions, not just implementing them.",
    "Right now I'm the go-to frontend engineer on Zojapay, a fintech platform, where I collaborate closely with backend engineers, designers, product managers, and QA to shape user flows and decide how data surfaces across the dashboard. I've also built a multi-tenant e-commerce SaaS (StoreToLet), a full e-commerce platform (Alpha Shop), and I'm currently working on a two-sided talent marketplace with real-time messaging powered by WebSockets.",
    "When I'm not building, I'm thinking about performance, component architecture, and how to make complex workflows feel simple for the people using them.",
  ],
  location: 'Lagos, Nigeria',
  openToRemote: true,
  stats: [
    { label: 'Years experience', value: '4+' },
    { label: 'Products shipped', value: '6+' },
    { label: 'Companies', value: '2+' },
    { label: 'Cups of coffee', value: '∞' },
  ],
  currently: {
    learning: 'System design patterns for large-scale frontend applications',
    reading: 'Staff Engineer by Will Larson',
    excited: 'WebSocket architecture and real-time UI patterns',
  },
};

// ─── TECH STACK ──────────────────────────────────────────────────────────────

export const techStack = {
  title: 'What I Work With',
  categories: {
    core: {
      name: 'Core Stack',
      skills: ['React', 'Next.js', 'TypeScript', 'JavaScript (ES2024)', 'HTML5', 'CSS3'],
    },
    styling: {
      name: 'Styling & UI',
      skills: ['Tailwind CSS', 'shadcn/ui', 'Radix UI', 'Material UI', 'Bootstrap', 'Storybook', 'SCSS'],
    },
    state: {
      name: 'State & Data',
      skills: ['Redux Toolkit', 'RTK Query', 'Zustand', 'TanStack Query', 'Axios'],
    },
    realtime: {
      name: 'Real-Time & APIs',
      skills: ['WebSockets', 'Socket.io', 'RESTful APIs', 'GraphQL', 'Paystack', 'Korapay', 'Firebase'],
    },
    testing: {
      name: 'Testing & Quality',
      skills: ['Jest', 'React Testing Library', 'Cypress', 'CI/CD', 'Code Reviews'],
    },
    tooling: {
      name: 'Cloud & Tooling',
      skills: ['AWS (S3, IAM)', 'Git', 'GitHub', 'Webpack', 'Babel', 'Vercel'],
    },
  },
};

// ─── PROJECTS ────────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    id: '1',
    title: 'HireMe',
    description: 'A two-sided job platform with real-time employer–candidate messaging built from scratch.',
    longDescription:
      'A full-scale talent marketplace built from scratch as sole frontend engineer with three distinct interface layers (a candidate portal, an employer portal, and a comprehensive admin dashboard). Includes real-time bidirectional chat using WebSockets (Socket.io).',
    caseStudy: {
      problem:
        "The client needed a platform that went beyond a typical job board. Employers needed to actively discover and engage candidates, not just receive applications passively. Existing solutions didn't offer direct in-platform communication, forcing both parties off-platform to continue conversations, which created drop-off and reduced hiring success rates.",
      approach:
        'I architected three completely separate interface layers (candidate portal, employer portal, and admin dashboard), each with its own routing, authentication flow, and access control logic. I used role-based rendering to keep the bundle coherent while keeping the experiences completely distinct. For messaging, I chose WebSockets over polling to support true real-time delivery without unnecessary server load.',
      decisions: [
        "Chose Socket.io over raw WebSockets for built-in room management, reconnection handling, and fallback support, reducing the surface area for real-time edge cases I'd have to handle manually.",
        // 'Kept all three interfaces in one Next.js app with role-based route guards rather than separate deployments, this simplified shared component logic and kept the CI/CD pipeline straightforward for a solo build.',
        'Used Redux Toolkit for to handle complex, relational data with many views.',
        'Designed the admin dashboard as permission-aware from the start, with feature flags per admin role, so the client could onboard internal moderators separately from super admins without code changes.',
      ],
      results: [
        'Delivered a fully functional two-sided platform with real-time messaging as a solo frontend engineer.',
        'Chat system handles concurrent conversations with no message duplication or lost events across tested sessions.',
        'Admin dashboard covers the full operational surface: analytics, user management, content moderation, support tickets, promotions, and configuration.',
        'Currently in staging, production launch expected within two weeks.',
      ],
    },
    image: '/hireme_shot1.png',
    tags: ['React', 'TypeScript', 'Socket.io', 'Redux Toolkit', 'Tailwind CSS', 'Next.js'],
    // isPrivate: true,
    privateNote: 'Client project currently in staging. Screenshots shared for portfolio purposes only.',
    images: [
      {
        src: '/hireme_shot1.png',
        caption: 'Chat Interface - real-time employer-candidate messaging',
      },
      {
        src: '/hireme_shot2.png',
        caption: 'Employer Portal - candidate discovery and profile browsing',
      },
      {
        src: '/hireme_shot3.png',
        caption: 'Candidate Portal - job search with filters applied',
      },
      {
        src: '/hireme_shot4.png',
        caption: 'Candidate Portal - candidate profile view',
      },
      {
        src: '/hireme_shot5.png',
        caption: 'Admin Dashboard - platform analytics and activity overview',
      },
      {
        src: '/hireme_shot6.png',
        caption: 'Admin - user management table with role controls',
      },
      // {
      //   src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
      //   caption: 'Admin - content moderation and support ticket management',
      // },
    ],
  },
  {
    id: '2',
    title: 'Zojapay',
    description: 'Fintech admin dashboard for real-time transaction monitoring and financial operations.',
    longDescription:
      'Contributed to the frontend of Zojapay across two surfaces, the public-facing website and the internal admin dashboard. Took ownership of the existing codebase, implementing new pages, features, bug fixes, and UI refinements across both the customer acquisition surface and the financial operations dashboard.',
    caseStudy: {
      problem:
        'The dashboard had existing UI inconsistencies and performance issues on data-heavy screens, transaction tables with large datasets were slow to render, and API failures during high-traffic periods were surfacing as broken or empty UI states with no feedback for operators. New features also needed to be integrated without disrupting workflows the operations team depended on daily. Beyond the dashboard, the public-facing website also required ongoing development of new pages and UI updates as the product evolved.',
      approach:
        'I audited the existing codebase before making changes, mapping the component structure, Redux slice architecture, and API integration patterns already in use. Rather than refactoring broadly, I worked within the existing conventions while improving targeted problem areas, error handling, performance on table-heavy views, and UI state management during loading and failure scenarios.',
      decisions: [
        'Adopted the existing Redux Toolkit patterns rather than introducing new state approaches, keeping the codebase consistent and reducing cognitive load for future engineers.',
        'Added error boundary wrappers and RTK Query error states on financial API endpoints so operations staff see actionable error messages instead of blank screens during failures.',
        'Used React Memoization on high-row-count transaction tables to fix rendering lag rather than paginating aggressively, which would have broken the operations team\'s existing workflow of scanning across large date ranges.',
      ],
      results: [
        'Resolved rendering lag on transaction tables with large datasets through targeted memoization.',
        'Reduced visible UI failures during API instability through consistent error boundaries and retry logic across all data-sensitive screens.',
        'New features shipped without disrupting existing dashboard workflows the operations team relied on.',
      ],
    },
    image: '/zojapay_shot1.png',
    tags: ['React', 'TypeScript', 'Redux Toolkit', 'RTK Query', 'Tailwind CSS'],
    link: 'https://zojapay.com',
    // isPrivate: true,
    privateNote: 'Internal fintech dashboard, screenshots shared for portfolio purposes only.',
    images: [
      {
        src: '/zojapay_shot1.png',
        caption: 'Admin Dashboard - transaction overview and dashboard summary',
      },
      {
        src: '/zojapay_shot2.png',
        caption: 'Admin Dashboard - transaction history table with filters',
      },
      {
        src: '/zojapay_shot3.png',
        caption: 'Admin Dashboard - financial analytics and reporting view',
      },
      {
        src: '/zojapay_shot4.png',
        caption: 'Admin Dashboard - loan table overview',
      },
    ],
  },
  {
    id: '3',
    title: 'StoreToLet',
    description: 'Multi-tenant e-commerce SaaS with merchant admin dashboard and customer storefronts.',
    longDescription:
      'Built a multi-tenant SaaS e-commerce platform where each registered merchant gets their own custom-domain storefront. Architected the shared component library, merchant admin dashboard, and customer-facing portal with Paystack payment integration.',
    caseStudy: {
      problem:
        'The platform needed to serve a fundamentally split experience, a merchant-facing admin area for managing products, subscriptions, and orders, and multiple independent customer-facing storefronts, each on a custom domain, each looking like a standalone e-commerce store. The architectural challenge was building both surfaces in a way that shared UI logic without coupling the merchant and customer experiences.',
      approach:
        'I separated the admin dashboard and the customer storefront into distinct application layers sharing a common component library. The storefront was built with Next.js to support SSR and SEO for each merchant\'s products, while the admin used a client-rendered pattern since SEO was irrelevant there. RTK Query handled data fetching and caching across both, with separate API slices to keep concerns isolated.',
      decisions: [
        'Used Next.js dynamic routing with custom domain mapping so each merchant storefront resolved correctly from their own domain, coordinating the routing strategy with the backend team early was critical.',
        'Built a shared component library for UI primitives (buttons, inputs, cards, modals) that both the admin and storefront consumed, keeping visual consistency without tying the admin and customer UX together at the page level.',
        'Integrated Paystack directly on the storefront rather than redirecting to a hosted payment page, keeping the customer within the merchant\'s branded experience through checkout.',
        "Used RTK Query's cache invalidation to keep the admin dashboard in sync after merchant actions without requiring manual refreshes.",
      ],
      results: [
        'Multiple live merchant storefronts deployed on custom domains with fully branded, independent customer experiences.',
        'Admin dashboard handles merchant onboarding, subscription management, product management, and order tracking in a single interface.',
        'Paystack payment integration live on customer storefronts with full cart and checkout flow.',
        'Shared component library reduced duplication between the two surfaces and sped up new feature development across both.',
      ],
    },
    image: '/storetolet_shot1.png',
    tags: ['Next.js', 'TypeScript', 'Redux Toolkit', 'RTK Query', 'Tailwind CSS', 'Paystack'],
    link: 'https://www.storetolet.com',
    images: [
      {
        src: '/storetolet_shot1.png',
        caption: 'Admin Dashboard - merchant management table',
      },
      {
        src: '/storetolet_shot2.png',
        caption: 'Admin Dashboard - subscription management table',
      },
      {
        src: '/storetolet_shot3.png',
        caption: 'Merchant Storefront - product listing and browsing experience (daisyluxeskin.storetolet.com)',
      },
      {
        src: '/storetolet_shot4.png',
        caption: 'Merchant Storefront - product details page',
      },
      {
        src: '/storetolet_shot5.png',
        caption: 'Merchant Storefront - cart and Paystack checkout flow',
      },
    ],
  },
  {
    id: '4',
    title: 'Alpha Shop',
    description: 'E-commerce platform with real-time order tracking and multi-gateway payment integration.',
    longDescription:
      'Co-led frontend development of Alpha Shop from zero to production, a full-featured e-commerce platform with product browsing, unique alpha-code product search, cart management, real-time order tracking, and dual payment gateway integration.',
    caseStudy: {
      problem:
        'Alpha Shop needed to support a non-standard product discovery model, products were referenced by unique alpha codes and also included the traditional category browsing, meaning the search and product linking logic had to be built from scratch. The platform also needed two payment gateways and real-time order visibility post-purchase, all while performing well for a primarily mobile user base.',
      approach:
        'I built the frontend from the ground up, prioritising the flows that differentiated Alpha Shop, the alpha code search experience, dual payment gateway selection at checkout, and the order tracking interface. Performance was a deliberate focus from the start given the high mobile traffic data the product team shared.',
      decisions: [
        'Built alpha code search as a first-class feature with its own UI pattern, distinct from standard keyword search, so users who knew their product code could reach it in one step.',
        'Integrated both Paystack and Korapay at checkout, letting users choose their preferred gateway. This required coordinating two separate webhook flows with the backend team.',
        'Applied route-level code splitting and lazy loading for non-critical sections to keep the initial bundle lean for mobile users.',
      ],
      results: [
        'Contributed to a 15% increase in platform revenue in the period following launch.',
        'Achieved a 30% reduction in initial page load time through code splitting, lazy loading, and caching.',
        'Dual payment gateway integration live in production with Paystack and Korapay.',
      ],
    },
    image: '/alpha_shot1.png',
    tags: ['React', 'JavaScript', 'Paystack', 'Korapay', 'Redux toolkit', 'RTK Query'],
    link: 'https://shoponalpha.com',
    images: [
      {
        src: '/alpha_shot1.png',
        caption: 'Customer View - homepage and product listing',
      },
      // {
      //   src: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?w=800',
      //   caption: 'Customer View - product detail and alpha code search',
      // },
      // {
      //   src: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800',
      //   caption: 'Customer View - cart and dual gateway checkout (Paystack / Korapay)',
      // },
      // {
      //   src: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800',
      //   caption: 'Customer View - order tracking',
      // },
    ],
  },
];

// ─── EXPERIENCE ──────────────────────────────────────────────────────────────

export const experience: Experience[] = [
  {
    id: '1',
    company: 'Zojatech',
    role: 'Frontend Engineer',
    period: 'Sep 2025 – Present',
    description: 'Working on Zojapay, a fintech SaaS platform for digital payments and financial operations.',
    highlights: [
      'Took ownership of the Zojapay frontend across both the public-facing website and the admin dashboard, implementing new pages, features, bug fixes, and UI refinements while maintaining consistency with the existing architecture.',
      'Collaborated with backend, design, PM, and QA to define user flows and data presentation for new features, influencing how information is structured and surfaced across the dashboard.',
      'Integrated financial APIs with reliable error handling and loading state patterns, ensuring consistent UI behaviour during API failures or latency spikes on data-sensitive screens.',
      'Improved performance and visual consistency on data-heavy dashboard views through targeted optimizations and component-level refinements.',
      'Designed and maintained reusable component libraries that standardized UI patterns across the platform, improving maintainability and accelerating feature development.'
    ],
  },
  {
    id: '2',
    company: 'GIG Logistics',
    role: 'Frontend Engineer',
    period: 'Jan 2022 – Aug 2025',
    description: 'Co-led frontend development on Alpha Shop (e-commerce).',
    highlights: [
      'Co-led Alpha Shop frontend from zero to production, e-commerce platform with cart, order tracking, and multi-gateway payments (Paystack, Korapay), contributing to a 15% post-launch revenue increase.',
      'Achieved 30% reduction in page load time via route-level code splitting, lazy loading, and RTK Query caching; improved Core Web Vitals scores across key conversion pages.',
      'Established 90%+ test coverage on critical flows (checkout, auth, order management) using Jest and React Testing Library.',
      'Collaborated with designers, backend developers, and product managers in Agile sprints to deliver features on time and meet evolving business needs.',
    ],
  },
];

// ─── OPEN SOURCE ─────────────────────────────────────────────────────────────

export const openSource = {
  title: 'Open Source & GitHub',
  description: "Code I've written and shared publicly.",
  githubUrl: 'https://github.com/Thomasogiator',
  projects: [
    {
      name: 'portfolio',
      description: 'Source code for this portfolio site, built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.',
      stars: 0,
      link: 'https://github.com/Thomasogiator',
    },
    {
      name: 'react-components',
      description: 'A collection of reusable React components built with TypeScript and Tailwind CSS.',
      stars: 0,
      link: 'https://github.com/Thomasogiator',
    },
  ],
};

// ─── TESTIMONIALS ────────────────────────────────────────────────────────────

export const testimonials: Testimonial[] = [
  {
    id: '1',
    author: 'Colleague Name',
    role: 'Product Manager',
    company: 'GIG Logistics',
    content:
      'Thomas consistently delivered complex features ahead of schedule and raised the bar for our whole team. His attention to detail and ability to translate business requirements into clean, intuitive interfaces is exceptional.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
  },
  {
    id: '2',
    author: 'Colleague Name',
    role: 'Backend Engineer',
    company: 'GIG Logistics',
    content:
      'Working with Thomas on Alpha Shop was a great experience. He brought strong architectural thinking to the frontend and always pushed for solutions that would hold up at scale.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
  },
  {
    id: '3',
    author: 'Colleague Name',
    role: 'UI/UX Designer',
    company: 'Zojatech',
    content:
      'Thomas bridges the gap between design and engineering better than most. He asks the right questions before building, and the finished product almost always exceeds what we designed.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
  },
];

// ─── BLOG ────────────────────────────────────────────────────────────────────

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'How I Structure React Projects for Scale',
    excerpt: 'The folder structure, naming conventions, and architectural patterns I use on every production project.',
    date: 'Coming soon',
    readTime: '6 min read',
    tags: ['React', 'Architecture', 'TypeScript'],
    link: 'https://dev.to/thomasogiator',
  },
  {
    id: '2',
    title: 'Building Real-Time Chat with Socket.io and React',
    excerpt: 'A practical walkthrough of implementing bidirectional WebSocket messaging with connection lifecycle management.',
    date: 'Coming soon',
    readTime: '8 min read',
    tags: ['WebSockets', 'Socket.io', 'React'],
    link: 'https://dev.to/thomasogiator',
  },
  {
    id: '3',
    title: 'Redux Toolkit Patterns I Use in Production',
    excerpt: 'Beyond the basics - RTK Query, optimistic updates, and managing complex async workflows in fintech UIs.',
    date: 'Coming soon',
    readTime: '7 min read',
    tags: ['Redux', 'RTK Query', 'State Management'],
    link: 'https://dev.to/thomasogiator',
  },
];

// ─── CONTACT ─────────────────────────────────────────────────────────────────

export const contact = {
  title: "Let's Build Something Great.",
  description:
    "I'm open to frontend roles, contract projects, and good conversations. If you have something interesting, I'd love to hear about it.",
  email: 'thomasogiator@gmail.com',
  social: [
    { name: 'GitHub', url: 'https://github.com/Thomasogiator' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/thomasogiator' },
    { name: 'Email', url: 'mailto:thomasogiator@gmail.com' },
  ],
  calendly: '',
};