import "./Egerconnect.css";

import coverImage from "../../assets/eger.png";
// import video from "../../assets/";


import homepage from "../../assets/homepage.png";
import clubs from "../../assets/clubs.png";
import notices from "../../assets/notices.png";
import events from "../../assets/events.png";
import lostFound from "../../assets/lostfound.png";
import support from "../../assets/support.png";
import aboutEgerton from "../../assets/about.png";
// import registration from "../../assets/registration.png";


const walkthrough = [
  {
    title: "Homepage",
    image: homepage,
    description:
      "Introduces EgerConnect with a clear landing section that explains the platform's purpose. The homepage also highlights recent notices, upcoming events, student clubs, and contact information to help visitors quickly understand what the website offers."
  },

  {
    title: "Student Clubs",
    image: clubs,
    description:
      "Showcases the clubs and societies available at Egerton University, allowing students to discover communities that match their interests. Each club includes a dedicated page with detailed information and activities."
  },

  {
    title: "Notices",
    image: notices,
    description:
      "Provides a centralized space for official university announcements, ensuring students can easily access faculty notices, academic updates, and important communications in one place."
  },

  {
    title: "Events",
    image: events,
    description:
      "Displays upcoming university events in a structured timeline, helping students stay informed about activities, workshops, competitions, and important campus dates."
  },

  {
    title: "Lost & Found",
    image: lostFound,
    description:
      "Allows students to browse reported lost and found items, making it easier to reconnect owners with misplaced belongings while reducing reliance on social media posts."
  },

  {
    title: "Scholarships & Student Support",
    image: support,
    description:
      "Brings together scholarship opportunities, bursaries, and financial support resources. Students facing financial challenges can also submit support requests through a dedicated assistance form."
  },

  {
    title: "About Egerton",
    image: aboutEgerton,
    description:
      "Introduces students to the university's history, campuses, faculties, and culture, providing useful information for new students and anyone interested in learning more about Egerton University."
  },

  // {
  //   title: "Student Authentication",
  //   image: registration,
  //   description:
  //     "Provides a simple registration and login process that allows students to securely access personalized features and participate in the EgerConnect platform."
  // }
];


