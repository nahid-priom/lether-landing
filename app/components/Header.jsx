"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Products", id: "products" },
  { label: "Performance", id: "performance" },
  { label: "Benefits", id: "benefits" },
  { label: "How It Works", id: "how-it-works" },
  { label: "Testimonials", id: "testimonials" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 70; // Increased trigger point to 70px
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'pt-3 pb-3 bg-white shadow-lg backdrop-blur-md bg-opacity-95' : 'pt-6 pb-4 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
           <div className={`text-2xl font-bold bg-clip-text text-transparent  ${scrolled ? 'bg-gradient-to-r from-amber-600 to-amber-800' : 'bg-gradient-to-r from-white to-gray-300'} `}>
            Leather CPR
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className={`relative px-3 py-2 font-medium transition-all duration-300 ${scrolled ? 'text-gray-800 hover:text-amber-600' : 'text-white hover:text-amber-300'}`}
              >
                {label}
                <span className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-amber-600 transition-all duration-300 ${scrolled ? 'group-hover:w-4/5' : 'group-hover:w-3/4'}`}></span>
              </button>
            ))}
            
            {/* CTA Button - Desktop */}
            <button 
              className={`ml-4 px-5 py-2.5 rounded-full font-medium transition-all duration-300 shadow-md ${scrolled ? 'bg-amber-600 text-white hover:bg-amber-700 shadow-amber-600/30' : 'bg-white text-amber-800 hover:bg-amber-100 shadow-white/20'}`}
              onClick={() => handleNavClick('products')}
            >
              Shop Now
            </button>
          </nav>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`p-2.5 rounded-full transition-all ${scrolled ? 'text-gray-800 bg-white/90 hover:bg-gray-100' : 'text-white bg-black/20 hover:bg-black/30'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className={`md:hidden transition-all duration-500 ${scrolled ? 'bg-white/95' : 'bg-white/95 backdrop-blur-md'}`}>
          <div className="max-w-7xl mx-auto px-4">
            <nav className="flex flex-col space-y-3 py-5">
              {navItems.map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => handleNavClick(id)}
                  className="px-5 py-3.5 text-left text-gray-800 hover:text-amber-600 font-medium transition-all rounded-lg hover:bg-amber-50"
                >
                  {label}
                </button>
              ))}
              <button 
                className="px-5 py-3.5 text-center bg-amber-600 text-white font-medium transition-all rounded-lg hover:bg-amber-700 mt-3 shadow-md"
                onClick={() => handleNavClick('products')}
              >
                Shop Now
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}