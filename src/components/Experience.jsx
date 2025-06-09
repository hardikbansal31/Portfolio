import React from "react";
import SectionHeader from "./SectionHeader";
import { roles } from "../lib/data";

const Experience = () => {
  return (
    <section id="experience">
      <SectionHeader>
        <strong>EXPERIENCE</strong>
      </SectionHeader>
      <ol className="relative border-l pl-6 space-y-12">
        {roles.map((role) => (
          <li key={role.company} className="ml-4">
            <div className="absolute left-[-7px] w-3 h-3 bg-blue-600 rounded-full" />
            <h3 className="font-semibold">
              {role.title} @ {role.company}
            </h3>
            <time className="text-s text-gray-500">{role.period}</time>
            <ul className="list-disc ml-5 mt-2 space-y-1 text-lg">
              {role.work.map((w) => (
                <li key={w}>{w}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Experience;
