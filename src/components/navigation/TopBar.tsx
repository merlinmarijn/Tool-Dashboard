import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronDown, Home } from 'lucide-react';
import { CategoryDropdown } from './CategoryDropdown';

export function TopBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {!isHome && (
              <button
                onClick={() => navigate(-1)}
                className="mr-4 p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Home className="w-5 h-5 text-gray-600" />
              </button>
            )}
          </div>
          
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <span className="text-gray-700">Tools</span>
              <ChevronDown className="w-4 h-4 text-gray-600" />
            </button>
            
            {isDropdownOpen && (
              <CategoryDropdown onClose={() => setIsDropdownOpen(false)} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}