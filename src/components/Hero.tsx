import React from 'react';
import { Heart, Search } from 'lucide-react';

export function Hero() {
  return (
    <div className="bg-gradient-to-br from-red-600 to-red-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex justify-center mb-6">
            <Heart className="h-16 w-16 animate-pulse" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Life-Saving Knowledge At Your Fingertips
          </h1>
          <p className="text-xl mb-8 text-red-100">
            Learn essential first aid techniques from trusted professionals. Be prepared to help when it matters most.
          </p>
          
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search for first aid tutorials..."
              className="w-full px-6 py-4 rounded-full text-gray-900 bg-white/95 shadow-lg focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-red-600 p-3 rounded-full hover:bg-red-700 transition">
              <Search className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}