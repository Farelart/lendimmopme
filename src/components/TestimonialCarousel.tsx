"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

interface Testimonial {
  text: string;
  initials: string;
  name: string;
}

const testimonials: Testimonial[] = [
  {
    text: "Les descriptifs des projets sont détaillés, les analyses sont claires et donnent une bonne idée pour choisir et trier les investissements.",
    initials: "CP",
    name: "Charles P.",
  },
  {
    text: "Cela fait des années que j'investis sur LendImmoPME, le service client est très accessible et agréable.",
    initials: "BN",
    name: "Benoit N.",
  },
  {
    text: "Bonne diversité des placements proposés. Parcours de souscription bien construit. Interface satisfaisante.",
    initials: "SF",
    name: "Sylvain F.",
  },
  {
    text: "J'apprécie particulièrement la transparence des informations et le suivi régulier des projets dans lesquels j'ai investi.",
    initials: "ML",
    name: "Marie L.",
  },
  {
    text: "La plateforme est intuitive et facile à utiliser. Les rendements sont au rendez-vous et conformes aux prévisions annoncées.",
    initials: "JD",
    name: "Jean D.",
  },
  {
    text: "Excellente expérience avec LendImmoPME. Les projets immobiliers sont bien sélectionnés et l'équipe répond rapidement à mes questions.",
    initials: "AT",
    name: "Alexandre T.",
  },
  {
    text: "Je recommande vivement cette plateforme pour la qualité des projets et le professionnalisme de l'équipe. Investir n'a jamais été aussi simple.",
    initials: "SB",
    name: "Sophie B.",
  },
  {
    text: "Après plusieurs années d'investissement sur LendImmoPME, je suis pleinement satisfait des résultats et de la sécurité offerte par la plateforme.",
    initials: "PL",
    name: "Pierre L.",
  },
  {
    text: "La diversification de mon portefeuille a été grandement facilitée grâce à LendImmoPME. Une valeur sûre dans le crowdfunding immobilier.",
    initials: "CM",
    name: "Claire M.",
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + newDirection;
      if (newIndex < 0) newIndex = testimonials.length - 3;
      if (newIndex >= testimonials.length - 2) newIndex = 0;
      return newIndex;
    });
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchEndX.current - touchStartX.current;
    if (Math.abs(swipeDistance) > 50) {
      paginate(swipeDistance > 0 ? -1 : 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="flex justify-between absolute top-1/2 transform -translate-y-1/2 z-10 w-full px-4">
        <button
          onClick={() => paginate(-1)}
          className="bg-white/80 hover:bg-white rounded-full p-2 text-purple-800 transition-all"
        >
          <BiChevronLeft size={24} />
        </button>
        <button
          onClick={() => paginate(1)}
          className="bg-white/80 hover:bg-white rounded-full p-2 text-purple-800 transition-all"
        >
          <BiChevronRight size={24} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 min-h-[300px]">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          {testimonials
            .slice(currentIndex, currentIndex + 3)
            .map((testimonial, index) => (
              <motion.div
                key={`${testimonial.initials}-${index}`}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="bg-white p-6 text-sm rounded-lg flex flex-col gap-8 justify-between h-full"
              >
                <p className="flex-grow">{testimonial.text}</p>
                <div className="flex gap-2 items-center mt-auto">
                  <span className="bg-amber-950 text-white p-3 rounded-full">
                    {testimonial.initials}
                  </span>
                  <p>{testimonial.name}</p>
                </div>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: testimonials.length - 2 }, (_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > currentIndex ? 1 : -1);
              setCurrentIndex(i);
            }}
            className={`w-2 h-2 rounded-full transition-all ${i === currentIndex ? "bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
