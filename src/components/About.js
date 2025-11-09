import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaTools, FaAward } from "react-icons/fa";
import "../styles/About.css";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container py-5">
        <motion.h2
          className="text-center mb-4 section-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="row align-items-center">
          <motion.div
            className="col-md-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="about-card">
              <p>
                Currently working as a <strong>Junior Engineer – Technical Support</strong> at
                iEnergizer, Noida. I have a strong foundation in Java, Python, DSA, and
                Full-Stack Development. I've developed and deployed several web
                applications and actively solve DSA problems on HackerRank.
              </p>
              <p>
                I’m passionate about building scalable systems, writing clean
                code, and creating solutions that make an impact. Combining
                customer-facing experience with technical knowledge, I aim to
                design efficient, reliable, and user-friendly applications.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="col-md-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="skills-card">
              <h3><FaCode className="icon" /> Skills</h3>
              <ul className="list-unstyled">
                <li><FaTools className="sub-icon" /> Languages: Java, Python, C++, JavaScript</li>
                <li><FaDatabase className="sub-icon" /> Frameworks/Tools: Spring Boot, React.js, Node.js, Express, Git, MySQL, MongoDB, Postman</li>
                <li><FaCode className="sub-icon" /> Core Concepts: DSA, OOP, REST APIs, SDLC, Agile Development, Troubleshooting</li>
              </ul>

              <h3 className="mt-4"><FaAward className="icon" /> Certifications</h3>
              <ul className="list-unstyled">
                <li>Infosys Springboard Certification — Java Programming & DBMS Fundamentals</li>
                <li>Solved 20+ DSA problems on LeetCode & GFG</li>
                <li>Organizer & Volunteer – Parampara Annual Fest at ITM</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
