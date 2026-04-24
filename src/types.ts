export interface MenuItem {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  category: 'Espresso' | 'Cold Coffee' | 'Snacks';
}

export interface Review {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
  rating: number;
}

export interface GalleryItem {
  id: string;
  image: string;
  alt: string;
}
