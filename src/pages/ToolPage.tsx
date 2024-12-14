import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';
import { tools } from '../data/tools';
import * as Icons from 'lucide-react';
import { FilamentCalculator } from '../components/tools/filament-calculator/FilamentCalculator';

export function ToolPage() {
  const { id } = useParams();
  const tool = tools.find(t => t.id === id);
  
  if (!tool) {
    return <Navigate to="/" replace />;
  }

  const Icon = Icons[tool.icon as keyof typeof Icons];

  const renderTool = () => {
    switch (tool.id) {
      case 'filament-calculator':
        return <FilamentCalculator />;
      default:
        return (
          <div className="h-96 flex items-center justify-center bg-gray-50 rounded-lg">
            <p className="text-gray-400">Tool content coming soon...</p>
          </div>
        );
    }
  };

  return (
    <PageTransition>
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {renderTool()}
        </div>
      </div>
    </PageTransition>
  );
}