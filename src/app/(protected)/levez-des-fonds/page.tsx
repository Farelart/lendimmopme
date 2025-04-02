"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projectsData";
import sendEmail from "@/actions/levezEmail";

export default function FinancingRequestPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  // ... rest of your component remains the same

  return (
    <div className="px-4 md:px-0 md:container mx-auto py-8">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Projet immobilier */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all">
            <div className="relative h-48">
              <Image
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80"
                alt="Projet immobilier"
                fill
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Projet immobilier</h3>
                  <p className="text-sm">
                    Financement jusqu&apos;à 5 000 000 €
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                Financement pour l&apos;acquisition, la rénovation ou la
                construction de biens immobiliers résidentiels ou commerciaux.
              </p>

              {/* Détails supplémentaires */}
              <div className="mb-5 grid grid-cols-2 gap-3 text-sm">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="font-semibold text-purple-700">Taux</p>
                  <p>6% - 10%</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="font-semibold text-purple-700">Durée</p>
                  <p>12 - 36 mois</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="font-semibold text-purple-700">Garanties</p>
                  <p>Hypothèque, caution</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="font-semibold text-purple-700">Délai</p>
                  <p>4 - 6 semaines</p>
                </div>
              </div>

              <button
                onClick={() =>
                  document
                    .getElementById("immobilierForm")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="w-full py-3 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700 transition-colors"
              >
                Déposer un dossier
              </button>
            </div>
          </div>

          {/* Promotion immobilière */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all">
            <div className="relative h-48">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Promotion immobilière"
                fill
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">
                    Promotion immobilière
                  </h3>
                  <p className="text-sm">
                    Financement jusqu&apos;à 10 000 000 €
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                Financement pour des projets de promotion immobilière, de la
                conception à la commercialisation.
              </p>

              {/* Détails supplémentaires */}
              <div className="mb-5 grid grid-cols-2 gap-3 text-sm">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="font-semibold text-purple-700">Taux</p>
                  <p>8% - 12%</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="font-semibold text-purple-700">Durée</p>
                  <p>18 - 48 mois</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="font-semibold text-purple-700">Garanties</p>
                  <p>Hypothèque, GFA</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="font-semibold text-purple-700">LTV max</p>
                  <p>Jusqu&apos;à 80%</p>
                </div>
              </div>

              <button
                onClick={() =>
                  document
                    .getElementById("promotionForm")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="w-full py-3 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700 transition-colors"
              >
                Déposer un dossier
              </button>
            </div>
          </div>

          {/* Croissance d'entreprise */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all">
            <div className="relative h-48">
              <Image
                src="https://images.unsplash.com/photo-1664575599736-c5197c684128?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Croissance d'entreprise"
                fill
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">
                    Croissance d&apos;entreprise
                  </h3>
                  <p className="text-sm">
                    Financement jusqu&apos;à 3 000 000 €
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                Financement pour soutenir la croissance de votre entreprise,
                l&apos;expansion ou le développement de nouveaux produits.
              </p>

              {/* Détails supplémentaires */}
              <div className="mb-5 grid grid-cols-2 gap-3 text-sm">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="font-semibold text-purple-700">Taux</p>
                  <p>7% - 11%</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="font-semibold text-purple-700">Durée</p>
                  <p>12 - 60 mois</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="font-semibold text-purple-700">Éligibilité</p>
                  <p>CA &gt; 500K€</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="font-semibold text-purple-700">Délai</p>
                  <p>3 - 5 semaines</p>
                </div>
              </div>

              <button
                onClick={() =>
                  document
                    .getElementById("entrepriseForm")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="w-full py-3 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700 transition-colors"
              >
                Déposer un dossier
              </button>
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
