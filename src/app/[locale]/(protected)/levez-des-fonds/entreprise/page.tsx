"use client";

import { useState } from "react";
import Link from "next/link";
import sendEmail from "@/actions/levezEmail";
import "@/app/[locale]/form-styles.css";

export default function EntrepriseFormPage() {
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
        <div className="success-container">
          <div className="success-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
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
          <h2 className="success-title">Merci pour votre demande !</h2>
          <p className="success-message">
            Nous ANALYSONS votre dossier, nous vous contacterons sous 48h.
          </p>
          <div className="mt-8">
            <Link href="/levez-des-fonds" className="back-link">
              Retour à la page des financements
            </Link>
          </div>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link href="/levez-des-fonds" className="back-link">
              Retour à la page des financements
            </Link>
          </div>

          <div className="form-card p-8">
            <div className="form-header">
              <h2>Financement de PME durable</h2>
            </div>

            <div className="mb-8">
              <label className="form-label mb-3">
                Type de financement<span className="required-indicator">*</span>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div
                  className={`option-card ${selectedOption === "equity" ? "selected" : ""}`}
                  onClick={() => setSelectedOption("equity")}
                >
                  <div className="option-card-title">Equity</div>
                  <p className="text-sm text-gray-600">TRI: 7 à 10%</p>
                  <p className="text-sm text-gray-600">Durée: 3 à 7 ans</p>
                </div>

                <div
                  className={`option-card ${selectedOption === "obligataire" ? "selected" : ""}`}
                  onClick={() => setSelectedOption("obligataire")}
                >
                  <div className="option-card-title">
                    Financement obligataire
                  </div>
                  <p className="text-sm text-gray-600">TRI: 5 à 8%</p>
                  <p className="text-sm text-gray-600">Durée: 2 à 5 ans</p>
                </div>

                <div
                  className={`option-card ${selectedOption === "dette" ? "selected" : ""}`}
                  onClick={() => setSelectedOption("dette")}
                >
                  <div className="option-card-title">Dette mezzanine</div>
                  <p className="text-sm text-gray-600">TRI: 6 à 9%</p>
                  <p className="text-sm text-gray-600">Durée: 2 à 4 ans</p>
                </div>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="max-w-3xl mx-auto space-y-6 mt-8"
            >
              <input type="hidden" name="projectType" value="entreprise" />
              <input
                type="hidden"
                name="financingType"
                value={selectedOption}
              />

              <div className="form-group">
                <label htmlFor="companyName" className="form-label">
                  Nom de l&apos;entreprise
                  <span className="required-indicator">*</span>
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  className="form-input"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-group">
                  <label htmlFor="firstName" className="form-label">
                    Prénom<span className="required-indicator">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="lastName" className="form-label">
                    Nom<span className="required-indicator">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="form-input"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="position" className="form-label">
                  Fonction dans l&apos;entreprise
                  <span className="required-indicator">*</span>
                </label>
                <input
                  type="text"
                  id="position"
                  name="position"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="legalForm" className="form-label">
                  Forme juridique<span className="required-indicator">*</span>
                </label>
                <select
                  id="legalForm"
                  name="legalForm"
                  className="form-input form-select"
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
                  <option value="sasu">SASU</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="siret" className="form-label">
                  N° d&apos;immatriculation (SIRET)
                  <span className="required-indicator">*</span>
                </label>
                <input
                  type="text"
                  id="siret"
                  name="siret"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="form-label">
                  Numéro de téléphone
                  <span className="required-indicator">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email<span className="required-indicator">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="businessSector" className="form-label">
                  Secteur d&apos;activité
                  <span className="required-indicator">*</span>
                </label>
                <select
                  id="businessSector"
                  name="businessSector"
                  className="form-input form-select"
                  required
                  defaultValue={""}
                >
                  <option value="" disabled>
                    Choisissez une option
                  </option>
                  <option value="agriculture">Agriculture durable</option>
                  <option value="alimentation">Alimentation responsable</option>
                  <option value="economie_circulaire">
                    Économie circulaire
                  </option>
                  <option value="efficacite_energetique">
                    Efficacité énergétique
                  </option>
                  <option value="mobilite">Mobilité durable</option>
                  <option value="tech_verte">Technologies vertes</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="website" className="form-label">
                  Site web
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  className="form-input"
                  placeholder="https://www.example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="companyAge" className="form-label">
                  Âge de l&apos;entreprise
                  <span className="required-indicator">*</span>
                </label>
                <select
                  id="companyAge"
                  name="companyAge"
                  className="form-input form-select"
                  required
                  defaultValue={""}
                >
                  <option value="" disabled>
                    Choisissez une option
                  </option>
                  <option value="moins_1an">Moins d&apos;1 an</option>
                  <option value="1_3ans">1 à 3 ans</option>
                  <option value="3_5ans">3 à 5 ans</option>
                  <option value="5_10ans">5 à 10 ans</option>
                  <option value="plus_10ans">Plus de 10 ans</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="fundingAmount" className="form-label">
                  Montant du financement recherché (€)
                  <span className="required-indicator">*</span>
                </label>
                <input
                  type="number"
                  id="fundingAmount"
                  name="fundingAmount"
                  className="form-input"
                  required
                  min="50000"
                  step="10000"
                />
              </div>

              <div className="form-group">
                <label htmlFor="projectDescription" className="form-label">
                  Description du projet
                  <span className="required-indicator">*</span>
                </label>
                <textarea
                  id="projectDescription"
                  name="projectDescription"
                  rows={5}
                  className="form-textarea"
                  required
                  placeholder="Décrivez votre entreprise et votre projet de croissance (secteur d'activité, historique, objectifs, impact environnemental, etc.)"
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="additionalInfo" className="form-label">
                  Informations complémentaires
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  rows={3}
                  className="form-textarea"
                  placeholder="Toute information supplémentaire que vous souhaitez partager..."
                ></textarea>
              </div>

              <div className="flex items-start space-x-3 mt-6">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  className="form-checkbox mt-1"
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
                  className={`form-button form-button-primary ${isSubmitting || !selectedOption ? "disabled" : ""}`}
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
