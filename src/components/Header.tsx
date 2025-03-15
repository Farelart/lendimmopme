"use client";

import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative h-[500px] w-full overflow-hidden">
        <Image
          src="/image-hero-desktop.jpg"
          alt="LendImmoPME Hero"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute top-0 left-0 right-0 z-10">
          <div className="container mx-auto px-4">
            <nav className="flex justify-between items-center py-6">
              <h1 className="text-white font-bold text-xl">lendimmopme</h1>

              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-6">
                <a href="#" className="text-white hover:text-gray-200">
                  Prêter
                </a>
                <a href="#" className="text-white hover:text-gray-200">
                  Investir
                </a>
                <a href="#" className="text-white hover:text-gray-200">
                  A propos de nous
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-white"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </nav>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <div className="md:hidden bg-black py-4 px-2 rounded">
                <a
                  href="#"
                  className="block text-white py-2 hover:text-gray-200"
                >
                  Prêter
                </a>
                <a
                  href="#"
                  className="block text-white py-2 hover:text-gray-200"
                >
                  Investir
                </a>
                <a
                  href="#"
                  className="block text-white py-2 hover:text-gray-200"
                >
                  A propos de nous
                </a>
              </div>
            )}
          </div>
        </div>

        <div className="absolute inset-0 bg-black/40">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-4">
              Donnez des ailes à vos idées
            </h1>
            <p className="text-sm md:text-xl text-white text-center max-w-2xl mb-8">
              Le meilleur service pour se lancer, se former et financer des
              projets
            </p>
            <div>
              <button className="bg-white text-black px-6 py-3 rounded-md font-medium mr-4 hover:bg-opacity-90 transition">
                Commencez
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
