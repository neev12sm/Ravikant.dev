// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Project from "./components/Project";
// import Experience from "./components/Experience";
// import Footer from "./components/Footer";
// import Certifications from "./components/Certifications";

// function App() {
//   return (
//     <div className="bg-[#050816] min-h-screen">
//       <Navbar />
//       <Hero />
//       <About />
//       <Experience />
//       <Certifications />
//       <Project />
//       <Footer />
//     </div>
//   );
// }

// export default App;


import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Certifications from "./components/Certifications";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className="bg-[#050816] min-h-screen">
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Hero />
      <About />
      <Experience />
      <Certifications />
      <Project />
      <Footer />
    </div>
  );
}

export default App;