"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function AboutUs() {
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

    const element = document.getElementById("about-us-section");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const features = [
    {
      id: "feature-1",
      title: "Affordable Luxury Rooms",
      description:
        "Experience comfort without breaking yyour budget. Our rooms offer premium amenities at affordable rates.",
      icon: <CheckCircle className="h-6 w-6 text-blue-700" />,
    },
    {
      id: "feature-2",
      title: "Large Capacity Marriage Garden & Party Hall",
      description:
        "Perfect venues for weddings, receptions, and all kinds of celebrations with elegant decorations.",
      icon: <CheckCircle className="h-6 w-6 text-blue-700" />,
    },
    {
      id: "feature-3",
      title: "Multicuisine Restaurant",
      description:
        "Savor a variety of authentic flavors from traditional Indian cuisine to continental favorites.",
      icon: <CheckCircle className="h-6 w-6 text-blue-700" />,
    },
  ];

  return (
    <section id="about-us-section" className="py-16 px-4 md:px-8 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About My Hotel</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Located in the heart of Sehore, MP, Hotel Sanwariya offers the perfect
            combination of elegance, comfort, and affordability. Whether you're
            planning a wedding, a party, or a comfortable stay, we are dedicated
            to making your experience memorable. 
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
