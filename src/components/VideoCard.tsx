import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Clock, Eye } from 'lucide-react';
import { Video } from '../types';

interface VideoCardProps {
  video: Video;
}

export function VideoCard({ video }: VideoCardProps) {
  return (
    <Link to={`/video/${video.id}`} className="group">
      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-red-100">
        <div className="relative">
          <img
            src={video.thumbnailUrl}
            alt={video.title}
            className="w-full aspect-video object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Play className="h-12 w-12 text-white" />
          </div>
        </div>
        <div className="p-6">
          <h3 className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-300 text-lg">
            {video.title}
          </h3>
          <p className="text-sm text-gray-600 mt-2 line-clamp-2">
            {video.description}
          </p>
          <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{new Date(video.dateAdded).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Eye className="h-4 w-4" />
              <span>{video.views.toLocaleString()} views</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}