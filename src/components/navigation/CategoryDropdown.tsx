import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { categories } from '../../data/categories';
import { tools } from '../../data/tools';
import * as Icons from 'lucide-react';
import { useClickOutside } from '../../hooks/useClickOutside';

interface CategoryDropdownProps {
  onClose: () => void;
}

export function CategoryDropdown({ onClose }: CategoryDropdownProps) {
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside(dropdownRef, onClose);

  const handleToolClick = (route: string) => {
    navigate(route);
    onClose();
  };

  return (
    <div 
      ref={dropdownRef}
      className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 z-50"
    >
      <div className="p-2">
        {categories.map((category) => {
          const categoryTools = tools.filter(tool => tool.categoryId === category.id);
          
          return (
            <div key={category.id} className="mb-2">
              <div className="px-3 py-2 text-sm font-medium text-gray-900">
                {category.name}
              </div>
              
              {categoryTools.map((tool) => {
                const Icon = Icons[tool.icon as keyof typeof Icons];
                
                return (
                  <button
                    key={tool.id}
                    onClick={() => handleToolClick(tool.route)}
                    className="w-full flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                  >
                    <Icon className="w-4 h-4 mr-2 text-gray-500" />
                    {tool.title}
                  </button>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}