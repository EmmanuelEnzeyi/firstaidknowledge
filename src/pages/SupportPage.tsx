import React from 'react';
import { Heart } from 'lucide-react';

export function SupportPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-3xl mx-auto py-12 px-4">
        <div className="text-center mb-8">
          <Heart className="h-16 w-16 text-red-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900">Support Our Mission</h1>
          <p className="mt-4 text-lg text-gray-600">
            Help us continue providing life-saving knowledge to everyone, everywhere.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Make a Difference Today</h2>
          <p className="text-gray-700 mb-6">
            Your support helps us create more high-quality first aid tutorials and reach more people in need of this crucial knowledge.
          </p>
          
          <a
            href="https://example.com/donate"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-red-600 text-white text-center py-3 rounded-lg hover:bg-red-700 transition"
          >
            Donate via M-Pesa
          </a>
        </div>
      </main>
    </div>
  );
}