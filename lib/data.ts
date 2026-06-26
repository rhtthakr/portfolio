export const siteConfig = {
  name: "Rohit Thakur",
  title: "Rohit Thakur | Web Developer",
  description:
    "Developer experienced in building responsive MERN web applications with clean code, secure APIs, and strong problem-solving skills.",
  url: "https://github.com/rhtthakr/portfolio",
  email: "rohit123thakur456@gmail.com",
  github: "https://github.com/rhtthakr",
  linkedin: "https://www.linkedin.com/in/rohit-thakur-3021372aa",
  twitter: "",
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
  { label: "Years Experience", value: 1, suffix: "+" },
  { label: "Projects Completed", value: 3, suffix: "+" },
  { label: "Internships", value: 1, suffix: "+" },
  { label: "Technologies", value: 12, suffix: "+" },
];

export const skillCategories = {
  Frontend: [
    { name: "React.js", level: 90, icon: "react" },
    { name: "HTML5 & CSS3", level: 92, icon: "tailwind" },
    { name: "JavaScript (ES6+)", level: 88, icon: "react" },
    { name: "Tailwind CSS", level: 86, icon: "tailwind" },
  ],
  Backend: [
    { name: "Node.js & Express", level: 88, icon: "nodejs" },
    { name: "REST APIs", level: 90, icon: "api" },
    { name: "JWT Authentication", level: 82, icon: "api" },
    { name: "MVC Architecture", level: 80, icon: "api" },
  ],
  Database: [
    { name: "MongoDB", level: 90, icon: "mongo" },
    { name: "MySQL", level: 82, icon: "postgres" },
    { name: "Redis", level: 72, icon: "redis" },
    { name: "Supabase", level: 72, icon: "supabase" },
  ],
  Languages: [
    { name: "C", level: 85, icon: "python" },
    { name: "Python", level: 84, icon: "python" },
    { name: "JavaScript", level: 90, icon: "react" },
    { name: "TypeScript", level: 75, icon: "typescript" },
  ],
  Tools: [
    { name: "Git & GitHub", level: 92, icon: "git" },
    { name: "VS Code", level: 90, icon: "vscode" },
    { name: "Postman", level: 86, icon: "postman" },
    { name: "Netlify / Render", level: 84, icon: "vercel" },
  ],
};

export const experiences = [
  {
    company: "IDS Infotech Ltd.",
    position: "Intern",
    duration: "Jan 2025 — June 2025",
    responsibilities: [
      "Collaborated on industry-specific projects, applying learned concepts in a real work environment.",
      "Analyzed problems and worked with teams to develop robust solutions.",
      "Contributed to a positive team environment through collaboration with fellow interns.",
      "Supported staff members with daily tasks to reduce workload and improve focus on priorities.",
    ],
  },
];

export const projects = [
  {
    id: "him-learning",
    title: "Him Learning",
    description:
      "Online course platform built with the MERN stack featuring JWT authentication, instructor dashboard, and course management.",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
    category: "MERN",
    tags: ["React", "Node.js", "MongoDB", "JWT"],
    github: "https://github.com/rhtthakr",
    live: "https://www.himlearning.cfd/",
  },
  {
    id: "todo-app",
    title: "To-Do App",
    description:
      "Responsive task manager with editable and timestamped tasks stored in LocalStorage.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    category: "Frontend",
    tags: ["JavaScript", "LocalStorage", "Responsive", "UI"],
    github: "https://github.com/rhtthakr",
    live: "https://rhtthakr.github.io/To-do-App/",
  },
  {
    id: "bca-website",
    title: "BCA Department Website",
    description:
      "Informative static website for a college department with structured layout and embedded maps.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    category: "Frontend",
    tags: ["HTML", "CSS", "Web Design", "Responsive"],
    github: "https://github.com/rhtthakr",
    live: "https://rhtthakr.github.io/BCAWeb/",
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
    excerpt:
      "A deep dive into Framer Motion, GSAP, and performance optimization techniques.",
    date: "Mar 15, 2025",
    readTime: "8 min read",
    tag: "Frontend",
  },
  {
    title: "The Future of AI-Assisted Development",
    excerpt:
      "How LLMs are transforming the way we write, review, and ship code.",
    date: "Feb 28, 2025",
    readTime: "6 min read",
    tag: "AI",
  },
  {
    title: "Design Systems That Scale",
    excerpt:
      "Lessons learned building component libraries for enterprise applications.",
    date: "Jan 10, 2025",
    readTime: "10 min read",
    tag: "Design",
  },
];

export const projectFilters = ["All", "MERN", "Frontend"];

export const socialLinks = [
  { label: "GitHub", href: siteConfig.github, icon: "github" },
  { label: "LinkedIn", href: siteConfig.linkedin, icon: "linkedin" },
  { label: "Email", href: `mailto:${siteConfig.email}`, icon: "email" },
];
