import React from 'react';
import { useForm } from 'react-hook-form';
import { FilamentCalculation } from '../../../types/FilamentCalculator';

interface FilamentFormProps {
  onCalculate: (data: FilamentCalculation) => void;
}

export function FilamentForm({ onCalculate }: FilamentFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<FilamentCalculation>({
    defaultValues: {
      filamentDiameter: 1.75,
      filamentWeight: 1000,
      filamentCost: 25,
      modelWeight: 100,
      materialType: 'PLA',
      density: 1.24,
      electricityCost: 0,
      laborCost: 0,
      wearTearCost: 0
    }
  });

  return (
    <form onSubmit={handleSubmit(onCalculate)} className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">Filament Properties</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Material Type</label>
            <select
              {...register('materialType')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="PLA">PLA</option>
              <option value="ABS">ABS</option>
              <option value="PETG">PETG</option>
              <option value="TPU">TPU</option>
              <option value="Nylon">Nylon</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Filament Diameter (mm)</label>
            <input
              type="number"
              step="0.01"
              {...register('filamentDiameter', { required: true, min: 0 })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Spool Weight (g)</label>
            <input
              type="number"
              {...register('filamentWeight', { required: true, min: 0 })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Spool Cost</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">$</span>
              </div>
              <input
                type="number"
                step="0.01"
                {...register('filamentCost', { required: true, min: 0 })}
                className="pl-7 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">Print Details</h3>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Model Weight (g)</label>
          <input
            type="number"
            step="0.01"
            {...register('modelWeight', { required: true, min: 0 })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">Additional Costs (Optional)</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Electricity Cost</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">$</span>
              </div>
              <input
                type="number"
                step="0.01"
                {...register('electricityCost')}
                className="pl-7 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Labor Cost</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">$</span>
              </div>
              <input
                type="number"
                step="0.01"
                {...register('laborCost')}
                className="pl-7 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Wear & Tear</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">$</span>
              </div>
              <input
                type="number"
                step="0.01"
                {...register('wearTearCost')}
                className="pl-7 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="pt-4">
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Calculate Cost
        </button>
      </div>
    </form>
  );
}