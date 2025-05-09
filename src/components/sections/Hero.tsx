"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import image from "../../assets/secondimage.jpeg";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen">
      {/* Hero Background */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={image}
          alt="Hotel exterior view"
          fill
          priority
          style={{
            objectFit: "cover",
            filter: "brightness(0.6)",
          }}
        />
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Welcome to Hotel Sanwariya
            <span className="block mt-2 text-yellow-400">Your Comfort, Our Priority</span>
          </h1>
          <p className="mb-8 text-xl sm:text-2xl text-gray-200">
            Luxury Stay, Beautiful Celebrations, Delicious Food — all at Affordable Prices.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-blue-700 hover:bg-blue-800 px-8 text-white"
              onClick={() => {
                window.open(
                  "https://wa.me/919993794283?text=I'm%20interested%20in%20booking%20at%20Hotel%20Sanwariya%20Sehore",
                  "_blank"
                );
              }}
            >
              Book Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-blue-700 hover:bg-blue-800 px-8 text-white"
              onClick={scrollToServices}
            >
              View Our Services
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
