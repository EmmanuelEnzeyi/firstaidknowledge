export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  youtubeId: string;
  category: string;
  views: number;
  dateAdded: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
}