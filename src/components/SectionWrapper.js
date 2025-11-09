import React from "react";
import { motion } from "framer-motion";

function SectionWrapper({ id, children, gradient }) {
  return (
    <motion.section
      id={id}
      className="section-wrapper"
      style={{
        background: gradient,
        backgroundSize: "200% 200%",
        animation: "gradientFlow 10s ease infinite",
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.section>
  );
}

export default SectionWrapper;
