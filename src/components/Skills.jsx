import React from "react";
import SectionHeader from "./SectionHeader";
import { skills } from "../lib/data";

const Skills = () => {
  return (
    <section id="skills">
      <SectionHeader> <strong>SKILLS</strong></SectionHeader>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(skills).map(([domain, stack]) => (
          <div
            key={domain}
            className="p-6 rounded-xl hover:shadow-lg transition bg-dark"
          >
            <h3 className="font-semibold mb-2 bg-dark">{domain}</h3>
            <ul className="space-y-1 bg-dark">
              {stack.map((s) => (
                <li key={s} className="bg-dark">• {s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
