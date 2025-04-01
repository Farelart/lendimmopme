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
          {/* Form title */}
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Déposez votre demande de financement
          </h1>

          {/* Form */}

          {/* Form */}
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6">
            <div className="space-y-2">
              <label htmlFor="companyName" className="block font-medium">
                Nom de l&apos;entreprise<span className="text-red-500">*</span>
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
              <label htmlFor="projectDescription" className="block font-medium">
                Description du projet<span className="text-red-500">*</span>
              </label>
              <textarea
                id="projectDescription"
                name="projectDescription"
                rows={5}
                className="w-full p-3 border rounded-md"
                required
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
                {isSubmitting ? "Envoi en cours..." : "Continuer"}
              </button>
            </div>
          </form>
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
