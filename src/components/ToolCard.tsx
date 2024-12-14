import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { Tool } from '../types/Tool';

interface ToolCardProps {
  tool: Tool;
}

export function ToolCard({ tool }: ToolCardProps) {
  const navigate = useNavigate();
  const Icon = Icons[tool.icon as keyof typeof Icons];

  const handleClick = () => {
    navigate(tool.route);
  };

  return (
    <button
      onClick={handleClick}
      className="group relative bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 w-full"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
      <div className="relative z-10">
        <div className="flex items-center justify-center w-12 h-12 mb-4 bg-indigo-100 rounded-lg group-hover:bg-indigo-200 transition-colors duration-300">
          <Icon className="w-6 h-6 text-indigo-600" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{tool.title}</h3>
        <p className="text-sm text-gray-500">{tool.description}</p>
      </div>
      <div className="absolute bottom-0 right-0 w-8 h-8 origin-bottom-right transition-transform duration-300 group-hover:rotate-12">
        <div className="w-full h-full bg-gradient-to-br from-indigo-100 to-white opacity-0 group-hover:opacity-100 rounded-tl-lg transition-opacity duration-300" />
      </div>
    </button>
  );
}