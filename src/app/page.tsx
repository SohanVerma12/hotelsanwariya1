import Hero from "@/components/sections/Hero";
import ImageGallery from "@/components/sections/ImageGallery";
import AboutUs from "@/components/sections/AboutUs";
import Services from "@/components/sections/Services";
import PricingTeaser from "@/components/sections/PricingTeaser";
import Testimonials from "@/components/sections/Testimonials";
import ContactUs from "@/components/sections/ContactUs";
import Footer from "@/components/sections/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function Home() {
  return (
    <main className="min-h-screen">
      <FloatingButtons />
      <Hero />
      <ImageGallery />
      <AboutUs />
      <Services />
      <PricingTeaser />
      <Testimonials />
      <ContactUs />
      <Footer />
    </main>
  );
}
