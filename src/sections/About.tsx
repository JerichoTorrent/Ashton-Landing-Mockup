const About = () => {
  return (
    <section id="about" className="bg-gray-900 py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who we are</h2>
          <p className="text-gray-300">
          Ashton & Co. Commercial Brokers is built on principle, precision, and performance. We specialize in connecting businesses and investors with high-value commercial properties across diverse markets. Our mission is simple--deliver results that elevate our clients' visions. With deep market insight, tailored strategies, and a relentless work ethic, we don't just close deals -- we build long-term relationships. Whether you're acquiring, leasing, or repositioning an asset, we move with purpose and handle every transaction with white-glove professionalism. 
          </p>
        </div>
        <img src="/assets/contract2.jpeg" alt="About Ashton" className="rounded-lg shadow-lg" />
      </div>
    </section>
  );
};

export default About;
