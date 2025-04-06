"use client";

import { useState } from "react";
import Link from "next/link";
import sendEmail from "@/actions/levezEmail";
import "@/app/form-styles.css";

export default function ImmobilierFormPage() {
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
              <h2>Financement de projet immobilier</h2>
            </div>

            <form
              onSubmit={handleSubmit}
              className="max-w-3xl mx-auto space-y-6 mt-8"
            >
              <input type="hidden" name="projectType" value="immobilier" />

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
                  <option value="eurl">EURL</option>
                  <option value="ei">Entreprise Individuelle</option>
                  <option value="sc">Société Civile</option>
                  <option value="sci">SCI</option>
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
                <label htmlFor="propertyType" className="form-label">
                  Type de bien<span className="required-indicator">*</span>
                </label>
                <select
                  id="propertyType"
                  name="propertyType"
                  className="form-input form-select"
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

              <div className="form-group">
                <label htmlFor="amount" className="form-label">
                  Montant recherché (€)
                  <span className="required-indicator">*</span>
                </label>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  min="100000"
                  max="5000000"
                  step="10000"
                  className="form-input"
                  required
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
                  placeholder="Décrivez votre projet immobilier (localisation, surface, état actuel, travaux prévus, etc.)"
                ></textarea>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`form-button form-button-primary ${isSubmitting ? "disabled" : ""}`}
                >
                  {isSubmitting ? "Envoi en cours..." : "Soumettre ma demande"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
