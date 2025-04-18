const Footer = () => {
  return (
    <footer className="bg-[#0d0d0d] text-gray-400 py-12 px-6 text-center text-sm">
      <p className="mb-4">&copy; {new Date().getFullYear()} Ashton & Co. All rights reserved.</p>
      <a
        href="https://brevexmedia.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 text-gray-500 hover:text-[#e50914] transition-colors duration-300"
      >
        <img src="/assets/brevex-logo.png" alt="Brevex Media" className="h-6 w-auto" />
        <span>Designed by Brevex Media</span>
      </a>
    </footer>
  );
};

export default Footer;
