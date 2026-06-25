export const siteConfig = {
  name: "Alex Morgan",
  title: "Alex Morgan | Full Stack Developer & AI Engineer",
  description:
    "Premium developer portfolio showcasing full stack development, AI engineering, and creative digital experiences.",
  url: "https://alexmorgan.dev",
  email: "hello@alexmorgan.dev",
  github: "https://github.com/alexmorgan",
  linkedin: "https://linkedin.com/in/alexmorgan",
  twitter: "https://twitter.com/alexmorgan",
  resumeUrl: "/resume.pdf",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { label: "Years Experience", value: 5, suffix: "+" },
  { label: "Projects Completed", value: 48, suffix: "+" },
  { label: "Happy Clients", value: 32, suffix: "+" },
  { label: "Technologies", value: 24, suffix: "+" },
];

export const skillCategories = {
  Frontend: [
    { name: "React / Next.js", level: 95, icon: "react" },
    { name: "TypeScript", level: 92, icon: "typescript" },
    { name: "Tailwind CSS", level: 90, icon: "tailwind" },
    { name: "Framer Motion", level: 88, icon: "motion" },
  ],
  Backend: [
    { name: "Node.js", level: 90, icon: "nodejs" },
    { name: "Python", level: 85, icon: "python" },
    { name: "GraphQL", level: 82, icon: "graphql" },
    { name: "REST APIs", level: 93, icon: "api" },
  ],
  AI: [
    { name: "OpenAI / LLMs", level: 88, icon: "ai" },
    { name: "LangChain", level: 85, icon: "langchain" },
    { name: "PyTorch", level: 78, icon: "pytorch" },
    { name: "Computer Vision", level: 75, icon: "vision" },
  ],
  Cloud: [
    { name: "AWS", level: 85, icon: "aws" },
    { name: "Vercel", level: 92, icon: "vercel" },
    { name: "GCP", level: 78, icon: "gcp" },
    { name: "Azure", level: 72, icon: "azure" },
  ],
  DevOps: [
    { name: "Docker", level: 88, icon: "docker" },
    { name: "Kubernetes", level: 80, icon: "k8s" },
    { name: "CI/CD", level: 85, icon: "cicd" },
    { name: "Terraform", level: 75, icon: "terraform" },
  ],
  Databases: [
    { name: "PostgreSQL", level: 90, icon: "postgres" },
    { name: "MongoDB", level: 85, icon: "mongo" },
    { name: "Redis", level: 82, icon: "redis" },
    { name: "Supabase", level: 88, icon: "supabase" },
  ],
  Tools: [
    { name: "Git", level: 95, icon: "git" },
    { name: "Figma", level: 80, icon: "figma" },
    { name: "VS Code", level: 95, icon: "vscode" },
    { name: "Postman", level: 88, icon: "postman" },
  ],
};

export const experiences = [
  {
    company: "TechVision AI",
    position: "Senior Full Stack Engineer",
    duration: "2023 — Present",
    responsibilities: [
      "Led development of AI-powered SaaS platform serving 50K+ users",
      "Architected microservices infrastructure reducing latency by 40%",
      "Mentored team of 5 junior developers on best practices",
      "Implemented real-time collaboration features with WebSockets",
    ],
  },
  {
    company: "Digital Craft Studio",
    position: "Full Stack Developer",
    duration: "2021 — 2023",
    responsibilities: [
      "Built award-winning portfolio websites for creative agencies",
      "Developed e-commerce platforms with 99.9% uptime",
      "Integrated payment systems and analytics dashboards",
      "Optimized Core Web Vitals achieving 98+ Lighthouse scores",
    ],
  },
  {
    company: "StartupLab Inc.",
    position: "Frontend Developer",
    duration: "2019 — 2021",
    responsibilities: [
      "Created responsive React applications for fintech clients",
      "Implemented design systems used across 10+ products",
      "Reduced bundle size by 35% through code splitting",
      "Collaborated with UX team on user research and testing",
    ],
  },
];

export const projects = [
  {
    id: "neural-canvas",
    title: "Neural Canvas",
    description:
      "AI-powered creative studio that transforms text prompts into stunning visual artwork using custom diffusion models.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    category: "AI",
    tags: ["Next.js", "Python", "PyTorch", "OpenAI"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: "flowstack",
    title: "FlowStack",
    description:
      "Modern project management platform with real-time collaboration, kanban boards, and AI task prioritization.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80",
    category: "Full Stack",
    tags: ["React", "Node.js", "PostgreSQL", "Socket.io"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: "cryptovault",
    title: "CryptoVault",
    description:
      "Secure cryptocurrency portfolio tracker with real-time market data, DeFi integration, and advanced analytics.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80",
    category: "Full Stack",
    tags: ["TypeScript", "GraphQL", "Redis", "Web3"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: "pixel-perfect",
    title: "Pixel Perfect UI",
    description:
      "Component library and design system with 200+ accessible components, dark mode, and animation presets.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    category: "Frontend",
    tags: ["React", "Storybook", "Tailwind", "Framer Motion"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: "mediscan",
    title: "MediScan AI",
    description:
      "Medical imaging analysis platform using deep learning for early disease detection with 94% accuracy.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    category: "AI",
    tags: ["Python", "TensorFlow", "FastAPI", "Docker"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: "shopwave",
    title: "ShopWave",
    description:
      "Headless e-commerce platform with AR product previews, AI recommendations, and seamless checkout.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    category: "Backend",
    tags: ["Node.js", "Stripe", "MongoDB", "AWS"],
    github: "https://github.com",
    live: "https://example.com",
  },
];

export const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, TechVision AI",
    content:
      "Alex transformed our vision into a stunning product. Their attention to detail and technical expertise is unmatched.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
  },
  {
    name: "Marcus Johnson",
    role: "Design Director, Digital Craft",
    content:
      "Working with Alex was a game-changer. They deliver pixel-perfect implementations with buttery-smooth animations.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
  },
  {
    name: "Emily Rodriguez",
    role: "Product Lead, StartupLab",
    content:
      "Alex's ability to bridge design and engineering is exceptional. Every project exceeds expectations.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
  },
  {
    name: "David Kim",
    role: "CTO, FlowStack",
    content:
      "The architecture Alex built scaled seamlessly from MVP to 100K users. Truly world-class engineering.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
  },
];

export const blogPosts = [
  {
    title: "Building Performant Animations in React",
    excerpt: "A deep dive into Framer Motion, GSAP, and performance optimization techniques.",
    date: "Mar 15, 2025",
    readTime: "8 min read",
    tag: "Frontend",
  },
  {
    title: "The Future of AI-Assisted Development",
    excerpt: "How LLMs are transforming the way we write, review, and ship code.",
    date: "Feb 28, 2025",
    readTime: "6 min read",
    tag: "AI",
  },
  {
    title: "Design Systems That Scale",
    excerpt: "Lessons learned building component libraries for enterprise applications.",
    date: "Jan 10, 2025",
    readTime: "10 min read",
    tag: "Design",
  },
];

export const projectFilters = ["All", "AI", "Full Stack", "Frontend", "Backend", "Mobile"];

export const socialLinks = [
  { label: "GitHub", href: siteConfig.github, icon: "github" },
  { label: "LinkedIn", href: siteConfig.linkedin, icon: "linkedin" },
  { label: "Twitter", href: siteConfig.twitter, icon: "twitter" },
  { label: "Email", href: `mailto:${siteConfig.email}`, icon: "email" },
];
