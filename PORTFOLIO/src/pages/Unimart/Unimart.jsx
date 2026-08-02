import "./Unimart.css";

import coverImage from "../../assets/vendas.png";
// import video from "../../assets/unimart-demo.mp4";

import welcome1 from "../../assets/welcome1.png"; 
import welcome2 from "../../assets/welcome2.png";
import signup from "../../assets/signup.png";
import home from "../../assets/home.png";
import shop from "../../assets/shop.png";
import filters from "../../assets/filters.png";
import search from "../../assets/search.png";
import product from "../../assets/product.png";
import cart from "../../assets/cart.png";
import wishlist from "../../assets/wishlist.png";
import checkout from "../../assets/checkout.png";
import profile from "../../assets/profile.png";
import sell from "../../assets/sell.png";
import dashboard from "../../assets/dashboard.png";

const walkthrough = [
  {
    title: "Welcome",
    image: welcome1,
    description:
      "Introduces the Vendas brand with a simple landing page that encourages users to begin their shopping journey."
  },

  {
    title: "Onboarding",
    image: welcome2,
    description:
      "Provides a brief introduction to the platform, highlighting safe campus trading while encouraging users to create an account."
  },

  {
    title: "Account Creation",
    image: signup,
    description:
      "Registration collects only the information needed for university verification while supporting a familiar and straightforward sign-up experience."
  },

  {
    title: "Home",
    image: home,
    description:
      "Combines featured offers, sponsored products, new arrivals, and personalized recommendations to help users discover products immediately after signing in."
  },

  {
    title: "Shop & Categories",
    image: shop,
    description:
      "Products are organized into categories, making it easier for users to browse clothing, electronics, beauty, accessories, and other items."
  },

  {
    title: "Filters & Sorting",
    image: filters,
    description:
      "Allows users to refine products by price, condition, and sorting options, making it easier to find relevant listings quickly."
  },

  {
    title: "Search",
    image: search,
    description:
      "Real-time search suggestions help users find products faster while reducing unnecessary browsing and search errors."
  },

  {
    title: "Product Details",
    image: product,
    description:
      "Displays product images, pricing, descriptions, available sizes, colors, and related items to support confident purchasing decisions."
  },

  {
    title: "Shopping Cart",
    image: cart,
    description:
      "Provides an editable order summary with quantity controls, pricing details, and product recommendations before checkout."
  },

  {
    title: "Wishlist",
    image: wishlist,
    description:
      "Lets users save products for later, making it easy to revisit items without needing to search again."
  },

  {
    title: "Checkout & Payment",
    image: checkout,
    description:
      "Summarizes the order and offers secure mobile payment options through a simple checkout flow designed to build user trust."
  },

  {
    title: "User Profile",
    image: profile,
    description:
      "Centralizes personal information, support, settings, and selling tools, allowing users to manage both buying and selling from one place."
  },

  {
    title: "Create Product Listing",
    image: sell,
    description:
      "Guides sellers through creating accurate product listings with details such as category, condition, price, images, and descriptions."
  },

  {
    title: "Seller Dashboard",
    image: dashboard,
    description:
      "Enables sellers to manage listings, verify completed sales, edit products, delete listings, and monitor marketplace activity from one dashboard."
  }
];


