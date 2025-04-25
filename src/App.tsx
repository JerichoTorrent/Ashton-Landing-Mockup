import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import CTA from './sections/CTA';
import Footer from './sections/Footer';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="font-outfit bg-[#0d0d0d] text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
