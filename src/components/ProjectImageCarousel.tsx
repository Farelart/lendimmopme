"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
} from "@/components/ui/carousel";

interface ProjectImageCarouselProps {
  images: string[];
}

// Define a type for the carousel API
interface CarouselApi {
  scrollNext: () => void;
  scrollPrev: () => void;
  scrollTo: (index: number) => void;
  canScrollNext: () => boolean;
  canScrollPrev: () => boolean;
  selectedScrollSnap: () => number;
  on: (event: string, callback: () => void) => void;
  off: (event: string, callback: () => void) => void;
}

export default function ProjectImageCarousel({
  images,
}: ProjectImageCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);

  // Remove unused state variables
  // const [canScrollPrev, setCanScrollPrev] = useState(false);
  // const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      // Remove unused state updates
      // setCanScrollPrev(carouselApi.canScrollPrev());
      // setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <div className="relative">
      <Carousel setApi={setCarouselApi}>
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="basis-full">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
                <Image
                  src={image}
                  alt={`Image ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNavigation
          className="absolute bottom-4 left-0 right-0 flex justify-center gap-2"
          classNameButton="bg-white/80 hover:bg-white *:stroke-gray-800"
          alwaysShow
        />
      </Carousel>

      {/* Thumbnails */}
      <div className="flex mt-4 gap-2 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => carouselApi?.scrollTo(index)}
            className={`relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-md border-2 transition-all ${
              currentSlide === index
                ? "border-purple-600"
                : "border-transparent"
            }`}
          >
            <Image
              src={image}
              alt={`Thumbnail ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
