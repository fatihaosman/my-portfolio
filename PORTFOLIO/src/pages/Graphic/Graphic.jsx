

import "./Graphic.css";

import vendas1 from "../../assets/vendas-1.png";
import vendas2 from "../../assets/vendas-2.png";
import vendas3 from "../../assets/vendas-3.png";
import vendas4 from "../../assets/vendas-4.png";

import design1 from "../../assets/dailygoods.png";
import design2 from "../../assets/design-2.png";
import design3 from "../../assets/design-3.png";
import design4 from "../../assets/design-4.png";

const vendasDesigns = [
  {
    image: vendas1,
    title: "Vendas Promotional Poster",
    category: "Marketing & Promotion",
  },
  {
    image: vendas2,
    title: "Vendas Campaign Design",
    category: "Brand Communication",
  },
  {
    image: vendas3,
    title: "Vendas App Promotion",
    category: "Digital Marketing",
  },
  {
    image: vendas4,
    title: "Vendas Brand Visual",
    category: "Brand Design",
  },
];

const otherDesigns = [
  {
    image: design1,
    title: "Promotional Design",
    category: "Graphic Design",
  },
  {
    image: design2,
    title: "Campaign Artwork",
    category: "Marketing Design",
  },
  {
    image: design3,
    title: "Social Media Design",
    category: "Digital Content",
  },
  {
    image: design4,
    title: "Creative Poster",
    category: "Visual Communication",
  },
];

function DesignCard({ design }) {
  return (
    <article className="graphic-card">
      <div className="graphic-card-image">
        <img
          src={design.image}
          alt={design.title}
          loading="lazy"
        />
      </div>

      <div className="graphic-card-info">
        <h3>{design.title}</h3>
        <p>{design.category}</p>
      </div>
    </article>
  );
}

function Graphic() {
  return (
    <main className="graphic-page">
      <section className="graphic-hero">
        <p className="graphic-eyebrow">SELECTED CREATIVE WORK</p>

        <h1>
          Graphic Design &amp;
          <span> Visual Communication</span>
        </h1>

        <p className="graphic-intro">
          I enjoy creating visual designs that help brands communicate
          their ideas, connect with their audiences, and leave a lasting
          impression. Here is a selection of posters and creative work
          I have developed for brands and projects.
        </p>

        <a href="#vendas-designs" className="graphic-hero-link">
          Explore my work <span aria-hidden="true">↓</span>
        </a>
      </section>

      <section
        className="graphic-work-section"
        id="vendas-designs"
      >
        <div className="graphic-section-heading">
          <div>
            <p className="graphic-eyebrow">01 / BRAND CAMPAIGNS</p>
            <h2>Vendas</h2>
          </div>

          <p className="graphic-section-description">
            Promotional posters and visual content created for Vendas,
            a student marketplace app.
          </p>
        </div>

        <div className="graphic-grid">
          {vendasDesigns.map((design) => (
            <DesignCard key={design.image} design={design} />
          ))}
        </div>
      </section>

      <section className="graphic-work-section other-work">
        <div className="graphic-section-heading">
          <div>
            <p className="graphic-eyebrow">02 / SELECTED PROJECTS</p>
            <h2>Other Design Work</h2>
          </div>

          <p className="graphic-section-description">
            A collection of visual designs created for other clients,
            brands, and creative projects.
          </p>
        </div>

        <div className="graphic-grid">
          {otherDesigns.map((design) => (
            <DesignCard key={design.image} design={design} />
          ))}
        </div>
      </section>
      
    {/* last section */}
      <section className="graphic-contact">
        <p className="graphic-eyebrow">HAVE A PROJECT IN MIND?</p>
        <h2>Let's create something meaningful.</h2>
        <p>
          I am open to graphic design opportunities and collaborations
          with brands looking for thoughtful visual communication.
        </p>
        <a href="mailto:YOUR_EMAIL@example.com">
          Get in touch <span aria-hidden="true">↗</span>
        </a>
      </section>
    </main>
  );
}

export default Graphic;
