"use server";

import React from "react";
import { Resend } from "resend";
import InvestirEmail from "@/email/InvestirEmail";

const resend = new Resend("re_6oKETEEz_3DAHNk1Ga6wktsH2DGFvNVXJ");

export default async function sendInvestmentEmail(formData: FormData) {
  // Extract form data
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const investAmount = formData.get("investAmount") as string;
  const projectTitle = formData.get("projectTitle") as string;
  const projectId = formData.get("projectId") as string;

  // Create data object to pass to email template
  const emailData = {
    firstName,
    lastName,
    email,
    phone,
    investAmount,
    projectTitle,
    projectId,
  };

  try {
    // Send confirmation email to the user
    await resend.emails.send({
      from: "LendImmoPME <support@lendimmopme.com>",
      to: email,
      subject: "Votre demande d'investissement - LendImmoPME",
      react: <InvestirEmail formData={emailData} />,
    });

    // Send notification to admin
    await resend.emails.send({
      from: "LendImmoPME <support@lendimmopme.com>",
      to: "support@lendimmopme.com",
      subject: "Nouvelle demande d'investissement",
      text: `
        Nouvelle demande d'investissement:
        
        Projet: ${projectTitle} (ID: ${projectId})
        Montant d'investissement: ${investAmount} €
        
        Contact:
        Nom: ${lastName}
        Prénom: ${firstName}
        Email: ${email}
        Téléphone: ${phone}
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: "Failed to send email" };
  }
}
