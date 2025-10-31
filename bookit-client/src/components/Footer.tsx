const Footer = () => {
  return (
    <footer className="bg-yellow-400 text-black py-3">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Brand Name */}
          <div className="flex items-center shrink-0 min-w-fit">
            <a href="#" className="flex items-center">
              <img
                src={`./logos/highway_delite_logo-removebg-preview.png`}
                alt="Highway Delite Logo"
                className="h-12 w-auto"
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.style.display = "none";
                }}
              />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-center text-gray-800">
            © 2025 BookIt. All rights reserved.
          </p>

          {/* Links */}
          <div className="flex gap-6">
            <a
              href="#"
              className="hover:text-white transition-colors font-semibold"
            >
              About
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors font-semibold"
            >
              Contact
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors font-semibold"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
