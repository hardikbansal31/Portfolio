import React from "react";
import SectionHeader from "./SectionHeader";
import { Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact">
      <SectionHeader>
        <strong>CONTACT</strong>
      </SectionHeader>
      <Row className="text-lg">
        <Col md={6} className="mb-4">
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:bansalhardik31@gmail.com"
              className="text-blue-600 hover:underline"
            >
              bansalhardik31@gmail.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:9326748670" className="text-blue-600 hover:underline">
              9326748670
            </a>
          </p>
        </Col>

        <Col md={6}>
          <p>
            <a
              href="https://www.linkedin.com/in/hardik-bansal-08aa2727a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              <FaLinkedin className="inline mr-1" />: Visit Profile
            </a>
          </p>
          <p>
            <a
              href="https://github.com/hardikbansal31"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              <FaGithub className="inline mr-1" />: @hardikbansal31
            </a>
          </p>
        </Col>
      </Row>
    </section>
  );
};

export default Contact;
