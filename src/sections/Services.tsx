import { useState } from "react";
import { motion } from "framer-motion";

const serviceDetails: Record<string, { description: string; image: string }> = {
  "Real Estate Financing": {
    description:
      "Unlock the funding you need to purchase, refinance, or develop residential and commercial properties. Whether you’re investing, building, or expanding, we offer flexible solutions to help you close faster and grow smarter.",
    image: "/assets/building.webp",
  },
  "Business Loans": {
    description:
      "Fuel your business with fast, reliable capital. Our business loans are designed to support growth, cover expenses, and keep your operations running strong — with competitive rates and simple terms.",
    image: "/assets/business.webp",
  },
  "Startup Funding": {
    description:
      "Turn your vision into reality. We provide the funding startups need to launch, scale, and succeed — from seed capital to early-stage investment, with flexible options built for entrepreneurs.",
    image: "/assets/rocket.webp",
  },
  "Merchant Advances": {
    description:
      "Get the cash you need — fast. With a merchant cash advance, you can access funds today and repay through a small percentage of future credit card sales. No fixed monthly payments, no stress.",
    image: "/assets/merchant.webp",
  },
  "Equipment Financing and Leasing": {
    description:
      "Upgrade your business without draining your cash flow. Finance or lease the equipment you need to stay competitive — with affordable terms and ownership options that work for you.",
    image: "/assets/equipment.webp",
  },
};

const services = Object.keys(serviceDetails).map((title) => ({
  title,
  description: serviceDetails[title].description,
  image: serviceDetails[title].image,
}));

const Services = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(prev => (prev === index ? null : index));
  };

  return (
    <motion.section
      id="services"
      className="bg-[#0d0d0d] py-24 px-6 text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto text-center">
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
        <div className="flex flex-wrap justify-center gap-6 mb-20">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className={`bg-[#1a1a1a] w-full sm:w-[300px] md:w-[340px] p-6 rounded-lg shadow-md cursor-pointer transition-all duration-300 text-center ${
                expandedIndex === idx ? "md:w-full" : "hover:scale-105"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              onClick={() => toggleExpand(idx)}
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-20 w-auto mx-auto mb-4"
              />
              <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
              {expandedIndex === idx && (
                <p className="text-gray-300 mt-4 text-sm md:text-base max-w-3xl mx-auto">
                  {service.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Overview */}
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
