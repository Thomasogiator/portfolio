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
  note?: string;
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
  // openToRemote: true,
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
    title: 'HireMi',
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
    image: '/zoja-logo.jpg',
    tags: ['React', 'TypeScript', 'Redux Toolkit', 'RTK Query', 'Tailwind CSS'],
    link: 'https://zojapay.com',
    isPrivate: true,
    privateNote: 'Internal fintech dashboard, screenshots unavailable due to data privacy.',
    images: [
      // {
      //   src: '/zojapay_shot1.png',
      //   caption: 'Admin Dashboard - transaction overview and dashboard summary',
      // },
      // {
      //   src: '/zojapay_shot2.png',
      //   caption: 'Admin Dashboard - transaction history table with filters',
      // },
      // {
      //   src: '/zojapay_shot3.png',
      //   caption: 'Admin Dashboard - financial analytics and reporting view',
      // },
      // {
      //   src: '/zojapay_shot4.png',
      //   caption: 'Admin Dashboard - loan table overview',
      // },
    ],
  },
  {
    id: '3',
    title: 'StoreToLet',
    description: 'Multi-tenant e-commerce SaaS with merchant admin dashboard and customer storefronts.',
    longDescription:
      'Built a multi-tenant SaaS e-commerce platform where each registered merchant gets their own custom-domain storefront. Architected the shared component library, merchant admin dashboard, and customer-facing portal with Paystack payment integration.',
    note: 'The dashboard screenshots contain dummy and not production data',
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
        caption: 'Customer View - shop and product listing',
      },
      {
        src: '/alpha_shot2.png',
        caption: 'Customer View - product detail',
      },
      {
        src: '/alpha_shot3.png',
        caption: 'Customer View - cart',
      },
      {
        src: '/alpha_shot4.png',
        caption: 'Customer View - dual gateway checkout (Paystack / Korapay)',
      },
    ],
  },
  {
    id: '5',
    title: 'Waitr',
    description: 'A QR-based restaurant ordering platform with split billing and a full operations dashboard, built solo from Figma to production-ready frontend.',
    longDescription:
      'Built end-to-end as the sole frontend engineer from a Figma design. Customers scan a QR code at their table to browse the menu, order, and pay, with split billing and order-type selection, while restaurant staff manage everything from menu items to live order processing on a role-aware admin dashboard. The project was feature-complete on the frontend when the client discontinued it before launch.',
    caseStudy: {
      problem:
        'The client wanted to remove the friction of traditional restaurant ordering, no waiting for a server to take an order, no confusion over splitting a bill, and instant visibility into payment status. On the operations side, restaurant staff needed a single dashboard to manage menus, track orders in real time, and control who on their team could see or do what, since not every staff member should have the same level of access.',
      approach:
        'I split the build into two surfaces with different needs. The customer app used Next.js for fast initial loads on mobile devices scanning a QR code mid-meal, where every second of load time matters. The admin dashboard used React with Chart.js for the analytics views, since it needed to be a data-dense operational tool rather than a fast public-facing page. For payment confirmation, since there was no webhook event reaching the frontend directly, I implemented a polling mechanism that checked payment status at intervals until the backend confirmed the transaction, then surfaced the result immediately to the customer.',
      decisions: [
        'Used Next.js specifically for the customer app to get fast page loads on mobile networks, critical since customers scan a QR code and expect the menu to load almost instantly while seated at a table.',
        'Built the split-bill and order-type selection (dine-in, takeout, delivery) as a single configurable checkout flow rather than separate pages, reducing the number of steps a customer has to take between ordering and paying.',
        'Implemented role-based access control on the admin dashboard so restaurant owners/admins and staff see different views and permissions, a staff member taking orders does not need access to settlement accounts or staff management.',
        'Chose polling over WebSockets for payment confirmation since the backend did not expose a push-based event for this specific flow, polling at sensible intervals balanced responsiveness with simplicity given the project constraints.',
      ],
      results: [
        'Delivered a fully functional customer ordering flow from QR scan through to payment confirmation, including split billing and order type selection.',
        'Built a complete 8-section admin dashboard (overview, menu, categories, orders, past orders, staff, payments, settlements) with role-based access for owners versus staff.',
        'Entire frontend, both customer app and admin dashboard, was feature-complete and production-ready when the client discontinued the project for business reasons unrelated to engineering scope.',
      ],
    },
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=300&fit=crop',
    tags: ['Next.js', 'React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'CSS Modules', 'Chart.js'],
    link: 'https://waitr-user-app.vercel.app/',
    isPrivate: true,
    privateNote: 'Admin dashboard is currently inaccessible as the backend was taken offline after the project was discontinued. The customer-facing ordering app above is a demo version.',
    images: [
      {
        src: '/waitr_shot1.png',
        caption: 'Customer App - QR-triggered menu browsing and item search',
      },
      {
        src: '/waitr_shot2.png',
        caption: 'Customer App - cart and order instructions',
      },
      {
        src: '/waitr_shot3.png',
        caption: 'Customer App - split-bill checkout',
      },
    ],
  },
  {
    id: '6',
    title: 'Revvex',
    description: 'An internal budgeting platform with multi-stage approval workflows, built for Zojatech.',
    longDescription:
      'A budgeting and financial planning platform built internally at Zojatech. Contributed to user management for budget team members and resolved issues across the budget preparation and multi-level approval workflow, where budgets move through 1st and 2nd level approvers up to budget manager and MD-level sign-off.',
    note: 'The dashboard screenshots contain dummy and not production data',
    caseStudy: {
      problem:
        'Budget preparation and approval at most organisations is a manual, slow process involving spreadsheets and email chains. Revvex needed to digitise this into a structured workflow where a budget could be created, reviewed by multiple approval levels in sequence, and tracked clearly at every stage, while ensuring each user only saw and acted on what their role permitted.',
      approach:
        'I worked within the existing Redux Toolkit and RTK Query architecture to fix issues across the budget preparation views and build out the user management screens. For the approval workflow specifically, I focused on making the multi-stage approval chain (1st approver, 2nd approver, budget team, budget manager, MD) behave predictably from a state perspective, since a budget needed to render differently depending on whose turn it was in the approval sequence and what actions were valid at each stage.',
      decisions: [
        'Used Formik for the budget creation and update forms given the multi-field, validation-heavy nature of budget entries, which kept form state and validation logic predictable across create and edit flows.',
        'Modelled the approval chain so that the UI conditionally rendered available actions (approve, reject, request changes) based on the current approval stage and the logged-in user\'s role, rather than showing the same controls to everyone.',
      ],
      results: [
        'Shipped working user management features for adding and viewing budget team members.',
        'Resolved existing issues across the budget preparation flow, improving reliability of creating, updating, and viewing budgets.',
        'Delivered a functional multi-level approval workflow spanning four distinct approval stages with role-aware UI behaviour at each step.',
      ],
    },
    image: '/revvex_shot1.png',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit', 'RTK Query', 'Formik'],
    link: 'https://zojatech.com/products/revvex',
    images: [
      {
        src: '/revvex_shot1.png',
        caption: 'Revvex - manage users',
      },
      {
        src: '/revvex_shot2.png',
        caption: 'Revvex - budget approval flow',
      },
      {
        src: '/revvex_shot3.png',
        caption: 'Revvex - create budget',
      },
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