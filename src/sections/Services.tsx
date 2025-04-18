import { motion } from "framer-motion";

const Services = () => {
  const services = [
    { icon: "🏢", title: "Real Estate Financing" },
    { icon: "💼", title: "Business Loans" },
    { icon: "🚀", title: "Startup Funding" },
    { icon: "💳", title: "Merchant Advances" }
  ];

  return (
    <motion.section
      id="services"
      className="bg-[#0d0d0d] py-24 px-6 text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-[#e50914]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          What We Do
        </motion.h2>

        {/* Service Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-[#1a1a1a] p-6 rounded-lg hover:scale-105 transform transition-transform duration-300 shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="font-semibold text-lg">{service.title}</h3>
            </motion.div>
          ))}
        </div>

        {/* Additional Info Box */}
        <motion.div
          className="bg-[#121212] rounded-lg shadow-xl p-10 grid md:grid-cols-2 gap-10 items-center text-left"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
              At <span className="text-white font-semibold">Ashton & Co. Commercial Brokers</span>, we provide
              direct access to capital for real estate, business expansion, and equipment acquisition.
              <br /><br />
              Our offerings include <strong>commercial real estate financing</strong>,
              <strong> business loans</strong>, <strong>equipment financing</strong>,
              <strong> startup funding</strong>, <strong>merchant cash advances</strong>, and
              <strong> franchise financing</strong>—tailored solutions to meet the capital needs of growing businesses.
            </p>
          </div>
          <div>
            <img
              src="/assets/real-estate.webp"
              alt="Real estate financing"
              className="rounded-lg shadow-md w-full"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;
