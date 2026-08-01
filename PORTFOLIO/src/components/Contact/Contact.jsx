import "./Contact.css";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
function Contact() {
  return (
      <section className="contact" id="contact">
      <div className="contact-container">

        <div className="contact-left">
          <p className="contact-tag">Let's Connect</p>

          <h2>
            Ready to build something meaningful?
          </h2>

          <p className="contact-description">
            Whether you have an internship opportunity, a freelance project,
            or simply want to connect, I'd love to hear from you.
            Let's create digital experiences that make a difference.
          </p>

          <a href="mailto:youremail@gmail.com" className="contact-btn">
            Let's Talk
          </a>
        </div>

        <div className="contact-right">

          <h3>Get in Touch</h3>

          <a href="https://www.linkedin.com/in/fatiha-osman/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
            LinkedIn
          </a>

          <a href="mailto:fatihaosman17l@gmail.com">
            <MdEmail />
            Email
          </a>

          <a href="https://github.com/fatihaosman" target="_blank" rel="noopener noreferrer">
            <FaGithub />
            GitHub
          </a>

          <a href="https://wa.me/254718154635" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
            WhatsApp
          </a>

        </div>

      </div>
    </section>
  )
}

export default Contact