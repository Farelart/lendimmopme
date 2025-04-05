'use client'

interface RoiCalculatorProps {
  minInvestment: number;
  yield: number;
}

export default function RoiCalculator({ minInvestment, yield: projectYield }: RoiCalculatorProps) {
  return (
    <div className="mb-6 p-6 bg-purple-50 rounded-xl">
      <h3 className="text-lg font-semibold text-purple-900 mb-4">
        Simulez votre investissement
      </h3>
      <div className="space-y-4">
        <div>
          <label htmlFor="investment" className="block text-sm text-purple-700 mb-1">
            Montant à investir (€)
          </label>
          <input
            type="number"
            id="investment"
            min={minInvestment}
            step="1000"
            defaultValue={minInvestment}
            onChange={(e) => {
              const amount = Number(e.target.value);
              const roi = (amount * projectYield) / 100;
              document.getElementById('roi')!.textContent = 
                roi.toLocaleString('fr-FR', {maximumFractionDigits: 2}) + ' €';
            }}
            className="w-full rounded-md px-3 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
          />
        </div>
        <div className="bg-white p-4 rounded-lg">
          <div className="text-sm text-purple-700">Rendement annuel estimé</div>
          <div id="roi" className="text-xl font-bold text-purple-900">
            {((minInvestment) * projectYield / 100).toLocaleString('fr-FR', {maximumFractionDigits: 2})} €
          </div>
        </div>
      </div>
    </div>
  )
}