function UniMart() {
  return (
    <main className="case-study">

      {/* HERO */}

      <section className="case-hero">

        <div className="case-hero-content">

          <p className="case-tag">
            CASE STUDY
          </p>

          <h1>
            VENDAS
          </h1>

          <p className="case-subtitle">
            A university marketplace platform designed to help
            students and small business owners buy, sell, and
            complete secure transactions with confidence.
          </p>

        </div>

        <img
          src={coverImage}
          alt="UniMart"
          className="case-cover"
        />

      </section>

      {/* VIDEO */}

      {/* <section className="case-section">

        <h2>Video</h2>

        <video
          width="100%"
          controls
          muted
          autoPlay
          src={video}
        >
        </video>

      </section> */}

      {/* OVERVIEW */}

      <section className="case-section">

        <h2>Project Overview</h2>

        <p>
          Vendas is a marketplace platform created to connect
          university students and small business owners with
          potential buyers. The platform allows users to discover
          products, communicate with sellers, and complete
          transactions through a secure payment verification
          process.
        </p>

        <div className="project-info">

          <div>
            <h4>Role</h4>
            <p>Product Designer, Marketing Lead & Frontend Contributor</p>
          </div>

          <div>
            <h4>Timeline</h4>
            <p>Collaborative Academic Project</p>
          </div>

          <div>
            <h4>Tools</h4>
            <p>Figma, User Research, Prototyping</p>
          </div>

        </div>

      </section>

      {/* MY CONTRIBUTIONS */}

      <section className="case-section">

        <h2>My Contributions</h2>

        <ul className="research-findings">
          <li>Led the end-to-end UX/UI design process in Figma.</li>
          <li>Designed user flows, wireframes, and high-fidelity interfaces.</li>
          <li>Developed the product branding, including the transition from UniMart to Vendas.</li>
          <li>Created marketing materials and launch assets for the product.</li>
          <li>Collaborated with developers and contributed to frontend implementation.</li>
          <li>Iterated on the design based on team discussions and usability feedback.</li>
        </ul>

      </section>

      {/* PROBLEM */}

      <section className="case-section">

        <h2>Problem Space</h2>

        <p>
          Many students operate small businesses within
          universities but struggle to reach potential
          customers. Most promotions rely on word of mouth,
          WhatsApp status updates, or moving from hostel to
          hostel advertising products.
        </p>

        <p>
          Buyers also face trust issues when purchasing from
          unfamiliar sellers, especially when making payments
          before receiving products.
        </p>

      </section>

      {/* RESEARCH */}

      <section className="case-section">

        <h2>Research & Discovery</h2>

        <p>
          Research focused on understanding how students buy
          and sell products within university environments and
          the challenges they experience during transactions.
        </p>

        <ul className="research-findings">
          <li>Student businesses lacked visibility</li>
          <li>Buyers struggled to discover products easily</li>
          <li>Trust issues affected online transactions</li>
          <li>Most sales depended on personal networks</li>
          <li>Students wanted a centralized marketplace</li>
        </ul>

      </section>

      {/* DESIGN GOALS */}

      <section className="case-section">

        <h2>Design Goals</h2>

        <div className="goals-grid">

          <div className="goal-card">
            Increase Seller Visibility
          </div>

          <div className="goal-card">
            Improve Buyer Trust
          </div>

          <div className="goal-card">
            Simplify Product Discovery
          </div>

          <div className="goal-card">
            Secure Transactions
          </div>

          <div className="goal-card">
            Create a Smooth User Experience
          </div>

        </div>

      </section>

      {/* DESIGN PROCESS */}

      <section className="case-section">

        <h2>Design Process</h2>

         <p>
          I led the UX/UI design process from research to high-fidelity
          prototypes. The work included mapping user journeys, creating
          wireframes, designing the visual interface, and refining the
          experience through multiple iterations based on team feedback
          and usability considerations.
          </p>

          <p>
          Beyond designing the interface, I collaborated closely with the
          development team to ensure the designs were practical to
          implement and remained consistent throughout the product.
          </p>

      </section>    

      {/* EXPERIENCE WALKTHROUGH */}

        <section className="case-section">

            <h2>App Walkthrough</h2>

            <p className="walkthrough-intro">
              The following screens showcase the final Vendas experience,
              highlighting the platform's core functionality for both buyers
              and sellers.
            </p>

            <div className="walkthrough-slider">
                {walkthrough.map((screen,index)=>(
                <div className="walkthrough-card" key={index}>

                <img src={screen.image} />

                <div className="walkthrough-content">

                <h3>{screen.title}</h3>

                <p>{screen.description}</p>

                </div>

                </div>
                ))}
            </div>

       </section> 

      {/* CORE FEATURES */}

      {/* <section className="case-section">

        <h2>Core Features</h2>

        <div className="features-grid">

          <div className="feature-card">
            <h3>Marketplace Listings</h3>
            <p>Students can showcase products and services.</p>
          </div>

          <div className="feature-card">
            <h3>Product Search</h3>
            <p>Quickly discover products across categories.</p>
          </div>

          <div className="feature-card">
            <h3>Secure Payment Process</h3>
            <p>Payments remain protected until delivery.</p>
          </div>

          <div className="feature-card">
            <h3>Verification Codes</h3>
            <p>Unique transaction codes confirm delivery.</p>
          </div>

          <div className="feature-card">
            <h3>Seller Profiles</h3>
            <p>Build trust through visible seller information.</p>
          </div>

          <div className="feature-card">
            <h3>Order Management</h3>
            <p>Track and manage purchases easily.</p>
          </div>

        </div>

      </section> */}

      {/* PRODUCT EVOLUTION */}

      <section className="case-section">

      <h2>Product Evolution</h2>

      <p>
      As the project evolved, continuous feedback from team members,
      potential users, and usability reviews helped refine the
      experience. Rather than treating the first design as final,
      I iterated on the interface to improve navigation, branding,
      and overall usability.
      </p>

      <div className="features-grid">

      <div className="feature-card">

      <h3>Rebranding to Vendas</h3>

      <p>
      The product was renamed from UniMart to Vendas after evaluating
      its brand identity. The new name is shorter, easier to remember,
      and better represents a modern student marketplace.
      </p>

      </div>

      <div className="feature-card">

      <h3>New Welcome Experience</h3>

      <p>
      A welcome page was introduced to immediately showcase new
      arrivals, featured products, and promotional deals, helping
      users discover content faster after opening the app.
      </p>

      </div>

      <div className="feature-card">

      <h3>Simplified Selling Flow</h3>

      <p>
      The separate seller section was removed and integrated into the
      user profile. Users can now switch between buying and selling
      from one place, reducing navigation complexity and creating a
      more intuitive experience.
      </p>

      </div>

      </div>

      </section>

      {/* KEY DESIGN DECISIONS */}
      <section className="case-section">

          <h2>Key Design Decisions</h2>

          <div className="features-grid">

          <div className="feature-card">
          <h3>Trust First</h3>
          <p>
          The payment verification flow was designed to reduce buyer
          anxiety while protecting sellers.
          </p>
          </div>

          <div className="feature-card">
          <h3>Reduced Navigation</h3>
          <p>
          Combining buyer and seller functionality into the profile
          simplified navigation and reduced unnecessary screens.
          </p>
          </div>

          <div className="feature-card">
          <h3>Product Discovery</h3>
          <p>
          The welcome page highlights featured items and promotions,
          allowing users to discover products immediately after opening
          the app.
          </p>
          </div>

          </div>

      </section>

      {/* CHALLENGES */}

      <section className="case-section">

        <h2>Challenges</h2>

        <p>
          One of the main challenges was designing a payment
          process that increased trust between buyers and
          sellers while remaining simple and easy to use.
        </p>

        <p>
          The solution was introducing a verification-code
          system where payment is only released after the
          buyer receives the product and provides the code to
          the seller.
        </p>

      </section>

      {/* OUTCOME */}

      <section className="case-section">

        <h2>Outcome</h2>

        <p>
          The final design provided a structured marketplace
          experience that helps student entrepreneurs reach
          more customers while giving buyers confidence during
          transactions.
        </p>

      </section>

      {/* REFLECTION */}

      <section className="case-section">

        <h2>Reflection</h2>

        <p>
          Working on Vendas taught me that successful products evolve
          through continuous iteration rather than a single design
          process. Balancing user needs, business goals, and technical
          constraints helped me become a stronger product designer while
          also improving my collaboration with developers and other team
          members.
        </p>

      </section>

    </main>
  );
}

export default UniMart;