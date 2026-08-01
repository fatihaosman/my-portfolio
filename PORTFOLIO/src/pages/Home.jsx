// Home.jsx

import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
    </>
  );
}

export default Home;