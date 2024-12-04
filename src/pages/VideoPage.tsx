import React from 'react';
import { useParams } from 'react-router-dom';
import { videos } from '../data/videos';

export function VideoPage() {
  const { id } = useParams<{ id: string }>();
  const video = videos.find(v => v.id === id);

  if (!video) {
    return <div>Video not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto py-6 px-4">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="aspect-video">
            <iframe
              src={`https://www.youtube.com/embed/${video.youtubeId}`}
              title={video.title}
              className="w-full h-full"
              allowFullScreen
            />
          </div>
          
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-900">{video.title}</h1>
            <div className="flex items-center justify-between mt-2 text-sm text-gray-500">
              <span>{new Date(video.dateAdded).toLocaleDateString()}</span>
              <span>{video.views.toLocaleString()} views</span>
            </div>
            <p className="mt-4 text-gray-700">{video.description}</p>
          </div>
        </div>
      </main>
    </div>
  );
}