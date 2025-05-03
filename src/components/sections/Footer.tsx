"use client";

import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-12 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Hotel Sanwariya</h3>
            <p className="text-gray-400 mb-4">
              Experience luxury, comfort, and exceptional service at affordable prices in the heart of Sehore, Madhya Pradesh.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="hover:text-blue-400 transition-colors"
                aria-label="Facebook"
              >
                {/* <Facebook size={20} /> */}
              </Link>
              <Link
                href="https://www.instagram.com/hotel.sanwariya"
                target="_blank"
                className="hover:text-pink-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="hover:text-blue-400 transition-colors"
                aria-label="Twitter"
              >
                {/* <Twitter size={20} /> */}
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                <span>Ichhwar road, Konajhir, Sehore, Madhya Pradesh 466001</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-blue-400" />
                <span>+91 9993794283</span>
              </li>
              {/* <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-blue-400" />
                <span>info@myhotel.com</span>
              </li> */}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about-us-section" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#gallery-section" className="text-gray-400 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#pricing-section" className="text-gray-400 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#contact-section" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400">
          <p>&copy; {currentYear} Hotel Sanwariya Sehore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
