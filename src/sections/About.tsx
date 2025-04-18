import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      className="bg-[#0d0d0d] py-24 px-6 text-white"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#e50914]">
            Who We Are
          </h2>
          <p className="text-gray-300 leading-relaxed">
            <strong className="text-white">Ashton & Co. Commercial Brokers</strong> is built on
            principle, precision, and performance. We specialize in connecting businesses and
            investors with high-value commercial properties across diverse markets.
            <br /><br />
            Our mission is simple—deliver results that elevate our clients' visions. With deep market
            insight, tailored strategies, and a relentless work ethic, we don't just close deals —
            we build long-term relationships.
            <br /><br />
            Whether you're acquiring, leasing, or repositioning an asset, we move with purpose and
            handle every transaction with white-glove professionalism.
          </p>
        </div>

        {/* Image */}
        <motion.img
          src="/assets/contract2.jpeg"
          alt="About Ashton"
          className="rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        />
      </div>
    </motion.section>
  );
};

export default About;
