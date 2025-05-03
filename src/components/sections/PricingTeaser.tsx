"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function PricingTeaser() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("pricing-section");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const handleGetQuote = () => {
    window.open(
      "https://wa.me/919999999999?text=Hi,%20I'm%20interested%20in%20getting%20a%20quote%20for%20My%20Hotel%20Sehore.",
      "_blank"
    );
  };

  return (
    <section
      id="pricing-section"
      className="py-16 px-4 md:px-8 bg-gradient-to-br from-blue-800 to-blue-900 text-white"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Affordable Luxury</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center w-full md:w-auto">
              <h3 className="text-xl font-semibold mb-2">Hotel Rooms</h3>
              <p className="text-2xl md:text-3xl font-bold text-yellow-400 mb-1">
                Starting at ₹1,499
              </p>
              <p className="text-sm text-gray-300">per night</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center w-full md:w-auto">
              <h3 className="text-xl font-semibold mb-2">Wedding Venue</h3>
              <p className="text-2xl md:text-3xl font-bold text-yellow-400 mb-1">
                Starting at ₹25,000
              </p>
              <p className="text-sm text-gray-300">per event</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center w-full md:w-auto">
              <h3 className="text-xl font-semibold mb-2">Party Hall</h3>
              <p className="text-2xl md:text-3xl font-bold text-yellow-400 mb-1">
                Starting at ₹15,000
              </p>
              <p className="text-sm text-gray-300">per event</p>
            </div>
          </div>
          <p className="mb-8 text-lg">
            Custom packages available for weddings, corporate events, and special occasions.
            <br /> Contact us for personalized quotes and seasonal discounts.
          </p>
          <Button
            onClick={handleGetQuote}
            size="lg"
            className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-medium px-8 py-6"
          >
            Get Quote
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
