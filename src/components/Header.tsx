"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative min-h-[600px] h-screen w-full overflow-hidden bg-gradient-to-br from-purple-600 via-purple-700 to-pink-300">
      <div className="absolute top-0 left-0 right-0 z-10">
        <div className="container mx-auto px-4 md:px-0">
          <nav className="flex justify-between items-center py-6">
            <Link href="/">
              <h1 className="text-white font-extrabold text-2xl">
                LendImmoPME
              </h1>
            </Link>
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-4 lg:gap-8">
              <Link
                href="#"
                className="text-white/90 hover:text-white text-sm lg:text-base whitespace-nowrap"
              >
                Investir
              </Link>
              <Link
                href="#"
                className="text-white/90 hover:text-white text-sm lg:text-base whitespace-nowrap"
              >
                Levez des fonds
              </Link>
              <Link
                href="#"
                className="text-white/90 hover:text-white text-sm lg:text-base whitespace-nowrap"
              >
                Blog
              </Link>
              <Link
                href="/sign-in"
                className="text-purple-600 bg-white px-4 py-2 rounded-full hover:bg-gray-200 text-sm lg:text-base whitespace-nowrap transition-all"
              >
                Se connecter
              </Link>
              <Link
                href="/sign-up"
                className="text-white bg-purple-600 px-4 py-2 rounded-full hover:bg-purple-400 text-sm lg:text-base whitespace-nowrap transition-all"
              >
                S&apos;inscrire
              </Link>
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
            <div className="md:hidden bg-purple-700 py-4 px-2 flex flex-col gap-4 items-center rounded">
              <Link
                href="/sign-in"
                className="block text-white hover:text-gray-200"
              >
                Investir
              </Link>
              <Link
                href="/sign-in"
                className="block text-white  hover:text-gray-200"
              >
                Prêter
              </Link>
              <Link
                href="/blog/selection"
                className="block text-white  hover:text-gray-200"
              >
                Blog
              </Link>
              <Link
                href="/sign-in"
                className="text-purple-600 bg-white px-4 py-2 rounded-full hover:bg-gray-200 text-sm lg:text-base whitespace-nowrap transition-all"
              >
                Se connecter
              </Link>
              <Link
                href="/sign-up"
                className="text-white bg-purple-600 px-4 py-2 rounded-full hover:bg-purple-400 text-sm lg:text-base whitespace-nowrap transition-all"
              >
                S&apos;inscrire
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="absolute inset-0">
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center">
          <div className="inline-flex items-center bg-white/10 px-4 py-2 rounded-full text-white text-xs sm:text-sm mb-6">
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4 mr-2"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2L1 21h22L12 2z" />
            </svg>
            9.2% de rendements sur les 12 derniers mois
          </div>

          <h1 className="text-3xl font-extrabold sm:text-4xl md:text-5xl lg:text-6xl text-white text-center mb-4 sm:mb-8">
            Donnez des ailes à vos projets
          </h1>
          <p className="text-white/90 text-sm sm:text-base md:text-lg text-center max-w-3xl mb-6 sm:mb-12 px-4">
            LendImmoPME vous donne accès à des opportunités
            d&apos;investissement exclusives sélectionnées par nos experts pour
            optimiser votre patrimoine.
          </p>

          <div className="flex justify-center gap-4 mb-6 sm:mb-12">
            <button className="bg-white text-purple-900 px-4 sm:px-8 py-2 rounded-full hover:bg-gray-100 text-xs sm:text-sm">
              Immobilier
            </button>
            <button className="bg-white/10 text-white px-4 sm:px-8 py-2 rounded-full hover:bg-white/20 text-xs sm:text-sm">
              PME
            </button>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-orange-500 hover:bg-white text-white hover:text-purple-700 px-6 sm:px-8 py-3 rounded-full font-bold text-sm sm:text-base transition-colors duration-200">
              Commencer à investir
            </button>
            <Link
              href="/#projets"
              className="bg-white/10 text-white px-6 sm:px-8 py-3 rounded-full hover:bg-white hover:text-purple-700 text-sm font-bold sm:text-base transition-colors duration-200"
            >
              Découvrir les projets
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
