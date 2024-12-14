import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import { FilamentForm } from './FilamentForm';
import { CostBreakdown } from './CostBreakdown';
import { calculateFilamentCost } from './calculations';
import { FilamentCalculation } from '../../../types/FilamentCalculator';

export function FilamentCalculator() {
  const [calculation, setCalculation] = useState<FilamentCalculation | null>(null);

  const handleCalculate = (data: FilamentCalculation) => {
    const result = calculateFilamentCost(data);
    setCalculation(result);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm p-8">
        <div className="flex items-center mb-8">
          <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
            <Calculator className="w-6 h-6 text-indigo-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">3D Printing Filament Calculator</h2>
            <p className="text-gray-500">Calculate the cost of your 3D printing projects</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <FilamentForm onCalculate={handleCalculate} />
          {calculation && <CostBreakdown calculation={calculation} />}
        </div>
      </div>
    </div>
  );
}