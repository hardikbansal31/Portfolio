import React from "react";
import SectionHeader from "./SectionHeader";

const Edu = () => {
  return (
    <section id="edu" className="py-10">
      <SectionHeader>Education</SectionHeader>

      <h4 className="text-2xl font-semibold">Mumbai University</h4>

      <h5 className="text-xl">Thakur College of Engineering & Technology</h5>

      <p className="mt-3 text-lg leading-relaxed">
        <strong>Course:</strong> B.E. in Computer Engineering <br />
        <strong>Duration:</strong> 2023 - 2027 (Expected) <br />
        <strong>CGPA:</strong> 9.35
      </p>
    </section>
  );
};

export default Edu;
