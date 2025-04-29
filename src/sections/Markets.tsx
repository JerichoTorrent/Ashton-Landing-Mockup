import { motion } from "framer-motion";
import CTA from "./CTA";

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

const Markets = () => {
  return (
    <section className="bg-[#0d0d0d] pt-48 pb-24 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-center mb-16 text-[#e50914]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Markets & Services
        </motion.h1>

        <div className="space-y-20">
          {Object.entries(serviceDetails).map(([title, { description, image }], idx) => (
            <motion.div
              key={title}
              className={`grid md:grid-cols-2 items-center gap-10 ${
                idx % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">{title}</h2>
                <p className="text-gray-300 text-lg leading-relaxed">{description}</p>
              </div>
              <img
                src={image}
                alt={title}
                className="rounded-lg shadow-md w-full h-60 object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
      <CTA />
    </section>
  );
};

export default Markets;
