"use server";

import React from "react";
import { Resend } from "resend";
import LevezEmail from "@/email/LevezEmail";

const resend = new Resend("re_6oKETEEz_3DAHNk1Ga6wktsH2DGFvNVXJ");

export default async function sendEmail(formData: FormData) {
  // Extract form data
  const companyName = formData.get("companyName") as string;
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const legalForm = formData.get("legalForm") as string;
  const siret = formData.get("siret") as string;
  const website = (formData.get("website") as string) || "Non renseigné";
  const projectDescription = formData.get("projectDescription") as string;

  // Create data object to pass to email template
  const emailData = {
    companyName,
    firstName,
    lastName,
    email,
    phone,
    legalForm,
    siret,
    website,
    projectDescription,
  };

  try {
    // Send confirmation email to the user
    await resend.emails.send({
      from: "LendImmoPME <support@lendimmopme.com>",
      to: email,
      subject: "Votre demande de financement - LendImmoPME",
      react: <LevezEmail formData={emailData} />,
    });

    // Send notification to admin
    await resend.emails.send({
      from: "LendImmoPME <support@lendimmopme.com>",
      to: "support@lendimmopme.com",
      subject: "Nouvelle demande de financement",
      text: `
        Nouvelle demande de financement:
        
        Société: ${companyName}
        Forme juridique: ${legalForm}
        SIRET: ${siret}
        
        Contact:
        Nom: ${lastName}
        Prénom: ${firstName}
        Email: ${email}
        Téléphone: ${phone}
        Site web: ${website}
        
        Description du projet:
        ${projectDescription}
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: "Failed to send email" };
  }
}
