"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function ContactUs() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real application, you would send this data to your backend
    console.log(values);
    setIsSubmitted(true);

    // Simulate sending to WhatsApp
    const message = `Hello, my name is ${values.name}. ${values.message} (Phone: ${values.phone})`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919999999999?text=${encodedMessage}`, "_blank");
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("contact-section");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new URLSearchParams();
    formData.append("name", "Sohan");
    formData.append("whatsapp", "9340785987");
    formData.append("feedback", "like");
  
    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbxF9XuBR7-QRLBLp15p1FO5VSmRGRLhfv0LfS5E40-XZ92YMolU52dcztGlgTf_qVwk/exec", {
        method: "POST",
        body: formData,
      });
  
      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section id="contact-section" className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Have a question or want to make a reservation? Reach out to us using the form below or contact us directly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-700 mr-3" />
                  <p>+91 9993794283</p>
                </div>
                {/* <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-700 mr-3" />
                  <p>info@myhotel.com</p>
                </div> */}
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-blue-700 mr-3 mt-1" />
                  <p>
                  Ichhwar road, Konajhir,
                    <br />
                    Sehore, Madhya Pradesh 466001
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-gray-300 rounded-lg overflow-hidden h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.91325138606!2d77.05006089999999!3d23.1368459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397cf3a5525f569f%3A0xa90ba184bd489fbf!2sHotel%20Sanwariya%20%26%20family%20restaurant!5e0!3m2!1sen!2sin!4v1746193509820!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map of My Hotel"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6 }}
          >
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center bg-white p-8 rounded-lg border border-gray-200">
                <div className="text-green-500 text-5xl mb-4">✓</div>
                <h3 className="text-2xl font-semibold mb-2">Thank You!</h3>
                <p className="text-gray-600 text-center mb-6">
                  Your message has been sent successfully. We'll get back to you shortly.
                </p>
                <Button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="bg-blue-700 hover:bg-blue-800"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <div className="bg-white p-8 rounded-lg border border-gray-200">
                <h3 className="text-2xl font-semibold mb-6">Send Message</h3>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="Your phone number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about your requirements..."
                              className="resize-none min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit"  onClick={handleSubmit} className="w-full bg-blue-700 hover:bg-blue-800">
                      Submit
                    </Button>
                  </form>
                </Form>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
