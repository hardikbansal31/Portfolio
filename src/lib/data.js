// lib/data.js
export const skills = {
  Frontend: ["React", "Next.js", "k"],
  Backend: ["Spring Boot", "Node.js", "Express.js"],
  DevOps: ["Docker", "Kubernetes", "GitHub Actions"],
};

export const projects = [
  {
    title: "E-Commerce Store",
    description: "Full-stack shop with MySQL & JWT auth",
    tech: ["Next.js", "Spring Boot", "Prisma", "MySQL"],
    demo: "https://mystore.vercel.app",
    repo: "https://github.com/you/mystore",
  },
  // …
];

export const roles = [
  {
    company: "GeeksforGeeks Student Chapter.",
    title: "Technical Committee Member",
    period: "Jan 2024 – Present",
    work: [
      "Optimized article rendering, cutting TTFB by 35 %",
      "Wrote 20+ DSA-heavy editorial pieces",
    ],
  },
  {
    company: "Sort Club.",
    title: "Technical Committee Member",
    period: "Jul 2024 – Present",
    work: ["Led migration to micro-frontends", "Mentored 5 junior devs"],
  },
];
