// import Navbar from './components/Navbar/Navbar'
// import Hero from './components/Hero/Hero'
// import Projects from './components/Projects/Projects'
// import Contact from './components/Contact'

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <Projects />
//       <Contact />
//     </>
//   )
// }

// export default App



import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import EgerConnect from "./pages/Egerconnect/Egerconnect";
import UniMart from "./pages/Unimart/Unimart";
import ICProject from "./pages/IC-Project/IC-Project";
import AboutMe from "./pages/AboutME/AboutMe";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/egerconnect"
          element={<EgerConnect />}
        />

        <Route
          path="/unimart"
          element={<UniMart />}
        />

        <Route
          path="/ic-project"
          element={<ICProject />}
        />

        <Route
          path="/about-me"
          element={<AboutMe />}
        />

      

      </Routes>

    </BrowserRouter>
  );
}

export default App;