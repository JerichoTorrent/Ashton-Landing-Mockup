import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Markets & Services", path: "/markets" },
  { name: "Apply Now", path: "/apply" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Resources", path: "/resources" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#0d0d0d] text-white px-6 border-b border-[#1f1f1f] z-50">
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img
            src="/assets/ashton-logo.webp"
            alt="Ashton Logo"
            className="h-21 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10 justify-center w-full text-[16px]">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="font-medium hover:text-[#e50914] transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-4 bg-[#e50914] hover:bg-red-700 text-white text-sm font-semibold px-4 py-2 rounded-full transition-all"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-white z-50"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <svg
            className="h-6 w-6 mx-auto"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-full left-0 right-0 bg-[#121212] border-t border-[#1f1f1f] z-40"
          >
            <div className="flex flex-col items-center gap-6 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm font-medium hover:text-[#e50914] transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-[#e50914] hover:bg-red-700 text-white text-sm font-semibold px-4 py-2 rounded-full transition-all"
                onClick={() => setMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;