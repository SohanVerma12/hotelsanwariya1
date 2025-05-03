"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Flower, Utensils, Hotel, PartyPopper } from "lucide-react";

const serviceItems = [
  {
    id: "marriage-garden",
    title: "Marriage Garden",
    description: "Spacious garden for weddings & receptions, decorated beautifully.",
    icon: <Flower className="h-12 w-12 text-blue-700" />,
    bgImage: "https://c8.alamy.com/comp/F3GDYD/wedding-decoration-marriage-entrance-gate-india-asia-F3GDYD.jpg",
  },
  {
    id: "party-hall",
    title: "Party Hall",
    description: "Indoor space perfect for birthdays, engagements, anniversaries.",
    icon: <PartyPopper className="h-12 w-12 text-blue-700" />,
    bgImage: "https://previews.123rf.com/images/psisa/psisa1707/psisa170700322/82575745-hotel-interior-elegant-banquet-hall-luxury-room-for-the-wedding-party-blur-image-for-background.jpg",
  },
  {
    id: "restaurant",
    title: "Restaurant",
    description: "Enjoy a variety of dishes made fresh with local and international flavors.",
    icon: <Utensils className="h-12 w-12 text-blue-700" />,
    bgImage: "https://media.istockphoto.com/id/153775715/photo/indian-food-selection.jpg?s=612x612&w=0&k=20&c=yuhy0bDK_f9Aw8S0TU26rG6negOg1ParcqIZM5BSWJw=",
  },
  {
    id: "hotel-rooms",
    title: "Hotel Rooms",
    description: "Comfortable AC and Non-AC rooms for families, couples, and solo travelers.",
    icon: <Hotel className="h-12 w-12 text-blue-700" />,
    bgImage: "https://media.istockphoto.com/id/1334117334/photo/digital-render-of-large-hotel-suite-bedroom.jpg?s=612x612&w=0&k=20&c=kzkNh4AGdRiLnbsJLHDczl1OROhXvhQD3f4N3j6Ptsw=",
  },
];

export default function Services() {
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

    const element = document.getElementById("services");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="services" className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We offer a range of high-quality services to make your stay or event special and memorable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceItems.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden h-full">
                <div className="relative h-48">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${service.bgImage})`,
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    {service.icon}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
