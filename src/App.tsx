import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import CTA from "./sections/CTA";
import Footer from "./sections/Footer";
import Resources from "./sections/Resources";
import Markets from './sections/Markets';
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";

const Home = () => (
  <>
    <Hero />
    <About />
    <Services />
    <CTA />
  </>
);

const App = () => {
  return (
    <div className="font-outfit bg-[#0d0d0d] text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/markets" element={<Markets />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;