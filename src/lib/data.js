// lib/data.js
export const skills = {
  Frontend: ["React", "Next.js", "Bootstrap", "Tailwind", "JavaScript"],
  Backend: ["Spring Boot", "Node.js", "Express.js"],
  DevOps: ["Docker", "Kubernetes", "GitHub Actions"],
};

export const projects = [
  {
    title: "E-Commerce Store",
    description: "Full-stack shop with Node.js & MySQL.",
    tech: ["React", "Node.js", "Express.js", "MySQL", "JavaScript"],
    demo: "https://ecom-frontend-flame-phi.vercel.app/",
    repo: "https://github.com/hardikbansal31/ecom-frontend",
  },
  {
    title: "S.O.R.T Club Website",
    description:
      "Club website developed during my time in S.O.R.T Club as technical team member.",
    tech: ["React", "Bootstrap", "Typecript", "Javascript"],
    demo: "https://sort-mauve-zeta.vercel.app/",
    repo: "https://github.com/hardikbansal31/sort",
  },
  {
    title: "Task Assignment App",
    description: "Full-stack app with role based access.",
    tech: [
      "Next.js",
      "Spring Boot",
      "MySQL",
      "JWT Auth",
      "React",
      "JavaScript",
    ],
    demo: "https://ip-mocha-nine.vercel.app/",
    repo: "https://github.com/hardikbansal31/ipBackend",
  },
  {
    title: "Weather App",
    description:
      "A simple weather app that fetches data from Openweather and shows images from Unsplash.",
    tech: ["HTML", "CSS", "Javascript"],
    demo: "https://hardikbansal31.github.io/weather/",
    repo: "https://github.com/hardikbansal31/weather",
  },
  // …
];

export const roles = [
  {
    company: "GeeksforGeeks Student Chapter.",
    title: "Vice Chairperson",
    period: "June 2025 – Present",
    work: [
      "Optimized article rendering, cutting TTFB by 35 %",
      "Wrote 20+ DSA-heavy editorial pieces",
    ],
  },
  {
    company: "Sort Club.",
    title: "Vice President",
    period: "June 2025 – Present",
    work: ["Led migration to micro-frontends", "Mentored 5 junior devs"],
  },
  {
    company: "GeeksforGeeks Student Chapter.",
    title: "Technical Committee Member",
    period: "Jan 2025 – March 2025",
    work: [
      "Optimized article rendering, cutting TTFB by 35 %",
      "Wrote 20+ DSA-heavy editorial pieces",
    ],
  },
  {
    company: "Sort Club.",
    title: "Technical Committee Member",
    period: "Jul 2024 – March 2025",
    work: ["Led migration to micro-frontends", "Mentored 5 junior devs"],
  },
];
