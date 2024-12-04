import React from 'react';
import { Hero } from '../components/Hero';
import { CategoryList } from '../components/CategoryList';
import { VideoGrid } from '../components/VideoGrid';

export function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <main className="max-w-7xl mx-auto py-12">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 px-4 mb-2">Categories</h2>
          <p className="text-gray-600 px-4 mb-8">Browse our comprehensive collection of first aid tutorials by category</p>
          <CategoryList />
        </div>
        
        <div>
          <h2 className="text-3xl font-bold text-gray-900 px-4 mb-2">Trending Tutorials</h2>
          <p className="text-gray-600 px-4 mb-8">Most viewed and highly rated first aid tutorials</p>
          <VideoGrid />
        </div>
      </main>
    </div>
  );
}