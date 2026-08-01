import "./AboutMe.css"
import me from "../../assets/me.jpg";
function AboutMe() {
  return (
     <div id="About" className="aboutme">
      <div className="imgbox">
        <div className="teal"></div>

        <div className="offwhite"></div>

        <img src={me} alt="Fatiha Osman" />
      </div>

      <div className="text">
        <h3>About Me</h3>

        <p>
          Fatiha Osman is an Applied Computer Science student at
          Egerton University and an aspiring Front-End Developer
          and UX/UI Designer. She recently completed an internship
          at MG Solutions, where she contributed to the design and
          development of an election system platform. Fatiha has
          also led and collaborated on university projects,
          including a student-focused ride-hailing app and an
          e-commerce platform. She is passionate about creating
          user-centered digital solutions and aims to grow her
          career in web development and UI/UX design.
        </p>

        <button>
          <a href="">Elevator Pitch</a>
        </button>
      </div>
    </div>
  )
}

export default AboutMe 