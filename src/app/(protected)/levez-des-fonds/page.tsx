"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projectsData";
import sendEmail from "@/actions/levezEmail";

export default function FinancingRequestPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  // Add state to track which form to display
  const [activeForm, setActiveForm] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Get form data
      const formData = new FormData(e.currentTarget);

      // Send email
      const result = await sendEmail(formData);

      if (result.success) {
        // Set submitted state to true
        setIsSubmitted(true);
      } else {
        console.error("Failed to send email:", result.error);
        alert("Une erreur est survenue. Veuillez réessayer plus tard.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Une erreur est survenue. Veuillez réessayer plus tard.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Select a few featured projects to display
  const featuredProjects = projects
    .filter((project) => project.progress > 50) // Only show projects with good progress
    .slice(0, 3); // Limit to 3 projects

  // Function to handle form selection
  const showForm = (formId: string) => {
    setActiveForm(formId);
    // Scroll to the form section
    setTimeout(() => {
      document.getElementById(formId)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  // ... rest of your component remains the same

  return (
    <div className="px-4 md:px-0 md:container mx-auto py-16">
      {/* Notre offre section */}
      <div className="mb-16">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-light text-neutral-700 mb-4">
              <span className="text-purple-800 font-bold">Notre offre</span>
            </h1>
            <h2 className="text-2xl font-bold text-neutral-800 mb-6">
              Se financer avec LendImmoPME
            </h2>

            <p className="text-lg mb-6">
              LendImmoPME est une plateforme de financement participatif qui
              vous permet de lever des fonds rapidement pour des projets
              immobiliers, de promotion immobilière ou pour financer la
              croissance de votre entreprise.
            </p>

            <p className="text-lg mb-8">
              Notre équipe de professionnels met son expertise à votre service
              afin d&apos;élaborer avec vous des solutions innovantes de
              financement. Notre large communauté de plus de 22 000
              investisseurs vous garantit un taux de réussite optimal pour vos
              projets.
            </p>

            <button
              onClick={() =>
                document
                  .getElementById("typeFinancement")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-md transition-colors"
            >
              SOUMETTRE UN DOSSIER
            </button>
          </div>

          <div className="md:w-1/2">
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80"
                alt="Financement de projets"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Types de projets de financement */}
      <div id="typeFinancement" className="my-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Nos solutions de financement
        </h2>
        <p className="text-center text-lg mb-8">
          Adaptées en fonction du type de projet
        </p>

        {/* Production d'énergie renouvelable */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 flex-shrink-0 bg-gray-100 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">
                Production d&apos;énergie renouvelable
              </h3>
              <p className="text-gray-600">
                Solaire sur toiture, agrivoltaïque, éolien offshore, éolien
                terrestre, méthanisation, géothermie, cogénération, stockage...
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Financement projet (SPV) */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all border-t-4 border-green-500">
              <div className="p-6">
                <h4 className="text-xl font-bold mb-4 text-green-700">
                  Financement projet (SPV)
                </h4>
                <p className="text-gray-700 font-semibold mb-2">
                  Utilisation des fonds
                </p>
                <ul className="list-disc pl-5 mb-4 text-gray-600 space-y-1">
                  <li>Développement de projets d&apos;énergie</li>
                  <li>Refinancement des fonds propres</li>
                  <li>Complément des financements bancaires</li>
                </ul>

                {/* Détails supplémentaires */}
                <div className="mb-5 space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700">TRI</span>
                    <span className="text-green-700 font-bold">3 à 4%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700">Durée</span>
                    <span>Jusqu&apos;à 5 ans</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700">
                      Ticket minimum
                    </span>
                    <span>75.000€</span>
                  </div>
                </div>

                <button
                  onClick={() => showForm("immobilierForm")}
                  className="w-full py-3 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700 transition-colors"
                >
                  S&apos;INSCRIRE AU DOSSIER
                </button>
              </div>
            </div>

            {/* Financement corporate (holding) */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all border-t-4 border-green-500">
              <div className="p-6">
                <h4 className="text-xl font-bold mb-4 text-green-700">
                  Financement corporate (holding)
                </h4>
                <p className="text-gray-700 font-semibold mb-2">
                  Utilisation des fonds
                </p>
                <ul className="list-disc pl-5 mb-4 text-gray-600 space-y-1">
                  <li>Développement de projets d&apos;énergie</li>
                  <li>Financement des projets (SPV)</li>
                  <li>Croissance externe</li>
                  <li>Refinancement des fonds propres (développement)</li>
                </ul>

                {/* Détails supplémentaires */}
                <div className="mb-5 space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700">TRI</span>
                    <span className="text-green-700 font-bold">4 à 5%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700">Durée</span>
                    <span>Jusqu&apos;à 6 ans</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700">
                      Ticket minimum
                    </span>
                    <span>75.000€</span>
                  </div>
                </div>

                <button
                  onClick={() => showForm("promotionForm")}
                  className="w-full py-3 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700 transition-colors"
                >
                  S&apos;INSCRIRE AU DOSSIER
                </button>
              </div>
            </div>

            {/* Parts coopératives (capital) */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all border-t-4 border-green-500 relative">
              <div className="absolute top-0 right-0 bg-yellow-400 text-xs font-bold px-3 py-1 transform translate-x-6 rotate-45 origin-bottom-left">
                Populaire
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold mb-4 text-green-700">
                  Parts coopératives (capital)
                </h4>
                <p className="text-gray-700 font-semibold mb-2">
                  Utilisation des fonds
                </p>
                <ul className="list-disc pl-5 mb-4 text-gray-600 space-y-1">
                  <li>Financement de projets d&apos;énergie renouvelable</li>
                  <li>Coopérative énergétique</li>
                  <li>Participation à la transition</li>
                </ul>

                {/* Détails supplémentaires */}
                <div className="mb-5 space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700">TRI</span>
                    <span className="text-green-700 font-bold">
                      Selon les résultats
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700">Durée</span>
                    <span>Sans limite</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700">
                      Ticket minimum
                    </span>
                    <span>50.000€</span>
                  </div>
                </div>

                <button
                  onClick={() => showForm("entrepriseForm")}
                  className="w-full py-3 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700 transition-colors"
                >
                  S&apos;INSCRIRE AU DOSSIER
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Promotion immobilière */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 flex-shrink-0 bg-gray-100 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">
                Promotion immobilière
              </h3>
              <p className="text-gray-600">
                Résidentiel, commercial, mixte et de bureaux.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Prêt subordonné (junior) */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all border-t-4 border-blue-500">
              <div className="p-6">
                <h4 className="text-xl font-bold mb-4 text-blue-700">
                  Prêt subordonné (junior)
                </h4>
                <p className="text-gray-700 font-semibold mb-2">
                  Utilisation des fonds
                </p>
                <ul className="list-disc pl-5 mb-4 text-gray-600 space-y-1">
                  <li>Financement partiel (junior)</li>
                  <li>Financement des travaux</li>
                  <li>Financement des réserves</li>
                  <li>Complément des financements bancaires</li>
                </ul>

                {/* Détails supplémentaires */}
                <div className="mb-5 space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700">TRI</span>
                    <span className="text-blue-700 font-bold">4.5 à 5%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700">Durée</span>
                    <span>2 à 3 ans</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700">
                      Ticket minimum
                    </span>
                    <span>50.000€</span>
                  </div>
                </div>

                <button
                  onClick={() => showForm("immobilierForm")}
                  className="w-full py-3 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
                >
                  S&apos;INSCRIRE AU DOSSIER
                </button>
              </div>
            </div>

            {/* Prêt hypothécaire (marchand de biens) */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all border-t-4 border-blue-500">
              <div className="p-6">
                <h4 className="text-xl font-bold mb-4 text-blue-700">
                  Prêt hypothécaire (marchand de biens)
                </h4>
                <p className="text-gray-700 font-semibold mb-2">
                  Utilisation des fonds
                </p>
                <ul className="list-disc pl-5 mb-4 text-gray-600 space-y-1">
                  <li>Acquisition avec travaux de rénovation</li>
                  <li>Jusqu&apos;à 70% de financement</li>
                </ul>

                {/* Détails supplémentaires */}
                <div className="mb-5 space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700">TRI</span>
                    <span className="text-blue-700 font-bold">4 à 4.5%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700">Durée</span>
                    <span>1 à 2 ans</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700">
                      Ticket minimum
                    </span>
                    <span>50.000€</span>
                  </div>
                </div>

                <button
                  onClick={() => showForm("promotionForm")}
                  className="w-full py-3 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
                >
                  S&apos;INSCRIRE AU DOSSIER
                </button>
              </div>
            </div>

            {/* Co-invest (Equity) */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all border-t-4 border-blue-500 relative">
              <div className="absolute top-0 right-0 bg-yellow-400 text-xs font-bold px-3 py-1 transform translate-x-6 rotate-45 origin-bottom-left">
                Populaire
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold mb-4 text-blue-700">
                  Co-invest (Equity)
                </h4>
                <p className="text-gray-700 font-semibold mb-2">
                  Utilisation des fonds
                </p>
                <ul className="list-disc pl-5 mb-4 text-gray-600 space-y-1">
                  <li>Apport en fonds propres (equity)</li>
                  <li>Financement des travaux</li>
                </ul>

                {/* Détails supplémentaires */}
                <div className="mb-5 space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700">TRI</span>
                    <span className="text-blue-700 font-bold">4 à 6%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700">Durée</span>
                    <span>Selon le projet</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700">
                      Ticket minimum
                    </span>
                    <span>50.000€</span>
                  </div>
                </div>

                <button
                  onClick={() => showForm("entrepriseForm")}
                  className="w-full py-3 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
                >
                  S&apos;INSCRIRE AU DOSSIER
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* PME durable */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 flex-shrink-0 bg-gray-100 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-purple-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">PME durable</h3>
              <p className="text-gray-600">
                Financement de la résilience de votre entreprise.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:px-16">
            {/* Prêt Prozi */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all border-t-4 border-purple-500">
              <div className="p-6">
                <h4 className="text-xl font-bold mb-4 text-purple-700">
                  Prêt Prozi
                </h4>
                <p className="text-gray-700 font-semibold mb-2">
                  Utilisation des fonds
                </p>
                <ul className="list-disc pl-5 mb-4 text-gray-600 space-y-1">
                  <li>Soutien aux projets d&apos;investissement</li>
                  <li>Financement de la croissance</li>
                  <li>Fonds de roulement</li>
                  <li>Marketing et communication</li>
                  <li>Actifs immatériels</li>
                </ul>

                {/* Détails supplémentaires */}
                <div className="mb-5 space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700">TRI</span>
                    <span className="text-purple-700 font-bold">2 à 3%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700">Durée</span>
                    <span>3 à 5 ans</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700">
                      Ticket minimum
                    </span>
                    <span>50.000€</span>
                  </div>
                </div>

                <button
                  onClick={() => showForm("immobilierForm")}
                  className="w-full py-3 bg-purple-600 text-white text-sm font-medium rounded-md hover:bg-purple-700 transition-colors"
                >
                  S&apos;INSCRIRE AU DOSSIER
                </button>
              </div>
            </div>

            {/* Prêt subordonné */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all border-t-4 border-purple-500">
              <div className="p-6">
                <h4 className="text-xl font-bold mb-4 text-purple-700">
                  Prêt subordonné
                </h4>
                <p className="text-gray-700 font-semibold mb-2">
                  Utilisation des fonds
                </p>
                <ul className="list-disc pl-5 mb-4 text-gray-600 space-y-1">
                  <li>Investissement à la création</li>
                  <li>Financement de la R&D</li>
                  <li>Fonds de roulement</li>
                </ul>

                {/* Détails supplémentaires */}
                <div className="mb-5 space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700">TRI</span>
                    <span className="text-purple-700 font-bold">3 à 4%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700">Durée</span>
                    <span>3 à 5 ans</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700">
                      Ticket minimum
                    </span>
                    <span>50.000€</span>
                  </div>
                </div>

                <button
                  onClick={() => showForm("entrepriseForm")}
                  className="w-full py-3 bg-purple-600 text-white text-sm font-medium rounded-md hover:bg-purple-700 transition-colors"
                >
                  S&apos;INSCRIRE AU DOSSIER
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Steps indicator */}
      <div className="flex flex-col md:flex-row gap-4 mb-12 justify-center">
        {/* Steps content remains unchanged */}
        <div className="bg-gray-50 p-6 rounded-lg text-center">
          <div className="text-purple-600 font-bold text-xl mb-2">1</div>
          <h3 className="font-bold text-gray-800">DÉPOSEZ VOTRE DOSSIER</h3>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg text-center">
          <div className="text-purple-600 font-bold text-xl mb-2">2</div>
          <h3 className="font-bold text-gray-800">
            NOS EXPERTS ÉTUDIENT VOTRE DOSSIER
          </h3>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg text-center">
          <div className="text-purple-600 font-bold text-xl mb-2">3</div>
          <h3 className="font-bold text-gray-800">
            NOUS VOUS RECONTACTONS DANS LES 48H
          </h3>
        </div>
      </div>

      {/* Advantages section */}
      <div className="bg-amber-100 py-12 px-4 mb-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Avantages
          </h2>
          <p className="text-center mb-10 max-w-3xl mx-auto text-gray-700">
            Lendimmopme est le partenaire fiable pour votre levée de fonds. Nous
            combinons financement et promotion de votre projet ou de votre
            entreprise durable.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Column 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <div className="bg-teal-100 p-4 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-teal-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-gray-800">
                Outils de financement
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="mr-2 text-teal-500">•</span>
                  Présentation de l&apos;offre financière
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-teal-500">•</span>
                  Offres projets ciblés
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-teal-500">•</span>
                  Financement participatif
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-teal-500">•</span>
                  Analyse complète de fonds
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-teal-500">•</span>
                  Conseil en stratégie de financement
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <div className="bg-purple-100 p-4 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-gray-800">
                Outils de communication et commercialisation
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="mr-2 text-purple-500">•</span>
                  Offre marketing
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-purple-500">•</span>
                  Contenus promotionnels
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-purple-500">•</span>
                  Accès aux plateformes génération d&apos;investisseurs
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-gray-800">
                Soutien juridique et fiscal
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="mr-2 text-blue-500">•</span>
                  Analyse légale de votre dossier
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-blue-500">•</span>
                  Optimisation fiscale
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-blue-500">•</span>
                  Solutions SCPI avantageuses
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-blue-500">•</span>
                  Conseils juridiques clés
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-700 mb-2">Vous avez des questions ?</p>
            <p className="text-lg font-semibold">
              Complétez notre{" "}
              <a href="#" className="text-purple-600 hover:underline">
                formulaire de contact
              </a>{" "}
              ou contactez-nous directement à{" "}
              <a
                href="mailto:support@lendimmopme.com"
                className="text-purple-600 hover:underline"
              >
                support@lendimmopme.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {isSubmitted ? (
        <div className="max-w-3xl mx-auto text-center py-12">
          {/* Success message remains unchanged */}
          <div className="bg-green-100 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Merci pour votre demande !
          </h2>
          <p className="text-xl text-gray-600">
            Nous ANALYSONS votre dossier, nous vous contacterons sous 48h.
          </p>
        </div>
      ) : (
        <>
          {/* Formulaires spécifiques */}
          <div className="space-y-16">
            {/* Formulaire Projet Immobilier */}
            <div
              id="immobilierForm"
              className="scroll-mt-24 bg-gray-50 p-8 rounded-xl"
              style={{
                display: activeForm === "immobilierForm" ? "block" : "none",
              }}
            >
              <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
                Financement de projet immobilier
              </h2>

              <form
                onSubmit={handleSubmit}
                className="max-w-3xl mx-auto space-y-6"
              >
                <input type="hidden" name="projectType" value="immobilier" />

                <div className="space-y-2">
                  <label htmlFor="companyName" className="block font-medium">
                    Nom de l&apos;entreprise
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    className="w-full p-3 border rounded-md"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="block font-medium">
                      Prénom<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full p-3 border rounded-md"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="lastName" className="block font-medium">
                      Nom<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full p-3 border rounded-md"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="legalForm" className="block font-medium">
                    Forme juridique<span className="text-red-500">*</span>
                  </label>
                  <select
                    id="legalForm"
                    name="legalForm"
                    className="w-full p-3 border rounded-md bg-white"
                    required
                    defaultValue={""}
                  >
                    <option value="" disabled>
                      Choisissez une option
                    </option>
                    <option value="sarl">SARL</option>
                    <option value="sas">SAS</option>
                    <option value="eurl">EURL</option>
                    <option value="ei">Entreprise Individuelle</option>
                    <option value="sc">Société Civile</option>
                    <option value="sci">SCI</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="siret" className="block font-medium">
                    N° d&apos;immatriculation (SIRET)
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="siret"
                    name="siret"
                    className="w-full p-3 border rounded-md"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="block font-medium">
                    Numéro de téléphone<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full p-3 border rounded-md"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block font-medium">
                    Email<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-3 border rounded-md"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="propertyType" className="block font-medium">
                    Type de bien<span className="text-red-500">*</span>
                  </label>
                  <select
                    id="propertyType"
                    name="propertyType"
                    className="w-full p-3 border rounded-md bg-white"
                    required
                    defaultValue={""}
                  >
                    <option value="" disabled>
                      Choisissez une option
                    </option>
                    <option value="residential">Résidentiel</option>
                    <option value="commercial">Commercial</option>
                    <option value="mixed">Mixte</option>
                    <option value="land">Terrain</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="amount" className="block font-medium">
                    Montant recherché (€)<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    id="amount"
                    name="amount"
                    min="100000"
                    max="5000000"
                    step="10000"
                    className="w-full p-3 border rounded-md"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="projectDescription"
                    className="block font-medium"
                  >
                    Description du projet<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="projectDescription"
                    name="projectDescription"
                    rows={5}
                    className="w-full p-3 border rounded-md"
                    required
                    placeholder="Décrivez votre projet immobilier (localisation, surface, état actuel, travaux prévus, etc.)"
                  ></textarea>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-6 py-3 bg-purple-600 text-white font-medium rounded-md hover:bg-orange-600 ${
                      isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting
                      ? "Envoi en cours..."
                      : "Soumettre ma demande"}
                  </button>
                </div>
              </form>
            </div>

            {/* Formulaire Promotion Immobilière */}
            <div
              id="promotionForm"
              className="scroll-mt-24 bg-gray-50 p-8 rounded-xl"
              style={{
                display: activeForm === "promotionForm" ? "block" : "none",
              }}
            >
              <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
                Financement de promotion immobilière
              </h2>

              <form
                onSubmit={handleSubmit}
                className="max-w-3xl mx-auto space-y-6"
              >
                <input type="hidden" name="projectType" value="promotion" />

                <div className="space-y-2">
                  <label
                    htmlFor="companyName_promo"
                    className="block font-medium"
                  >
                    Nom de l&apos;entreprise
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="companyName_promo"
                    name="companyName"
                    className="w-full p-3 border rounded-md"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="firstName_promo"
                      className="block font-medium"
                    >
                      Prénom<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName_promo"
                      name="firstName"
                      className="w-full p-3 border rounded-md"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="lastName_promo"
                      className="block font-medium"
                    >
                      Nom<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName_promo"
                      name="lastName"
                      className="w-full p-3 border rounded-md"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="legalForm_promo"
                    className="block font-medium"
                  >
                    Forme juridique<span className="text-red-500">*</span>
                  </label>
                  <select
                    id="legalForm_promo"
                    name="legalForm"
                    className="w-full p-3 border rounded-md bg-white"
                    required
                    defaultValue={""}
                  >
                    <option value="" disabled>
                      Choisissez une option
                    </option>
                    <option value="sarl">SARL</option>
                    <option value="sas">SAS</option>
                    <option value="sccv">SCCV</option>
                    <option value="sci">SCI</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="siret_promo" className="block font-medium">
                    N° d&apos;immatriculation (SIRET)
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="siret_promo"
                    name="siret"
                    className="w-full p-3 border rounded-md"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone_promo" className="block font-medium">
                    Numéro de téléphone<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone_promo"
                    name="phone"
                    className="w-full p-3 border rounded-md"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email_promo" className="block font-medium">
                    Email<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email_promo"
                    name="email"
                    className="w-full p-3 border rounded-md"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="projectLocation"
                    className="block font-medium"
                  >
                    Localisation du projet
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="projectLocation"
                    name="projectLocation"
                    className="w-full p-3 border rounded-md"
                    required
                    placeholder="Ville, département"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="amount_promo" className="block font-medium">
                    Montant recherché (€)<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    id="amount_promo"
                    name="amount"
                    min="500000"
                    max="10000000"
                    step="100000"
                    className="w-full p-3 border rounded-md"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="projectDescription_promo"
                    className="block font-medium"
                  >
                    Description du projet<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="projectDescription_promo"
                    name="projectDescription"
                    rows={5}
                    className="w-full p-3 border rounded-md"
                    required
                    placeholder="Décrivez votre projet de promotion (nombre de logements, surface, calendrier prévisionnel, etc.)"
                  ></textarea>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-6 py-3 bg-purple-600 text-white font-medium rounded-md hover:bg-orange-600 ${
                      isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting
                      ? "Envoi en cours..."
                      : "Soumettre ma demande"}
                  </button>
                </div>
              </form>
            </div>

            {/* Formulaire Croissance d'entreprise */}
            <div
              id="entrepriseForm"
              className="scroll-mt-24 bg-gray-50 p-8 rounded-xl"
              style={{
                display: activeForm === "entrepriseForm" ? "block" : "none",
              }}
            >
              <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
                Financement de croissance d&apos;entreprise
              </h2>

              <form
                onSubmit={handleSubmit}
                className="max-w-3xl mx-auto space-y-6"
              >
                <input type="hidden" name="projectType" value="entreprise" />

                <div className="space-y-2">
                  <label
                    htmlFor="companyName_ent"
                    className="block font-medium"
                  >
                    Nom de l&apos;entreprise
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="companyName_ent"
                    name="companyName"
                    className="w-full p-3 border rounded-md"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="firstName_ent"
                      className="block font-medium"
                    >
                      Prénom<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName_ent"
                      name="firstName"
                      className="w-full p-3 border rounded-md"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="lastName_ent" className="block font-medium">
                      Nom<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName_ent"
                      name="lastName"
                      className="w-full p-3 border rounded-md"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="position" className="block font-medium">
                    Fonction dans l&apos;entreprise
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    className="w-full p-3 border rounded-md"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="legalForm_ent" className="block font-medium">
                    Forme juridique<span className="text-red-500">*</span>
                  </label>
                  <select
                    id="legalForm_ent"
                    name="legalForm"
                    className="w-full p-3 border rounded-md bg-white"
                    required
                    defaultValue={""}
                  >
                    <option value="" disabled>
                      Choisissez une option
                    </option>
                    <option value="sarl">SARL</option>
                    <option value="sas">SAS</option>
                    <option value="sa">SA</option>
                    <option value="eurl">EURL</option>
                    <option value="ei">Entreprise Individuelle</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="siret_ent" className="block font-medium">
                    N° d&apos;immatriculation (SIRET)
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="siret_ent"
                    name="siret"
                    className="w-full p-3 border rounded-md"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone_ent" className="block font-medium">
                    Numéro de téléphone<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone_ent"
                    name="phone"
                    className="w-full p-3 border rounded-md"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email_ent" className="block font-medium">
                    Email<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email_ent"
                    name="email"
                    className="w-full p-3 border rounded-md"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="website" className="block font-medium">
                    Site web <span className="text-gray-500">(facultatif)</span>
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    className="w-full p-3 border rounded-md"
                    placeholder="https://www.example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="businessSector" className="block font-medium">
                    Secteur d&apos;activité
                    <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="businessSector"
                    name="businessSector"
                    className="w-full p-3 border rounded-md bg-white"
                    required
                    defaultValue={""}
                  >
                    <option value="" disabled>
                      Choisissez une option
                    </option>
                    <option value="tech">Technologie</option>
                    <option value="retail">Commerce de détail</option>
                    <option value="manufacturing">Industrie</option>
                    <option value="services">Services</option>
                    <option value="health">Santé</option>
                    <option value="food">Alimentation</option>
                    <option value="energy">Énergie</option>
                    <option value="other">Autre</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="amount_ent" className="block font-medium">
                    Montant recherché (€)<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    id="amount_ent"
                    name="amount"
                    min="50000"
                    max="3000000"
                    step="10000"
                    className="w-full p-3 border rounded-md"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="projectDescription_ent"
                    className="block font-medium"
                  >
                    Description du projet<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="projectDescription_ent"
                    name="projectDescription"
                    rows={5}
                    className="w-full p-3 border rounded-md"
                    required
                    placeholder="Décrivez votre projet de croissance (objectifs, utilisation des fonds, calendrier prévisionnel, etc.)"
                  ></textarea>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-6 py-3 bg-purple-600 text-white font-medium rounded-md hover:bg-orange-600 ${
                      isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting
                      ? "Envoi en cours..."
                      : "Soumettre ma demande"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}

      {/* "Ils nous font confiance" section */}
      <div className="mt-20 pt-12 border-t">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Ils nous font confiance
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1"
            >
              <div className="relative h-48">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                ) : (
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400">Image non disponible</span>
                  </div>
                )}

                {/* Status badge */}
                <div className="absolute top-3 left-3">
                  {project.status.includes("Fin de collecte") ? (
                    <span className="inline-block bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">
                      <span className="mr-1">●</span>
                      {project.status}
                    </span>
                  ) : (
                    <span className="inline-block bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">
                      <span className="mr-1">●</span>
                      {project.status}
                    </span>
                  )}
                </div>

                {/* Category badge */}
                {/* <div className="absolute top-3 right-3 bg-white rounded-full px-2 py-1 text-xs font-medium text-gray-800 shadow-sm">
                    {project.category}
                  </div> */}
              </div>

              <div className="p-4">
                <h3 className="font-bold text-lg mb-2 text-gray-800">
                  {project.title}
                </h3>

                <div className="mb-3">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Progression</span>
                    <span className="font-medium">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-purple-600 h-2 rounded-full"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-500 text-xs">Rendement</p>
                    <p className="font-bold text-purple-600">
                      {project.yield}%
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-500 text-xs">Montant</p>
                    <p className="font-bold text-gray-800">
                      {new Intl.NumberFormat("fr-FR", {
                        style: "currency",
                        currency: "EUR",
                        maximumFractionDigits: 0,
                      }).format(project.amount)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/investir"
            className="inline-block px-6 py-3 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700 transition-colors"
          >
            Voir tous les projets
          </Link>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="space-y-2">
              <label htmlFor="legalForm" className="block font-medium">
                Forme juridique<span className="text-red-500">*</span>
              </label>
              <select
                id="legalForm"
                className="w-full p-3 border rounded-md bg-white"
                required
                defaultValue={""}
              >
                <option value="" disabled>
                  Choisissez une option
                </option>
                <option value="sarl">SARL</option>
                <option value="sas">SAS</option>
                <option value="eurl">EURL</option>
                <option value="ei">Entreprise Individuelle</option>
                <option value="sc">Société Civile</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="siret" className="block font-medium">
                N° d&apos;immatriculation (SIRET)
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="siret"
                className="w-full p-3 border rounded-md"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="function" className="block font-medium">
                Fonction<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="function"
                className="w-full p-3 border rounded-md"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="name" className="block font-medium">
                Nom<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border rounded-md"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="firstName" className="block font-medium">
                Prénom<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full p-3 border rounded-md"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="countryCode" className="block font-medium">
                  Indicatif pays<span className="text-red-500">*</span>
                </label>
                <select
                  id="countryCode"
                  className="w-full p-3 border rounded-md bg-white"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    Choisissez une option
                  </option>
                  <option value="fr">France (+33)</option>
                  <option value="be">Belgique (+32)</option>
                  <option value="ch">Suisse (+41)</option>
                  <option value="lu">Luxembourg (+352)</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="block font-medium">
                  Numéro de téléphone<span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full p-3 border rounded-md"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block font-medium">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border rounded-md"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="amount" className="block font-medium">
                Montant recherché<span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                id="amount"
                className="w-full p-3 border rounded-md"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="sector" className="block font-medium">
                Secteur d&apos;activité<span className="text-red-500">*</span>
              </label>
              <select
                id="sector"
                className="w-full p-3 border rounded-md bg-white"
                required
                defaultValue=""
              >
                <option value="" disabled>
                  Choisissez une option
                </option>
                <option value="immobilier">Immobilier</option>
                <option value="commerce">Commerce</option>
                <option value="services">Services</option>
                <option value="industrie">Industrie</option>
                <option value="tech">Technologie</option>
                <option value="autre">Autre</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="projectDescription" className="block font-medium">
                Décrivez votre projet<span className="text-red-500">*</span>
              </label>
              <textarea
                id="projectDescription"
                className="w-full p-3 border rounded-md min-h-[120px]"
                required
                placeholder="Décrivez votre projet en quelques lignes..."
              ></textarea>
            </div>

            <div className="space-y-2">
              <label htmlFor="website" className="block font-medium">
                Lien du site web
              </label>
              <input
                type="url"
                id="website"
                className="w-full p-3 border rounded-md"
                placeholder="https://www.example.com"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-3 bg-purple-600 text-white font-medium rounded-md hover:bg-orange-600"
              >
                Continuer
              </button> */
}

{
  /* <div className="space-y-2">
          <label htmlFor="siret" className="block font-medium">
            N° d&apos;immatriculation (SIRET)
            <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="siret"
            className="w-full p-3 border rounded-md"
            required
          />
          
        </div>
        <div className="space-y-2">
          <label htmlFor="function" className="block font-medium">
            Fonction<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="function"
            className="w-full p-3 border rounded-md"
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="name" className="block font-medium">
            Nom<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-3 border rounded-md"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="firstName" className="block font-medium">
            Prénom<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            className="w-full p-3 border rounded-md"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="countryCode" className="block font-medium">
              Indicatif pays<span className="text-red-500">*</span>
            </label>
            <select
              id="countryCode"
              className="w-full p-3 border rounded-md bg-white"
              required
            >
              <option value="" disabled selected>
                Choisissez une option
              </option>
              <option value="fr">France (+33)</option>
              <option value="be">Belgique (+32)</option>
              <option value="ch">Suisse (+41)</option>
              <option value="lu">Luxembourg (+352)</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="block font-medium">
              Numéro de téléphone<span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full p-3 border rounded-md"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block font-medium">
            Email<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-3 border rounded-md"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="amount" className="block font-medium">
            Montant recherché<span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            id="amount"
            className="w-full p-3 border rounded-md"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="sector" className="block font-medium">
            Secteur d&apos;activité<span className="text-red-500">*</span>
          </label>
          <select
            id="sector"
            className="w-full p-3 border rounded-md bg-white"
            required
            defaultValue={""}
          >
            <option value="" disabled selected>
              Choisissez une option
            </option>
            <option value="immobilier">Immobilier</option>
            <option value="commerce">Commerce</option>
            <option value="services">Services</option>
            <option value="industrie">Industrie</option>
            <option value="tech">Technologie</option>
            <option value="autre">Autre</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="projectDescription" className="block font-medium">
            Décrivez votre projet<span className="text-red-500">*</span>
          </label>
          <textarea
            id="projectDescription"
            className="w-full p-3 border rounded-md min-h-[120px]"
            required
            placeholder="Décrivez votre projet en quelques lignes..."
          ></textarea>
        </div>

        <div className="space-y-2">
          <label htmlFor="website" className="block font-medium">
            Lien du site web
          </label>
          <input
            type="url"
            id="website"
            className="w-full p-3 border rounded-md"
            placeholder="https://www.example.com"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-3 bg-purple-600 text-white font-medium rounded-md hover:bg-orange-600"
          >
            Continuer
          </button>
        </div> */
}
