import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { AlertCircle } from "lucide-react";

interface InvestmentFormProps {
  projectId: number;
  projectTitle: string;
  minInvestment: number;
  onClose: () => void;
}

export default function InvestmentForm({
  projectId,
  projectTitle,
  minInvestment,
  onClose,
}: InvestmentFormProps) {
  const [amount, setAmount] = useState(minInvestment.toString());
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate amount
    const investAmount = parseFloat(amount);
    if (isNaN(investAmount) || investAmount < minInvestment) {
      setError(
        `Le montant minimum d'investissement est de ${minInvestment.toLocaleString()} €`
      );
      return;
    }

    if (!agreed) {
      setError("Vous devez accepter les conditions d'investissement");
      return;
    }

    // Here you would typically send the investment data to your backend
    // For now, we'll just simulate a successful submission

    // Prepare form data for email
    const formData = {
      investAmount: amount,
      projectTitle,
      projectId: projectId.toString(),
    };

    // Redirect to a form to collect user details
    // This is a placeholder - you would implement this based on your app's routing
    console.log("Investment form data:", formData);
    alert(
      "Formulaire soumis avec succès! Vous allez être redirigé vers le formulaire de contact."
    );
    onClose();
  };

  return (
    <div className="bg-white p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Investir dans {projectTitle}</h2>

      {error && (
        <div className="bg-red-50 text-red-800 p-3 rounded-md mb-4 flex items-start">
          <AlertCircle size={18} className="mr-2 mt-0.5 flex-shrink-0" />
          <p className="text-sm">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <Label htmlFor="amount">Montant de l&apos;investissement (€)</Label>
          <Input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            min={minInvestment}
            step="1000"
            className="mt-1"
            required
          />
          <p className="text-sm text-gray-500 mt-1">
            Investissement minimum: {minInvestment.toLocaleString()} €
          </p>
        </div>

        <div className="mb-6">
          <div className="flex items-start space-x-2 mt-4">
            <Checkbox
              id="terms"
              checked={agreed}
              onCheckedChange={(checked) => setAgreed(checked as boolean)}
            />
            <Label
              htmlFor="terms"
              className="text-sm font-normal leading-tight"
            >
              J&apos;ai lu et j&apos;accepte les conditions
              d&apos;investissement et je comprends les risques associés à cet
              investissement.
            </Label>
          </div>
        </div>

        <div className="flex justify-end space-x-3">
          <Button type="button" variant="outline" onClick={onClose}>
            Annuler
          </Button>
          <Button type="submit">Continuer</Button>
        </div>
      </form>
    </div>
  );
}
