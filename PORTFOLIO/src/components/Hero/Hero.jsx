import "./Hero.css";
import forest from "../../assets/frame 4 (4).png";
// import { FiArrowUpRight } from "react-icons/fi";
import { IoMdDownload } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import { ImLinkedin2 } from "react-icons/im";
import { GrGithub } from "react-icons/gr";
import { MdEmail } from "react-icons/md";


function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <p className="hero-role">
          FRONT-END DEVELOPER & UI/UX DESIGNER
        </p>

        <h1>
          Hi, I'm <br />
          <span>Fatiha Osman</span>
        </h1>

        <p className="hero-description">
          I design and build user-centered digital solutions
          that combine clean code with intuitive design.
        </p>

  
         <div className="hero-buttons">
          <button className="download-btn" onClick={() => window.open('https://drive.google.com/file/d/14nIAg-OTcGdwR3WRTDMXFf_5Ow8BcjTY/view?usp=sharing', '_blank')}>
                 <span>Download Resume</span>
                <IoMdDownload />
          </button>

         <a href="#projects" className="view-btn" >
                 <span>View work</span>
                 <FaArrowRight />
         </a>
         </div>

         <div className="social-icons">
          <p>Connect with me</p>
           <div>
            <a href="https://www.linkedin.com/in/fatiha-osman/" target="_blank" rel="noopener noreferrer">
              <ImLinkedin2 />
            </a>
            <a href="https://github.com/fatihaosman" target="_blank" rel="noopener noreferrer">
              <GrGithub />
            </a>
            <a href="mailto:fatihaosman17@gmail.com">
              <MdEmail />
            </a>
           </div>
         </div>


      </div>

      <div className="hero-image">
        <img src={forest} alt="forest" />
      </div>

    </section>
  );
}

export default Hero;