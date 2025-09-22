import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Menu items
  const navItems = [
    { name: "About", link: "#home" },
    { name: "Projects", link: "#projects" },
    { name: "Skills", link: "#about" },
    { name: "contact", link: "#contact" },
  ];

  return (
    <nav className="brand-dark text-blue-400 fixed w-full top-0 left-0 z-50 shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">RAGAVdev </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="transition hover:bg-blue-400 hover:text-white px-3 py-2 rounded-md"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black px-6 py-4 space-y-4">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="block hover:text-blue-400"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