function EgerConnect() {
  return (
    <main className="case-study">

      {/* HERO */}

      <section className="case-hero">

        <div className="case-hero-content">

          <p className="case-tag">
            CASE STUDY
          </p>

          <h1>
            EGERCONNECT
          </h1>

          <p className="case-subtitle">
            A student-centered information and support platform
            designed to simplify access to campus resources at
            Egerton University.
          </p>

        </div>

        <img
          src={coverImage}
          alt="EgerConnect"
          className="case-cover"
        />

      </section>

      {/* video*/}

      {/* <section className="case-section">
        <h2>Video</h2>
        <video  width="100%" height="315"
        src={video} type="video/mp4"
        controls
        muted
        autoPlay>
       

        </video>
        
      </section> */}

      {/* OVERVIEW */}

      <section className="case-section">

        <h2>Project Overview</h2>

        <p>
          EGERCONNECT is a centralized web platform designed
          to improve how students access campus information
          such as notices, events, scholarships, support
          services, and lost & found resources.
        </p>

        <div className="project-info">

          <div>
            <h4>Role</h4>
            <p>UX/UI Designer, Frontend & Backend Developer</p>
          </div>

          <div>
            <h4>Timeline</h4>
            <p>Academic Project</p>
          </div>

          <div>
            <h4>Tools</h4>
            <p>
              Figma, HTML, CSS, JavaScript,
              Django, PostgreSQL
            </p>
          </div>

        </div>

      </section>

      {/* PROBLEM */}

      <section className="case-section">

        <h2>Problem Space</h2>

        <p>
          Students at Egerton University often relied on
          scattered communication channels such as WhatsApp
          groups, notice boards, and word of mouth to access
          important campus updates.
        </p>

        <p>
          As a result, many students missed deadlines,
          events, scholarship opportunities, and support
          services due to delayed or inconsistent
          communication.
        </p>

      </section>

      {/* RESEARCH */}

      <section className="case-section">

        <h2>Research & Discovery</h2>

        <p>
          To better understand student frustrations,
          I conducted research through Google Form
          questionnaires, system observation, and
          informal discussions with students.
        </p>

        <ul className="research-findings">
          <li>Students depended heavily on WhatsApp groups</li>
          <li>Existing systems felt cluttered</li>
          <li>Important updates were often missed</li>
          <li>New students struggled navigating university resources</li>
        </ul>

      </section>

      {/* DESIGN GOALS */}

      <section className="case-section">

        <h2>Design Goals</h2>

        <div className="goals-grid">

          <div className="goal-card">
            Simplify Navigation
          </div>

          <div className="goal-card">
            Centralize Resources
          </div>

          <div className="goal-card">
            Improve Accessibility
          </div>

          <div className="goal-card">
            Reduce Clutter
          </div>

          <div className="goal-card">
            Structured Experience
          </div>

        </div>

      </section>

           {/* EXPERIENCE WALKTHROUGH */}

        <section className="case-section">

            <h2>Website Walkthrough</h2>

            <p className="eger-walkthrough-intro">
              Explore the main sections of EgerConnect, showcasing how students
              can discover campus information, access support services, and
              navigate university resources through a centralized platform.
            </p>

            <div className="eger-walkthrough-slider">
                {walkthrough.map((screen,index)=>(
                <div className="eger-walkthrough-card" key={index}>

                <img src={screen.image} />

                <div className="eger-walkthrough-content">

                <h3>{screen.title}</h3>

                <p>{screen.description}</p>

                </div>

                </div>
                ))}
            </div>

       </section> 

      {/* Core FEATURES */}

      {/* <section className="case-section">

        <h2>Core Features</h2>

        <div className="features-grid">

          <div className="feature-card">
            <h3>Notices & Announcements</h3>
            <p>Centralized updates and deadlines.</p>
          </div>

          <div className="feature-card">
            <h3>Events</h3>
            <p>Organized campus event listings.</p>
          </div>

          <div className="feature-card">
            <h3>Scholarships & Bursaries</h3>
            <p>Accessible financial aid information.</p>
          </div>

          <div className="feature-card">
            <h3>Lost & Found</h3>
            <p>Digital reporting and item tracking.</p>
          </div>

          <div className="feature-card">
            <h3>Student Support Requests</h3>
            <p>Structured support submissions.</p>
          </div>

          <div className="feature-card">
            <h3>Admin Dashboard</h3>
            <p>Management of system content.</p>
          </div>

        </div>

      </section> */}

      {/* DEVELOPMENT */}

      <section className="case-section">

        <h2>Development</h2>

        <p>
          I designed and developed the complete platform
          architecture, including frontend interfaces,
          backend APIs, authentication systems, and
          relational database structure.
        </p>

      </section>

      {/* CHALLENGES */}

      <section className="case-section">

        <h2>Challenges</h2>

        <p>
          One of the biggest challenges was organizing
          large amounts of student information without
          overwhelming users.
        </p>

        <p>
          I addressed this by simplifying navigation,
          grouping related content into clear modules,
          and maintaining a consistent visual hierarchy.
        </p>

      </section>

      {/* OUTCOME */}

      <section className="case-section">

        <h2>Outcome</h2>

        <p>
          The final platform provided a centralized and
          more structured student experience that improved
          accessibility to campus resources and simplified
          information discovery.
        </p>

      </section>

      {/* REFLECTION */}

      <section className="case-section">

        <h2>Reflection</h2>

        <p>
          This project strengthened my understanding of
          full-stack product development, user-centered
          design, and scalable system architecture.
        </p>

      </section>

    </main>
  );
}

export default EgerConnect;