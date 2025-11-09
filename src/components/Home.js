import React from 'react';
import { ReactTyped } from "react-typed";
import { motion } from 'framer-motion';
import profilePic from '../assets/images/profile-pic.jpg';
import SectionWrapper from './SectionWrapper';
import resumePDF from '../assets/files/Ram_N.pdf';
import '../styles/Home.css';

function Home() {
  return (
    <SectionWrapper id="home" gradient="linear-gradient(135deg, #000428, #004e92)">
      <div className="container text-center py-5">
        <motion.h1
          className="display-4 fw-bold text-white mb-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm <span className="text-info">Ramlakhan Chauhan</span>
        </motion.h1>

        <ReactTyped
          strings={[
            "Aspiring Software Developer",
            "Full-Stack Web Enthusiast",
            "Problem Solver & Coder",
          ]}
          typeSpeed={50}
          backSpeed={40}
          loop
          className="fs-4 text-light"
        />

        <motion.p
          className="mt-3 text-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Crafting clean, efficient, and scalable solutions with <strong>Java</strong>, <strong>Python</strong>, and <strong>React</strong>.
        </motion.p>

        <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
          {/* Explore Button */}
          <motion.a
            href="#projects"
            className="btn btn-outline-light btn-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Explore My Work
          </motion.a>

          {/* Download Resume Button */}
          <motion.a
            href={resumePDF}
            download="Ram_Resume.pdf"
            className="btn btn-info btn-lg text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.a>
        </div>

        <motion.div
          className="mt-5"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <img
            src={profilePic}
            alt="Ram Lakhan Chauhan"
            className="img-fluid rounded-circle shadow-lg border border-3 border-light"
            style={{ maxWidth: '180px' }}
          />
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

export default Home;
