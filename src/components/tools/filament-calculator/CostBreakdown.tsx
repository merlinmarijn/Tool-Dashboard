import React from 'react';
import { FilamentCalculation } from '../../../types/FilamentCalculator';

interface CostBreakdownProps {
  calculation: FilamentCalculation;
}

export function CostBreakdown({ calculation }: CostBreakdownProps) {
  const filamentCost = (calculation.modelWeight / calculation.filamentWeight) * calculation.filamentCost;
  const additionalCosts = calculation.electricityCost + calculation.laborCost + calculation.wearTearCost;
  const totalCost = filamentCost + additionalCosts;
  const spoolUsagePercentage = (calculation.modelWeight / calculation.filamentWeight) * 100;

  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Cost Breakdown</h3>
      
      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-sm text-gray-600 mb-1">
            <span>Filament Cost</span>
            <span>${filamentCost.toFixed(2)}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-indigo-600 h-2 rounded-full"
              style={{ width: `${(filamentCost / totalCost) * 100}%` }}
            />
          </div>
        </div>

        {additionalCosts > 0 && (
          <div>
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>Additional Costs</span>
              <span>${additionalCosts.toFixed(2)}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-indigo-400 h-2 rounded-full"
                style={{ width: `${(additionalCosts / totalCost) * 100}%` }}
              />
            </div>
          </div>
        )}

        <div className="pt-4 border-t border-gray-200">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <span>Total Cost</span>
            <span>${totalCost.toFixed(2)}</span>
          </div>
        </div>

        <div className="pt-4">
          <h4 className="text-sm font-medium text-gray-900 mb-2">Spool Usage</h4>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className="bg-indigo-600 h-4 rounded-full relative"
              style={{ width: `${spoolUsagePercentage}%` }}
            >
              <span className="absolute inset-0 flex items-center justify-center text-xs font-medium text-white">
                {spoolUsagePercentage.toFixed(1)}%
              </span>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <h4 className="text-sm font-medium text-gray-900 mb-2">Additional Information</h4>
          <dl className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <dt className="text-gray-500">Cost per Gram</dt>
              <dd className="font-medium text-gray-900">
                ${(totalCost / calculation.modelWeight).toFixed(3)}
              </dd>
            </div>
            <div>
              <dt className="text-gray-500">Material Type</dt>
              <dd className="font-medium text-gray-900">{calculation.materialType}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}