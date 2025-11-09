import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { FiCode, FiGlobe, FiDatabase } from "react-icons/fi";
import "../styles/Projects.css";

const projectData = [
  {
    id: 1,
    title: "Portfolio Website",
    category: "Frontend",
    description: "A personal portfolio built using React.js, Framer Motion, and Bootstrap.",
    tech: ["React", "CSS", "Framer Motion"],
    link: "#",
  },
  {
    id: 2,
    title: "Online Placement Portal",
    category: "Fullstack",
    description: "Flask + MySQL based fullstack app for managing student placements.",
    tech: ["Flask", "MySQL", "Bootstrap"],
    link: "#",
  },
  {
    id: 3,
    title: "API Backend Service",
    category: "Backend",
    description: "Node.js and Express REST API for managing user data securely.",
    tech: ["Node.js", "Express", "MongoDB"],
    link: "#",
  },
    {
    id: 4,
    title: "Employee Management System",
    category: "Backend",
    description:
      "Spring Boot and MySQL powered system for managing employee records, roles, and payroll efficiently.",
    tech: ["Java", "Spring Boot", "MySQL"],
    link: "#",
  },
  {
    id: 5,
    title: "Student Result Portal",
    category: "Fullstack",
    description:
      "Flask-based web app that allows teachers to upload, and students to view results securely using SQLite.",
    tech: ["Python", "Flask", "SQLite"],
    link: "#",
  },
];

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projectData
      : projectData.filter((p) => p.category === filter);

  return (
    <SectionWrapper
      id="projects"
      gradient="linear-gradient(135deg, #0F2027, #203A43, #2C5364)"
    >
      <div className="container py-5 text-light">
        <motion.h2
          className="text-center mb-4 fw-bold text-info"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          My Projects
        </motion.h2>

        {/* ✅ Responsive Filter Buttons */}
        <div className="filter-bar text-center mb-4">
          {["All", "Frontend", "Backend", "Fullstack"].map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`filter-btn ${
                filter === cat ? "active" : ""
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat === "Frontend" && <FiGlobe className="me-2" />}
              {cat === "Backend" && <FiDatabase className="me-2" />}
              {cat === "Fullstack" && <FiCode className="me-2" />}
              {cat}
            </motion.button>
          ))}
        </div>

        {/* ✅ Responsive Project Cards */}
        <div className="row justify-content-center g-4">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="col-lg-4 col-md-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="project-card p-4 rounded shadow-lg bg-dark bg-opacity-75 border border-info h-100">
                <h4 className="fw-bold text-info mb-3">{project.title}</h4>
                <p>{project.description}</p>
                <div className="tech-stack mb-3">
                  {project.tech.map((t, i) => (
                    <span key={i} className="badge bg-info text-dark me-2">
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="btn btn-outline-info"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Projects;
