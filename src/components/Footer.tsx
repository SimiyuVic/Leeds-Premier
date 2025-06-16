'use client';
import Link from "next/link";
import { Facebook, Instagram, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Column 1: Description */}
        <div>
          <h2 className="text-xl font-semibold text-teal-600 mb-4">Leeds Premier</h2>
          <p className="text-gray-600">
            Inspiring minds and shaping futures through quality education. Join our
            community of learners for a transformative journey from early years
            to professional training.
          </p>
        </div>

        {/* Column 2: Contact Us */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Contact Us</h3>
          <p className="text-gray-600 mb-4">Nairobi, Kenya</p>
          <div className="space-y-2">
            <Link
              href="mailto:info@leedspremier.ac.ke"
              className="text-gray-600 hover:text-teal-600 transition flex items-center space-x-2"
            >
              <Mail className="w-4 h-4" /> <span>info@leedspremier.ac.ke</span>
            </Link>
            <Link
              href="tel:+254712345678"
              className="text-gray-600 hover:text-teal-600 transition flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" /> <span>+254 712 345 678</span>
            </Link>
          </div>
          <div className="flex space-x-4 mt-4">
            <Link href="#" className="text-gray-500 hover:text-teal-600 transition">
              <Facebook className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-gray-500 hover:text-teal-600 transition">
              {/* Latest Twitter (X) icon as SVG */}
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.69 3.65H18.4l-4.73 6.06-5.31-6.06H2.84l6.87 7.83L2 20.35h2.29l5.03-6.45 5.66 6.45h4.68l-7.42-8.44 8.45-8.26z" />
              </svg>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-teal-600 transition">
              <Instagram className="w-6 h-6" />
            </Link>
          </div>
        </div>

        {/* Column 3: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Quick Links</h3>
          <ul className="space-y-2">
            {[
              { name: "Home", href: "/" },
              { name: "Admissions", href: "/admissions" },
              { name: "About Us", href: "/about" },
              { name: "Contact", href: "/contact" },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-gray-600 hover:text-teal-600 transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-200 text-center py-4 text-sm text-gray-500 mt-8 border-t border-gray-300 flex flex-col sm:flex-row justify-center items-center gap-2">
        <span>© {new Date().getFullYear()} Leeds Premier Schools. All rights reserved.</span>
        <span className="hidden sm:inline">|</span>
        <span className="flex items-center gap-1">
          Developed by{" "}
          <button
            onClick={() =>
              window.open("https://wa.me/254798161654", "_blank")
            }
            className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-semibold hover:bg-teal-700 transition-all duration-200 cursor-pointer shadow-sm"
          >
            Victor Simiyu
          </button>
        </span>
      </div>
    </footer>
  );
}
