import React from 'react';
import { tools } from '../data/tools';
import { ToolCard } from '../components/ToolCard';
import { PageTransition } from '../components/PageTransition';
import { Wrench } from 'lucide-react';

export function Dashboard() {
  return (
    <PageTransition>
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Wrench className="w-12 h-12 text-indigo-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Tool Repository</h1>
            <p className="text-lg text-gray-600">All the tools you need in one place</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}