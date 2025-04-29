import { motion } from "framer-motion";
import CTA from "./CTA";

const testimonials = [
  {
    name: "Sivexia",
    quote:
      "Working with Ashton & Co. has transformed our capital strategy. Their expertise helped us secure funding and scale operations faster than expected.",
    rating: 5,
  },
  {
    name: "Emily Carter",
    quote:
      "The professionalism and attention to detail provided by this team has been exceptional. Our growth trajectory has never been stronger.",
    rating: 5,
  },
  {
    name: "Michael Lee",
    quote:
      "Their commitment to quality and communication helped us secure funding and expand into new markets. Truly a partner in growth.",
    rating: 5,
  },
];

const StarRating = ({ count = 5 }: { count?: number }) => (
  <div className="flex justify-center mt-4 gap-1 text-[#ffcf30]">
    {Array.from({ length: count }).map((_, i) => (
      <span key={i}>★</span>
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <section className="bg-[#0d0d0d] pt-48 pb-24 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-center mb-6 text-[#e50914]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Client Testimonials
        </motion.h1>
        <p className="text-center text-gray-300 text-lg mb-16">
          Hear how Ashton & Co. has helped clients unlock growth, scale smarter, and thrive.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {testimonials.map(({ name, quote, rating }, idx) => (
            <motion.div
              key={idx}
              className="bg-[#1a1a1a] p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 text-[#e50914]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 mx-auto"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.17 6A4.17 4.17 0 0 0 3 10.17v4.16A4.17 4.17 0 0 0 7.17 18.5h.58a.75.75 0 0 0 .75-.75v-5.5A.75.75 0 0 0 7.75 11H6.5v-.83c0-1.24.99-2.25 2.25-2.25h.42a.75.75 0 0 0 0-1.5H7.17ZM16.25 6a4.25 4.25 0 0 0-4.25 4.25v4.25a4.25 4.25 0 0 0 4.25 4.25h.5a.75.75 0 0 0 .75-.75v-5.5a.75.75 0 0 0-.75-.75h-1.25v-.83c0-1.24 1-2.25 2.25-2.25h.5a.75.75 0 0 0 0-1.5h-.5Z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg text-white mb-2">{name}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{quote}</p>
              <StarRating count={rating} />
            </motion.div>
          ))}
        </div>
      </div>

      <CTA />
    </section>
  );
};

export default Testimonials;
