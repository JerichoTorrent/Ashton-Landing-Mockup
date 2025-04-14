const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center items-center text-white px-6 text-center"
      style={{
        backgroundImage: "url('/assets/contract.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Capital for Business Growth
        </h1>
        <p className="text-gray-300 max-w-xl mx-auto mb-8 animate-fade-in delay-200">
          From real estate financing to startup funding, Ashton & Co. delivers fast, flexible solutions to power your next move.
        </p>
        <a
          href="#about"
          className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300"
        >
          See What You Qualify For
        </a>
      </div>
    </section>
  );
};

export default Hero;
