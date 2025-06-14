import Link from "next/link";
import { Facebook, Twitter, Instagram, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Column: About, Contact, and Social */}
        <div>
          <h2 className="text-xl font-semibold text-teal-600 mb-4">Leeds Premier</h2>
          <p className="text-gray-600 mb-4">
            Inspiring minds and shaping futures through quality education. Join our
            community of learners.
          </p>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Contact Us</h3>
          <p className="text-gray-600 mb-4">
            P.O. Box 12345<br />
            Nairobi, Kenya<br />
            <Link href="mailto:info@leedspremier.ac.ke" className="text-gray-600 hover:text-teal-600 transition flex items-center space-x-2">
              <Mail className="w-4 h-4" /> <span>info@leedspremier.ac.ke</span>
            </Link><br />
            <Link href="tel:+254712345678" className="text-gray-600 hover:text-teal-600 transition flex items-center space-x-2">
              <Phone className="w-4 h-4" /> <span>+254 712 345 678</span>
            </Link>
          </p>
          <div className="flex space-x-4 mt-4">
            <Link href="#" className="text-gray-500 hover:text-teal-600 transition">
              <Facebook className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-gray-500 hover:text-teal-600 transition">
              <Twitter className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-gray-500 hover:text-teal-600 transition">
              <Instagram className="w-6 h-6" />
            </Link>
          </div>
        </div>

        {/* Middle Column: Quick Links */}
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

        {/* Right Column: Newsletter Subscription */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">
            Subscribe to Our Newsletter
          </h3>
          <p className="text-gray-600 mb-4">
            Stay updated with the latest news, events, and announcements from Leeds
            Premier.
          </p>
          <div className="mt-2">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button
              className="bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 transition mt-2 w-full"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="bg-gray-200 text-center py-4 text-sm text-gray-500 mt-8 border-t border-gray-300">
        © {new Date().getFullYear()} Leeds Premier Schools. All rights reserved.
      </div>
    </footer>
  );
}