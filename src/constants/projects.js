import imgMemp from '../assets/project_images/project_memp.png';
import imgMaidToSparkle from '../assets/project_images/project_maid_to_sparkle.png';
import imgCrediDesk from '../assets/project_images/project_credi_desk.png';
import imgAiChickenFarm from '../assets/project_images/project_ai_chicken_farm.png';
import imgStockAdvisors from '../assets/project_images/project_stock_advisors.png';
import imgThaNetwork from '../assets/project_images/project_tha_network.png';

// Project data — premium, achievement-oriented descriptions positioned as enterprise-grade systems.
export const projects = [
  {
    id: 'marine-emissions',
    title: 'Marine Emission Management Platform',
    tagline: 'Compliance-tech · Vessel emissions · EU ETS / FuelEU / IMO DCS',
    domain: 'Compliance-Tech / Maritime',
    description:
      'Enterprise-grade compliance platform for vessel emissions monitoring and regulatory automation across EU ETS, FuelEU Maritime, and IMO DCS. Multi-tenant architecture serving 50+ companies and 1000+ vessels with real-time analytics and automated submissions.',
    highlights: [
      'Multi-tenant architecture isolating 50+ companies and 1000+ vessels',
      'Real-time analytics dashboards powered by Highcharts',
      'Compliance automation pipelines for EU ETS, FuelEU, IMO DCS',
      'Azure Blob Storage integration for evidence and certificate vault',
      'Role-based access with company-scoped permissioning',
    ],
    tech: ['React.js', 'Redux Toolkit', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Azure Blob Storage', 'Highcharts'],
    stats: [
      { label: 'Companies', value: '50+' },
      { label: 'Vessels', value: '1000+' },
      { label: 'Uptime', value: '99.9%' },
    ],
    accent: 'from-cyan-500 via-blue-500 to-indigo-500',
    image: imgMemp,
    featured: true,
  },
  {
    id: 'maid-to-sparkle',
    title: 'Maid to Sparkle — Workforce Management',
    tagline: 'Cross-platform · GPS tracking · Offline-first',
    domain: 'Workforce Management',
    description:
      'Cross-platform workforce management ecosystem serving 3000+ field users with real-time GPS tracking, automated mileage, attendance workflows, and offline-first architecture. Native Kotlin/Swift apps integrated with a CodeIgniter 4 + MySQL backend.',
    highlights: [
      'Real-time GPS tracking generating 10000+ daily location events',
      'Offline synchronization with conflict-aware queueing',
      'Device-bound authentication and security policies',
      'Automated mileage and payroll calculations',
      'Twilio SMS/voice integrations for field communications',
    ],
    tech: ['Kotlin', 'Swift', 'PHP', 'CodeIgniter 4', 'MySQL', 'Firebase', 'Google Roads API', 'Twilio', 'WorkManager', 'CoreLocation'],
    stats: [
      { label: 'Users', value: '3000+' },
      { label: 'GPS Events / day', value: '10K+' },
      { label: 'Platforms', value: 'iOS · Android · Web' },
    ],
    accent: 'from-emerald-500 via-teal-500 to-cyan-500',
    image: imgMaidToSparkle,
    featured: true,
  },
  {
    id: 'credidesk',
    title: 'CrediDesk — Credit Management Platform',
    tagline: 'Fintech · Real-time dashboards · Modular architecture',
    domain: 'Fintech',
    description:
      'Enterprise-grade financial workflow and credit management system built on Vue 3 / Nuxt with a modular component library, real-time SignalR updates, multi-language support, and 90+ Lighthouse performance score.',
    highlights: [
      '209 modular components organized as a scalable design system',
      'SignalR real-time updates for live credit and risk events',
      'Multi-language (i18n) support with locale-aware formatting',
      'Granular role-based permissions across the entire app surface',
      '90+ Lighthouse score across performance, accessibility, and SEO',
    ],
    tech: ['Nuxt.js', 'Vue.js', 'Pinia', 'PrimeVue', 'SignalR', 'Tailwind CSS', 'Axios'],
    stats: [
      { label: 'Components', value: '209' },
      { label: 'Lighthouse', value: '90+' },
      { label: 'Locales', value: 'Multi' },
    ],
    accent: 'from-violet-500 via-fuchsia-500 to-purple-500',
    image: imgCrediDesk,
    featured: true,
  },
  {
    id: 'ai-chicken-farm',
    title: 'AI Chicken Farm — Poultry Intelligence Platform',
    tagline: 'Computer vision · Multi-role admin · Real-time monitoring',
    domain: 'AI / IoT / AgriTech',
    description:
      'AI-powered poultry farm management and analytics platform with multi-role administration architecture, operational monitoring, and scalable dashboard systems. Computer-vision pipelines (YOLO/OpenCV) ingest live RTSP camera feeds while a Django + Channels backend streams insights via WebSockets to React dashboards.',
    highlights: [
      'Two-tier architecture: Super Admin control plane + Farm Admin operations panel',
      'Computer vision pipeline using Ultralytics YOLO + OpenCV on RTSP camera streams',
      'Real-time WebSocket alerts via Django Channels / Daphne ASGI',
      'MUI Data Grid + X-Charts powered analytics for behavior, feeding, and biosecurity events',
      'Containerized React + Django services orchestrated via Docker for reproducible deployments',
      'Role-based authentication with JWT and tenant-scoped farm dashboards',
    ],
    tech: ['React 18', 'MUI', 'MUI X-Charts', 'WebSockets', 'Django 5', 'Django REST Framework', 'Channels', 'Daphne', 'Ultralytics YOLO', 'OpenCV', 'MySQL', 'Docker'],
    stats: [
      { label: 'Roles', value: 'Super · Admin' },
      { label: 'Pipeline', value: 'YOLO + OpenCV' },
      { label: 'Realtime', value: 'WebSockets' },
    ],
    accent: 'from-amber-500 via-orange-500 to-rose-500',
    image: imgAiChickenFarm,
    featured: true,
  },
  {
    id: 'stock-advisors',
    title: 'Stock Advisors — Cross-Platform Trading Companion',
    tagline: 'Fintech · Mobile + Web · Real-time advisory',
    domain: 'Fintech / Capital Markets',
    description:
      'Cross-platform trading and advisory companion built with Angular 18 + Ionic 8 + Capacitor, delivering a single codebase across iOS, Android, and Web. Firebase-backed authentication and messaging, ApexCharts-driven analytics, in-app subscriptions, and PDF report generation power a polished retail-investor experience.',
    highlights: [
      'Single Angular 18 + Ionic 8 codebase shipping to iOS, Android, and Web via Capacitor',
      'Firebase Auth, Firestore, and Cloud Messaging for secure auth and push notifications',
      'In-app purchases and subscription tiers integrated with Capacitor purchase plugins',
      'ApexCharts-powered live market analytics with smooth real-time updates',
      'PDF report generation, share sheets, and offline-friendly file management',
      'Local + remote notifications, badge counts, and deep-linking flows',
    ],
    tech: ['Angular 18', 'Ionic 8', 'Capacitor 6', 'Firebase', 'ApexCharts', 'TypeScript', 'RxJS', 'SCSS'],
    stats: [
      { label: 'Platforms', value: 'iOS · Android · Web' },
      { label: 'Charts', value: 'ApexCharts' },
      { label: 'Auth', value: 'Firebase' },
    ],
    accent: 'from-blue-500 via-indigo-500 to-violet-500',
    image: imgStockAdvisors,
    featured: false,
  },
  {
    id: 'tha-network',
    title: 'THA Network — Creator Social Platform',
    tagline: 'Social · Real-time messaging · Monetization',
    domain: 'Social / Creator Economy',
    description:
      'Full-stack creator social network built on Laravel 8 + Vue 3 + Inertia.js, combining real-time messaging, follow/like graphs, content monetization, and a polished single-page experience. Stripe and PayPal power subscriptions and payouts, while Pusher and Laravel WebSockets drive live notifications and chat.',
    highlights: [
      'SPA experience powered by Inertia.js bridging Laravel controllers and Vue 3 pages',
      'Real-time chat, notifications, and presence via Pusher + Laravel WebSockets',
      'Creator monetization with Stripe subscriptions and PayPal Payouts',
      'Follow / like / block social graph with Spatie Media Library asset pipeline',
      'JWT-secured APIs (tymon/jwt-auth) and Yajra DataTables-powered admin tooling',
      'Swagger-documented API surface (l5-swagger) for partner integrations',
    ],
    tech: ['Laravel 8', 'Vue 3', 'Inertia.js', 'Vuex', 'Pusher', 'Laravel WebSockets', 'Stripe', 'PayPal', 'MySQL'],
    stats: [
      { label: 'Stack', value: 'Laravel · Vue' },
      { label: 'Realtime', value: 'Pusher' },
      { label: 'Payments', value: 'Stripe · PayPal' },
    ],
    accent: 'from-pink-500 via-rose-500 to-orange-500',
    image: imgThaNetwork,
    featured: false,
  },
];
