import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { tools } from '../../data/tools';

export function Breadcrumbs() {
  const location = useLocation();
  
  if (location.pathname === '/') {
    return null;
  }

  const pathSegments = location.pathname.split('/').filter(Boolean);
  const currentTool = tools.find(tool => tool.id === pathSegments[1]);

  return (
    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ol className="flex items-center space-x-2 py-4">
        <li>
          <Link to="/" className="text-gray-500 hover:text-gray-700">
            Home
          </Link>
        </li>
        
        <ChevronRight className="w-4 h-4 text-gray-400" />
        
        {currentTool && (
          <li className="text-gray-900 font-medium">
            {currentTool.title}
          </li>
        )}
      </ol>
    </nav>
  );
}