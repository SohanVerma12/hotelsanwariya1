"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import partyhall from "../../assets/party_hall.png";

type GalleryItem = {
  id: number;
  src: string;
  alt: string;
  category: string;
};

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: "https://c8.alamy.com/comp/F3GDYD/wedding-decoration-marriage-entrance-gate-india-asia-F3GDYD.jpg",
    alt: "Marriage garden decorated for wedding events",
    category: "Marriage Garden",
  },
  {
    id: 2,
    // src: "https://previews.123rf.com/images/psisa/psisa1707/psisa170700322/82575745-hotel-interior-elegant-banquet-hall-luxury-room-for-the-wedding-party-blur-image-for-background.jpg",
    src: partyhall,
    alt: "Spacious party hall with elegant lighting",
    category: "Party Hall",
  },
  {
    id: 3,
    src: "https://media.istockphoto.com/id/1334117334/photo/digital-render-of-large-hotel-suite-bedroom.jpg?s=612x612&w=0&k=20&c=kzkNh4AGdRiLnbsJLHDczl1OROhXvhQD3f4N3j6Ptsw=",
    alt: "Luxury hotel room with comfortable bed",
    category: "Hotel Room",
  },
  {
    id: 4,
    src: "https://media.istockphoto.com/id/153775715/photo/indian-food-selection.jpg?s=612x612&w=0&k=20&c=yuhy0bDK_f9Aw8S0TU26rG6negOg1ParcqIZM5BSWJw=",
    alt: "Delicious Indian restaurant dishes",
    category: "Restaurant",
  },
  {
    id: 5,
    src: "https://c8.alamy.com/comp/2CX0TAA/a-decorated-wedding-gazebo-in-india-in-a-landscaped-garden-2CX0TAA.jpg",
    alt: "Outdoor wedding venue with decorations",
    category: "Marriage Garden",
  },
  {
    id: 6,
    src: "https://media.istockphoto.com/id/1050564510/photo/3d-rendering-beautiful-luxury-bedroom-suite-in-hotel-with-tv.jpg?s=612x612&w=0&k=20&c=ZYEso7dgPl889aYddhY2Fj3GOyuwqliHkbbT8pjl_iM=",
    alt: "Comfortable hotel room interior",
    category: "Hotel Room",
  },
];

export default function ImageGallery() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("gallery-section");
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
    <section
      id="gallery-section"
      className="py-16 px-4 md:px-8 bg-gray-50"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Image Gallery</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
          Experience the beauty and elegance of our hotel, its facilities, and services through our image gallery.
        </p>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {galleryItems.map((item) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <Card
                  className="overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300"
                  onClick={() => setSelectedImage(item)}
                >
                  <CardContent className="p-0 relative">
                    <div className="relative h-64 w-full">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <h3 className="text-white font-semibold">{item.category}</h3>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-3xl w-full p-0">
                <div className="relative h-[70vh] w-full">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    style={{ objectFit: "contain" }}
                    sizes="100vw"
                  />
                </div>
                <div className="p-4 bg-white">
                  <h3 className="text-xl font-semibold">{item.category}</h3>
                  <p className="text-gray-600">{item.alt}</p>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
