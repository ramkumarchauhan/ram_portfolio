import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { motion } from "framer-motion";

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Navbar
        expand="lg"
        variant="dark"
        expanded={expanded}
        fixed="top"
        style={{
          background: "rgba(20, 20, 20, 0.7)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
        }}
      >
        <Container>
          <Navbar.Brand href="#home" className="fw-bold text-info">
            Ram Kumar
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbar-nav"
            onClick={() => setExpanded(expanded ? false : "expanded")}
          />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto text-center">
              <Nav.Link href="#home" onClick={() => setExpanded(false)}>
                Home
              </Nav.Link>
              <Nav.Link href="#about" onClick={() => setExpanded(false)}>
                About
              </Nav.Link>
              <Nav.Link href="#projects" onClick={() => setExpanded(false)}>
                Projects
              </Nav.Link>
              <Nav.Link href="#contact" onClick={() => setExpanded(false)}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.div>
  );
};

export default Header;
