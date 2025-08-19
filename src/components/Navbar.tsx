"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [schoolsOpen, setSchoolsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { 
      name: "Schools", 
      href: "#",
      subItems: [
        { name: "CBC Campus", href: "/schools/cbc-campus" },
        { name: "Cambridge Campus", href: "/schools/cambridge-campus" },
        { name: "Teachers Training College", href: "/schools/teachers-training-college" },
      ]
    },
    { name: "Admissions", href: "/admissions" },
    { name: "School Gallery", href: "/school-gallery" },
    { name: "About Us", href: "/about-us" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="bg-gray-50 border-b border-gray-100 shadow-sm fixed top-0 left-0 right-0 z-50 h-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between relative">
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>

        {/* Logo / Brand */}
        <Link 
          href="/" 
          className="absolute left-1/3 transform -translate-x-1/4 md:relative md:left-0 md:transform-none text-xl font-semibold text-teal-600"
          aria-label="Leeds Premier Schools - Home"
        >
          <span>Leeds Premier Schools</span>
        </Link>

        {/* Spacer for mobile */}
        <div className="md:hidden w-7"></div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8" aria-label="Primary navigation">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li 
                key={item.name} 
                className="relative group"
                onMouseEnter={() => item.subItems && setSchoolsOpen(true)}
                onMouseLeave={() => item.subItems && setSchoolsOpen(false)}
              >
                {item.subItems ? (
                  <>
                    <button
                      className="flex items-center text-lg text-gray-700 hover:text-teal-600 font-medium transition-colors duration-300"
                      aria-haspopup="true"
                      aria-expanded={schoolsOpen}
                      aria-controls="schools-menu"
                    >
                      {item.name}
                      <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${schoolsOpen ? "rotate-180" : ""}`} />
                    </button>
                    <ul
                      id="schools-menu"
                      className={`absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-2 z-50 transition-all duration-300 ${schoolsOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
                    >
                      {item.subItems.map((subItem) => (
                        <li key={subItem.name}>
                          <Link
                            href={subItem.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600"
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="text-lg text-gray-700 hover:text-teal-600 font-medium transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-50 border-t border-gray-100">
          <nav className="flex flex-col space-y-3 py-4 px-6" aria-label="Mobile navigation">
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.name}>
                  {item.subItems ? (
                    <>
                      <button
                        className="flex items-center w-full text-lg text-gray-700 hover:text-teal-600 font-medium transition-colors duration-300"
                        onClick={() => setSchoolsOpen(!schoolsOpen)}
                        aria-haspopup="true"
                        aria-expanded={schoolsOpen}
                        aria-controls="mobile-schools-menu"
                      >
                        {item.name}
                        <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${schoolsOpen ? "rotate-180" : ""}`} />
                      </button>
                      {schoolsOpen && (
                        <ul id="mobile-schools-menu" className="ml-4 mt-2 space-y-2">
                          {item.subItems.map((subItem) => (
                            <li key={subItem.name}>
                              <Link
                                href={subItem.href}
                                className="block text-gray-700 hover:text-teal-600"
                                onClick={() => setIsOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block text-lg text-gray-700 hover:text-teal-600 font-medium transition-colors duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
