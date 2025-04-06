"use client";

import { useState } from "react";
import Link from "next/link";
import sendEmail from "@/actions/levezEmail";

export default function PromotionFormPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

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

  return (
    <div className="px-4 md:px-0 md:container mx-auto py-16">
      {isSubmitted ? (
        <div className="max-w-3xl mx-auto text-center py-12">
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
          <div className="mt-8">
            <Link
              href="/levez-des-fonds"
              className="text-purple-600 hover:text-purple-800 font-medium"
            >
              ← Retour à la page des financements
            </Link>
          </div>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link
              href="/levez-des-fonds"
              className="text-purple-600 hover:text-purple-800 font-medium"
            >
              ← Retour à la page des financements
            </Link>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
              Financement de promotion immobilière
            </h2>

            <div className="mb-8">
              <label className="block font-medium mb-3">
                Type de financement<span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div
                  className={`border rounded-md p-4 cursor-pointer transition-colors ${selectedOption === "equity" ? "border-green-500 bg-green-50" : "hover:border-gray-400"}`}
                  onClick={() => setSelectedOption("equity")}
                >
                  <div className="font-bold text-green-700 mb-2">Equity</div>
                  <p className="text-sm text-gray-600">TRI: 8 à 12%</p>
                  <p className="text-sm text-gray-600">Durée: 18 à 36 mois</p>
                </div>

                <div
                  className={`border rounded-md p-4 cursor-pointer transition-colors ${selectedOption === "obligataire" ? "border-green-500 bg-green-50" : "hover:border-gray-400"}`}
                  onClick={() => setSelectedOption("obligataire")}
                >
                  <div className="font-bold text-green-700 mb-2">
                    Financement obligataire
                  </div>
                  <p className="text-sm text-gray-600">TRI: 6 à 9%</p>
                  <p className="text-sm text-gray-600">Durée: 12 à 36 mois</p>
                </div>

                <div
                  className={`border rounded-md p-4 cursor-pointer transition-colors ${selectedOption === "mezzanine" ? "border-green-500 bg-green-50" : "hover:border-gray-400"}`}
                  onClick={() => setSelectedOption("mezzanine")}
                >
                  <div className="font-bold text-green-700 mb-2">
                    Dette mezzanine
                  </div>
                  <p className="text-sm text-gray-600">TRI: 7 à 10%</p>
                  <p className="text-sm text-gray-600">Durée: 12 à 24 mois</p>
                </div>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="max-w-3xl mx-auto space-y-6"
            >
              <input type="hidden" name="projectType" value="promotion" />
              <input
                type="hidden"
                name="financingType"
                value={selectedOption}
              />

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
                  <option value="sccv">SCCV</option>
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
                <label htmlFor="projectType" className="block font-medium">
                  Type de projet immobilier
                  <span className="text-red-500">*</span>
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  className="w-full p-3 border rounded-md bg-white"
                  required
                  defaultValue={""}
                >
                  <option value="" disabled>
                    Choisissez une option
                  </option>
                  <option value="logement">Logements résidentiels</option>
                  <option value="bureaux">Bureaux</option>
                  <option value="commerce">Commerces</option>
                  <option value="mixte">Programme mixte</option>
                  <option value="hotel">Hôtellerie</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="projectLocation" className="block font-medium">
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
                <label htmlFor="fundingAmount" className="block font-medium">
                  Montant du financement recherché (€)
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  id="fundingAmount"
                  name="fundingAmount"
                  className="w-full p-3 border rounded-md"
                  required
                  min="500000"
                  step="100000"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="projectDescription"
                  className="block font-medium"
                >
                  Description du projet
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="projectDescription"
                  name="projectDescription"
                  rows={5}
                  className="w-full p-3 border rounded-md"
                  required
                  placeholder="Décrivez votre projet de promotion (nombre de logements, surface, calendrier prévisionnel, etc.)"
                ></textarea>
              </div>

              <div className="space-y-2">
                <label htmlFor="additionalInfo" className="block font-medium">
                  Informations complémentaires
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  rows={3}
                  className="w-full p-3 border rounded-md"
                  placeholder="Toute information supplémentaire que vous souhaitez partager..."
                ></textarea>
              </div>

              <div className="flex items-start space-x-3 mt-6">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  className="mt-1"
                  required
                />
                <label htmlFor="consent" className="text-sm text-gray-600">
                  J&apos;accepte que mes données soient traitées conformément à
                  la{" "}
                  <Link
                    href="/politiques/confidentialite"
                    className="text-purple-600 hover:text-purple-800"
                    target="_blank"
                  >
                    politique de confidentialité
                  </Link>{" "}
                  de LendImmoPME.
                </label>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting || !selectedOption}
                  className={`w-full py-3 font-medium rounded-md transition-colors ${isSubmitting || !selectedOption ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700 text-white"}`}
                >
                  {isSubmitting ? "Envoi en cours..." : "SOUMETTRE MA DEMANDE"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
