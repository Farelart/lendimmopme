import Image from "next/image";

// Property Loan Card Component
export default function Card({
  title,
  imageUrl,
  investorReturn,
  borrowerPayment,
  loanToValue,
  executionDays,
  amount,
}: {
  title: string;
  imageUrl: string;
  investorReturn: string;
  borrowerPayment: string;
  loanToValue: string;
  executionDays: string;
  amount: string;
}) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-lg border border-border bg-white shadow-sm">
      <div className="relative h-48 w-full">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-lg font-semibold line-clamp-2 min-h-[3.5rem]">
          {title}
        </h3>

        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <div className="flex h-2 w-2 items-center justify-center rounded-full bg-purple-500" />
            <div className="text-xs text-muted-foreground">
              L&apos;investisseur reçoit
            </div>
          </div>
          <div className="text-right font-semibold">{investorReturn}</div>

          <div className="flex items-center gap-2">
            <div className="flex h-2 w-2 items-center justify-center rounded-full bg-green-500" />
            <div className="text-xs text-muted-foreground">
              Le débiteur paie
            </div>
          </div>
          <div className="text-right font-semibold">{borrowerPayment}</div>

          <div className="flex items-center gap-2">
            <div className="flex h-2 w-2 items-center justify-center rounded-full bg-yellow-500" />
            <div className="text-xs text-muted-foreground">
              Ratio prêt-valeur
            </div>
          </div>
          <div className="text-right font-semibold">{loanToValue}</div>
        </div>

        <div className="mt-4 flex items-center gap-2 justify-between">
          <div className="flex items-center justify-center gap-2">
            <div className=" h-2 w-2  rounded-full bg-purple-300" />
            <div className="text-xs text-muted-foreground">
              Délai d&apos;exécution
            </div>
          </div>
          <div className="font-semibold">{executionDays}</div>
        </div>

        <div className="mt-4 flex items-center gap-2 justify-between">
          <div className="flex items-center justify-center gap-2">
            <div className=" h-2 w-2  rounded-full bg-purple-500" />
            <div className="text-xs text-muted-foreground">Montant du prêt</div>
          </div>
          <div className="font-semibold">{amount}</div>
        </div>
      </div>
    </div>
  );
}
