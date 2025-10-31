import React, { useState, type FC, type ReactNode } from "react";
import { Menu, X } from "lucide-react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  isMobile?: boolean;
}

const NavLink: FC<NavLinkProps> = ({ href, children, isMobile = false }) => (
  <a
    href={href}
    className={`font-medium transition-all duration-200 ${
      isMobile
        ? "text-base text-gray-700 hover:text-yellow-500 hover:bg-gray-50 px-3 py-1 block rounded-lg"
        : "text-xs text-gray-700 hover:text-yellow-500 px-4 py-2 rounded-lg hover:bg-gray-50"
    }`}
  >
    {children}
  </a>
);

const Navbar = () => {
  interface NavItem {
    name: string;
    href: string;
  }
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const navItems: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "Fleet", href: "/fleet" },
    { name: "About us", href: "about" },
    { name: "contact", href: "contact" },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
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

          {/* Center Navigation Links (Desktop) */}
          <div className="hidden lg:flex items-center justify-center flex-1 space-x-2">
            {navItems.map((item) => (
              <NavLink key={item.name} href={item.href}>
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Right Side - Search Field & Menu Toggle */}
          <div className="flex items-center gap-3 min-w-fit">
            {/* Search Field - Visible on tablet and desktop */}
            <div className="hidden md:flex items-center bg-gray-50 rounded-lg border border-gray-200 overflow-hidden hover:border-gray-300 transition-all">
              <input
                type="text"
                placeholder="Search experiences"
                className="px-4 py-2.5 text-sm text-gray-700 bg-transparent focus:outline-none w-48 xl:w-56 placeholder:text-gray-400"
              />
              <button className="bg-yellow-400 text-gray-900 font-semibold px-6 py-2.5 text-sm hover:bg-yellow-500 transition-all duration-200 flex items-center gap-2 whitespace-nowrap">
                {/* <Search className="w-4 h-4" /> */}
                Search
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              className="lg:hidden p-2.5 text-gray-700 hover:text-yellow-500 hover:bg-gray-50 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Collapsible */}
      <div
        id="mobile-menu"
        className={`lg:hidden transition-all duration-300 ease-in-out bg-white ${
          isMenuOpen
            ? "max-h-screen opacity-100 border-t border-gray-200"
            : "max-h-0 opacity-0 border-t border-transparent"
        } overflow-hidden`}
      >
        <div className="px-4 sm:px-6 py-1 space-y-1">
          {/* Mobile Links */}
          {navItems.map((item) => (
            <NavLink key={item.name} href={item.href} isMobile={true}>
              {item.name}
            </NavLink>
          ))}

          {/* Mobile Search Field */}
          <div className="md:hidden pt-4 mt-2 border-t border-gray-200">
            <div className="flex items-center bg-gray-50 rounded-lg border border-gray-200 overflow-hidden">
              <input
                type="text"
                placeholder="Search experiences"
                className="px-4 py-3 text-sm text-gray-700 bg-transparent focus:outline-none flex-1 placeholder:text-gray-400"
              />
              <button className="bg-yellow-400 text-gray-900 font-semibold px-5 py-3 text-sm hover:bg-yellow-500 transition-all duration-200 flex items-center gap-2 whitespace-nowrap">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
