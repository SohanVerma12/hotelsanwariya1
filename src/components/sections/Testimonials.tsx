"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: "t1",
    name: "Ravi Sharma",
    location: "Sehore, MP",
    rating: 5,
    text: "Beautiful garden and very supportive staff. Perfect place for our daughter's wedding! The decorations exceeded our expectations and the food was exceptional.",
  },
  {
    id: "t2",
    name: "Priya Patel",
    location: "Bhopal, MP",
    rating: 5,
    text: "We had our anniversary celebration at the party hall. The ambiance was wonderful, and the service was top-notch. Will definitely recommend to friends and family.",
  },
  {
    id: "t3",
    name: "Ajay Verma",
    location: "Indore, MP",
    rating: 4,
    text: "Comfortable rooms and excellent food. The hotel is very well-maintained and the staff is friendly. Great value for money in Sehore.",
  },
];

export default function Testimonials() {
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

    const element = document.getElementById("testimonials-section");
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
    <section id="testimonials-section" className="py-16 px-4 md:px-8 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Guests Say</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our valued guests have to say about their experience at My Hotel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={`star-${testimonial.id}-${i}`}
                        className={`h-5 w-5 ${
                          i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                </CardContent>
                <CardFooter className="border-t pt-4 flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
