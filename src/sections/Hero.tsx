import { motion } from "framer-motion";

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
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Capital for Business Growth
        </h1>
        <p className="text-gray-300 text-xl max-w-xl mx-auto mb-8">
          From real estate financing to startup funding, Ashton & Co. delivers fast, flexible solutions to power your next move.
        </p>
        <a
          href="#about"
          className="bg-[#e50914] text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-all duration-300"
        >
          See What You Qualify For
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
