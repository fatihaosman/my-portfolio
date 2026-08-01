import "./IC-Project.css";

// import homepageVideo from "../../assets/ic-homepage.mp4";
// import interactionVideo from "../../assets/ic-interactions.mp4";

function ICProject() {
  return (
    <main className="case-study">

      {/* HERO */}

      <section className="case-hero">

        <div className="case-hero-content">

          <p className="case-tag">
            CASE STUDY
          </p>

          <h1>
            IC PROJECT
          </h1>

          <p className="case-subtitle">
            Redesigning a marketing agency website through
            interactive UX/UI design and motion design to
            create a more engaging and memorable user
            experience.
          </p>

        </div>

      </section>

      {/* VIDEO 1 */}

      {/* <section className="case-section">

        <h2>Homepage Walkthrough</h2>

        <video
          width="100%"
          controls
          muted
          autoPlay
          src={homepageVideo}
        />

      </section> */}

      {/* VIDEO 2 */}

      {/* <section className="case-section">

        <h2>Interactive Experience</h2>

        <video
          width="100%"
          controls
          muted
          autoPlay
          src={interactionVideo}
        />

      </section> */}

      {/* OVERVIEW */}

      <section className="case-section">

        <h2>Project Overview</h2>

        <p>
          IC (Interactive Communication) is a 360-degree
          marketing agency. The goal of this project was to
          transform their existing website from a static,
          text-heavy experience into an engaging and
          interactive digital platform that better reflects
          the company's creative identity.
        </p>

        <div className="project-info">

          <div>
            <h4>Role</h4>
            <p>UX/UI Designer & Motion Designer</p>
          </div>

          <div>
            <h4>Status</h4>
            <p>Currently In Progress</p>
          </div>

          <div>
            <h4>Tools</h4>
            <p>Figma, Motion Design, Prototyping</p>
          </div>

        </div>

      </section>

      {/* PROBLEM */}

      <section className="case-section">

        <h2>Problem Space</h2>

        <p>
          The previous website relied heavily on text and
          static layouts, making it difficult to communicate
          the agency's creativity, expertise, and unique
          approach to marketing.
        </p>

        <p>
          The challenge was to create a more engaging
          experience that would immediately capture visitor
          attention while clearly communicating the brand's
          services and identity.
        </p>

      </section>

      {/* RESEARCH */}

      <section className="case-section">

        <h2>Research & Discovery</h2>

        <p>
          The redesign focused on understanding how visitors
          interact with agency websites and identifying
          opportunities to create stronger visual storytelling
          through motion and interaction.
        </p>

        <ul className="research-findings">
          <li>Large blocks of text reduced engagement</li>
          <li>Visitors needed quicker access to key information</li>
          <li>Visual storytelling could strengthen brand perception</li>
          <li>Interactive elements increase user engagement</li>
          <li>Motion could better communicate the 360° marketing concept</li>
        </ul>

      </section>

      {/* DESIGN GOALS */}

      <section className="case-section">

        <h2>Design Goals</h2>

        <div className="goals-grid">

          <div className="goal-card">
            Increase User Engagement
          </div>

          <div className="goal-card">
            Improve Visual Storytelling
          </div>

          <div className="goal-card">
            Create Interactive Experiences
          </div>

          <div className="goal-card">
            Showcase Brand Identity
          </div>

          <div className="goal-card">
            Modernize The Website
          </div>

        </div>

      </section>

      {/* KEY INTERACTIONS */}

      <section className="case-section">

        <h2>Key Interactions</h2>

        <div className="features-grid">

          <div className="feature-card">
            <h3>360° Hero Animation</h3>
            <p>
              A rotating interactive element representing
              the agency's 360-degree marketing approach.
            </p>
          </div>

          <div className="feature-card">
            <h3>Location Transition</h3>
            <p>
              Smooth movement from the company introduction
              section into location-focused content.
            </p>
          </div>

          <div className="feature-card">
            <h3>Stacking Service Cards</h3>
            <p>
              Service sections stack on top of each other as
              users scroll through the page.
            </p>
          </div>

          <div className="feature-card">
            <h3>Brand Showcase</h3>
            <p>
              Partner logos surround the rotating 360-degree
              element to highlight client relationships.
            </p>
          </div>

          <div className="feature-card">
            <h3>Motion-Based Navigation</h3>
            <p>
              Interactions guide users naturally through the
              website experience.
            </p>
          </div>

          <div className="feature-card">
            <h3>Interactive Storytelling</h3>
            <p>
              Motion and layout changes create a more dynamic
              browsing experience.
            </p>
          </div>

        </div>

      </section>

      {/* DESIGN PROCESS */}

      <section className="case-section">

        <h2>Design Process</h2>

        <p>
          My role involved redesigning the user experience,
          creating high-fidelity interfaces, planning user
          flows, and designing motion interactions that
          communicate the agency's 360-degree marketing
          philosophy.
        </p>

      </section>

      {/* CHALLENGES */}

      <section className="case-section">

        <h2>Challenges</h2>

        <p>
          One of the main challenges was balancing creativity
          and usability. While motion and interaction can make
          a website more engaging, they must also support the
          user's goals without creating distractions.
        </p>

        <p>
          The solution was to use animation purposefully,
          ensuring every interaction helped communicate the
          brand story and guide users through the content.
        </p>

      </section>

      {/* CURRENT STATUS */}

      <section className="case-section">

        <h2>Current Status</h2>

        <p>
          The project is currently in progress. The homepage
          experience and major interactions have been designed,
          with additional pages and refinements continuing as
          development progresses.
        </p>

      </section>

      {/* REFLECTION */}

      <section className="case-section">

        <h2>Reflection</h2>

        <p>
          This project has strengthened my skills in UX/UI
          design, motion design, and interactive storytelling,
          while providing experience designing for a real
          client and translating brand values into engaging
          digital experiences.
        </p>

      </section>

    </main>
  );
}

export default ICProject;