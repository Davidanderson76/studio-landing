"use client";

import { useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://facebook.com",
      icon: FaFacebook,
    },
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: FaInstagram,
    },
  ];

  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-xl font-bold uppercase tracking-wider">
          THE BAG
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#contact"
            className="text-gray-300 hover:text-white transition text-sm uppercase tracking-wide">
            Contact
          </a>
          {/* Social Media Icons */}
          <div className="flex items-center gap-5">
            {socialLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition text-lg"
                  aria-label={link.name}>
                  <IconComponent />
                </a>
              );
            })}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu">
          <span
            className={`h-0.5 w-6 bg-white transition-transform ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-opacity ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-transform ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-white/10 bg-black">
          <div className="px-6 py-4 flex flex-col gap-4">
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition text-sm uppercase tracking-wide py-2"
              onClick={() => setIsOpen(false)}>
              Contact
            </a>
            {/* Mobile Social Icons */}
            <div className="flex items-center gap-4 pt-2">
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition text-xl"
                    aria-label={link.name}>
                    <IconComponent />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
