import React from 'react';
import { categories } from '../data/categories';
import { icons } from 'lucide-react';

export function CategoryList() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 p-4">
      {categories.map((category) => {
        const IconComponent = icons[category.icon as keyof typeof icons];
        
        return (
          <div
            key={category.id}
            className="group flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-red-100"
          >
            <div className="bg-red-50 p-4 rounded-full mb-4 group-hover:bg-red-100 transition-colors duration-300">
              {IconComponent && <IconComponent className="h-8 w-8 text-red-600" />}
            </div>
            <h3 className="text-base font-semibold text-center text-gray-800 group-hover:text-red-600 transition-colors duration-300">
              {category.name}
            </h3>
            <p className="mt-2 text-sm text-center text-gray-500">
              {category.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}