import { useState, useEffect, useRef } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Components
import Navbar from "./Layouts/Navbar";
import Main_Page from "./components/Main_Page";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import BlogDetail from "./components/BlogDetail";
import About from "./components/About";
import Contact from "./components/Contact";
import { content } from "./Content";

const AppContent = ({ showPopup, setShowPopup }) => {
  const location = useLocation();
  const blogRef = useRef(null);

  useEffect(() => {
    Aos.init({ duration: 1800, offset: 100, disable: "mobile" });

    if (location.state?.scrollToBlog && blogRef.current) {
      // scroll instantly to blog section when coming back from BlogDetail
      blogRef.current.scrollIntoView({ behavior: "auto" });
    }
  }, [location]);

  return (
    <>
      <Main_Page content={content.Main_Page} onOpenPopup={() => setShowPopup(true)} />
      <Skills />
      <Projects />
      <div ref={blogRef}>
        <Blog />
      </div>
      <About content={content.About} showPopup={showPopup} setShowPopup={setShowPopup} />
      <Contact content={content.Contact} />
    </>
  );
};

const App = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Homepage with all sections */}
        <Route path="/" element={<AppContent showPopup={showPopup} setShowPopup={setShowPopup} />} />

        {/* Blog detail page */}
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>

      <footer className="p-3 text-center bg-[#F5F1EB] border-t border-[#E0D8CC]">
        <h6 className="mb-3 text-[#333333]">DHARSHINI RAMESH BABU</h6>
      </footer>
    </Router>
  );
};

export default App;
