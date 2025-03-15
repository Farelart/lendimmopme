import Image from "next/image";

// Property Loan Card Component
export default function Card({
  title,
  location,
  imageUrl,
  investorReturn,
  borrowerPayment,
  loanToValue,
  executionDays,
  amount,
}: {
  title: string;
  location: string;
  imageUrl: string;
  investorReturn: string;
  borrowerPayment: string;
  loanToValue: string;
  executionDays: string;
  amount: string;
}) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-border bg-white shadow-sm">
      <div className="relative h-48 w-full">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
      </div>
      <div className="flex flex-col gap-4 p-4">
        <h3 className="text-lg font-semibold">{title}</h3>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <span className="text-blue-500">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 8V12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 16H12.01"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="text-sm">L&apos;investisseur reçoit</span>
            <span className="ml-auto font-semibold">{investorReturn}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-blue-500">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 8V12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 16H12.01"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="text-sm">Le débiteur paie</span>
            <span className="ml-auto font-semibold">{borrowerPayment}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-blue-500">%</span>
            <span className="text-sm">Ratio prêt-valeur</span>
            <span className="ml-auto font-semibold">{loanToValue}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-blue-500">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="3"
                  y="4"
                  width="18"
                  height="18"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 2V6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 2V6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 10H21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="text-sm">Délai d'exécution</span>
            <span className="ml-auto font-semibold">{executionDays}</span>
          </div>
        </div>

        <div className="mt-2 flex items-center gap-2">
          <div className="text-blue-500">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
                fill="currentColor"
              />
              <path
                d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">
              Montant du prêt
            </span>
            <span className="text-xl font-bold">{amount}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
