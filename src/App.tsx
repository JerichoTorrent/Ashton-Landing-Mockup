import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import CTA from './sections/CTA';
import Footer from './sections/Footer';

const App = () => {
  return (
    <div className="font-sans">
      <Hero />
      <About />
      <Services />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
