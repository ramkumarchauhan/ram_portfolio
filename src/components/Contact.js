import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { FiMail, FiUser, FiMessageCircle } from "react-icons/fi";
import SectionWrapper from "./SectionWrapper";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .send(
        "service_n5ry0q7",
        "template_mhgx0zt",
        formData,
        "kH6d6FAatgc0ydBmO"
      )
      .then(
        () => {
          setStatus("success");
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => setStatus(""), 4000);
        },
        () => {
          setStatus("error");
        }
      );
  };

  return (
    <SectionWrapper
      id="contact"
      gradient="linear-gradient(135deg, #0D1117, #161B22)"
    >
      <div className="container py-5 text-light">
        <motion.h2
          className="text-center mb-5 fw-bold text-info"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Get in Touch
        </motion.h2>

        <div className="row justify-content-center">
          <div className="col-md-6">
            {/* Success & Error Messages */}
            {status === "success" && (
              <motion.div
                className="alert alert-success text-center"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ✅ Message sent successfully!
              </motion.div>
            )}
            {status === "error" && (
              <motion.div
                className="alert alert-danger text-center"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ❌ Oops! Something went wrong. Try again.
              </motion.div>
            )}

            {/* Contact Form */}
            <motion.form
              onSubmit={handleSubmit}
              className="p-4 rounded-4 shadow-lg bg-dark bg-opacity-75 border border-info"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {/* Name */}
              <motion.div className="mb-3" whileFocus={{ scale: 1.02 }}>
                <label className="form-label text-info fw-semibold">
                  <FiUser className="me-2" /> Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control contact-input"
                  placeholder="Enter your name"
                  required
                />
              </motion.div>

              {/* Email */}
              <motion.div className="mb-3" whileFocus={{ scale: 1.02 }}>
                <label className="form-label text-info fw-semibold">
                  <FiMail className="me-2" /> Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control contact-input"
                  placeholder="example@email.com"
                  required
                  autoCapitalize="off"
                />
              </motion.div>

              {/* Message */}
              <motion.div className="mb-4" whileFocus={{ scale: 1.02 }}>
                <label className="form-label text-info fw-semibold">
                  <FiMessageCircle className="me-2" /> Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-control contact-input"
                  placeholder="Write your message..."
                  required
                />
              </motion.div>

              {/* Submit Button */}
              <div className="text-center">
                <motion.button
                  type="submit"
                  className="btn btn-info px-5 py-2 fw-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </motion.button>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default Contact;
