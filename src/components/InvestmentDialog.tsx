"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import sendInvestmentEmail from "@/actions/investirEmail";

export default function InvestmentDialog({
  projectId,
  projectTitle,
  minInvestment,
}: {
  projectId: number;
  projectTitle: string;
  minInvestment: number;
}) {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const formData = new FormData(event.currentTarget);

      // Add project information to form data
      formData.append("projectTitle", projectTitle);
      formData.append("projectId", projectId.toString());

      // Use the existing action to send the email
      const result = await sendInvestmentEmail(formData);

      if (result.success) {
        setSuccess(true);
        setTimeout(() => {
          setOpen(false);
          setSuccess(false);
        }, 3000);
      } else {
        setError("Une erreur est survenue. Veuillez réessayer.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full mb-4 py-6 text-base">
          Investir dans ce projet
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Investir dans {projectTitle}</DialogTitle>
        </DialogHeader>

        {success ? (
          <div className="py-6 text-center">
            <div className="mb-4 mx-auto w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-green-600"
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
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Demande envoyée avec succès
            </h3>
            <p className="text-gray-500">
              Nous avons bien reçu votre demande d&apos;investissement. Vous
              recevrez un email de confirmation.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">Prénom</Label>
                <Input id="firstName" name="firstName" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Nom</Label>
                <Input id="lastName" name="lastName" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Téléphone</Label>
              <Input id="phone" name="phone" type="tel" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="investAmount">
                Montant de l&apos;investissement (€)
              </Label>
              <Input
                id="investAmount"
                name="investAmount"
                type="number"
                min={minInvestment}
                defaultValue={minInvestment}
                required
              />
              <p className="text-xs text-gray-500">
                Investissement minimum: {minInvestment.toLocaleString()} €
              </p>
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox id="terms" name="terms" required />
              <Label
                htmlFor="terms"
                className="text-sm leading-tight cursor-pointer"
              >
                J&apos;accepte les{" "}
                <a
                  href="/conditions"
                  className="text-purple-600 hover:underline"
                >
                  conditions d&apos;investissement
                </a>{" "}
                et je confirme avoir pris connaissance des risques associés.
              </Label>
            </div>

            {error && (
              <div className="text-red-500 text-sm p-2 bg-red-50 rounded-md">
                {error}
              </div>
            )}

            <div className="flex justify-end space-x-2 pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpen(false)}
              >
                Annuler
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting
                  ? "Envoi en cours..."
                  : "Confirmer l'investissement"}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
