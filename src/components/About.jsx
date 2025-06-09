import React from "react";
import SectionHeader from "./SectionHeader";
import { Container } from "react-bootstrap";

const About = () => {
  return (
    <section id="about" className="py-10 bg-black">
      <Container>
        <SectionHeader>
          <strong>ABOUT ME</strong>
        </SectionHeader>

        <p className="text-lg leading-relaxed max-w-3xl mx-auto">
          I’m a{" "}
          <span className="font-semibold text-blue-600">
            full-stack developer
          </span>{" "}
          with a strong passion for <span className="font-semibold">React</span>
          , <span className="font-semibold">Java</span>, and crafting seamless{" "}
          <span className="font-semibold">DevOps pipelines</span>. From building
          an <span className="italic">e-commerce platform</span> to launching a{" "}
          <span className="italic">decentralized voting dApp</span>, I enjoy
          turning ideas into scalable, efficient, and impactful applications.
        </p>
      </Container>
    </section>
  );
};

export default About;
