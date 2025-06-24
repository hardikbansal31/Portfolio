import React from "react";
import { useState } from "react";
import SectionHeader from "./SectionHeader";
import { projects } from "../lib/data";

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const techs = ["All", ...new Set(projects.flatMap((p) => p.tech))];

  return (
    <section id="projects" className="py-10">
      <SectionHeader>
        <strong>PROJECTS</strong>
      </SectionHeader>
      <select
        className="mb-6 px-3 py-2 rounded bg-dark"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        {techs.map((t) => (
          <option key={t}>{t}</option>
        ))}
      </select>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 py-3">
        {projects
          .filter((p) => filter === "All" || p.tech.includes(filter))
          .map((p) => (
            <article
              key={p.title}
              className="rounded-xl p-6 hover:shadow-lg transition bg-dark"
            >
              <h3 className="text-xl font-semibold bg-dark">{p.title}</h3>
              <p className="my-2 text-lg bg-dark">{p.description}</p>
              <p className="text-md mb-4 bg-dark">{p.tech.join(", ")}</p>
              <a
                href={p.demo}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline bg-dark"
              >
                Live Demo
              </a>{" "}
              •{" "}
              <a
                href={p.repo}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline bg-dark"
              >
                GitHub
              </a>
            </article>
          ))}
      </div>
    </section>
  );
};

export default Projects;
