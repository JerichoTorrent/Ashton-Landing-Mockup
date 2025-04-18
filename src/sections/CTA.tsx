import { motion } from "framer-motion";

const CTA = () => {
  return (
    <motion.section
      className="bg-[#0d0d0d] py-24 px-6 text-center text-white"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#e50914]">
          Grow Your Business.
        </h2>
        <p className="text-gray-300 mb-10 text-lg">
          Today is the day to build the business of your dreams. Share your vision with the world.
        </p>
        <a
          href="#contact"
          className="inline-block bg-[#e50914] hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold text-sm tracking-wide transition-all duration-300"
        >
          Start Now
        </a>
      </div>
    </motion.section>
  );
};

export default CTA;
