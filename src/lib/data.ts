export interface Painting {
  id: string;
  title: string;
  artist: string;
  year: number;
  medium: string;
  dimensions: string;
  description: string;
  imageUrl: string;
  category: string;
}

export const paintings: Painting[] = [
  {
    id: '1',
    title: 'Ekaant',
    artist: 'Heena Chowdhary',
    year: 2026,
    medium: 'Acrylic on canvas',
    dimensions: '24" x 38"',
    description: 'An exploration of solitude and tranquility through bold acrylic strokes.',
    imageUrl: 'https://res.cloudinary.com/dj15ypnx8/image/upload/v1782740749/art-gallery/photo-1579783902614-a3fb3927b6a5.jpg',
    category: 'Abstract'
  },
  {
    id: '2',
    title: 'Prashaanti / Soul\'s Retreat',
    artist: 'Heena Chowdhary',
    year: 2026,
    medium: 'Oil on Canvas',
    dimensions: '30" x 38"',
    description: 'A serene landscape capturing the essence of peace and spiritual retreat.',
    imageUrl: 'https://res.cloudinary.com/dj15ypnx8/image/upload/v1782740750/art-gallery/photo-1541961017774-22349e4a1262.jpg',
    category: 'Landscape'
  },
  {
    id: '3',
    title: 'Floral Dreams',
    artist: 'Heena Chowdhary',
    year: 2026,
    medium: 'Acrylic on Canvas',
    dimensions: '36" x 36"',
    description: 'A vibrant floral composition celebrating nature\'s beauty. Sold artwork.',
    imageUrl: 'https://res.cloudinary.com/dj15ypnx8/image/upload/v1782740751/art-gallery/photo-1578301978693-85fa9c0320b9.jpg',
    category: 'Still Life'
  },
  {
    id: '4',
    title: 'Bird of Paradise',
    artist: 'Heena Chowdhary',
    year: 2026,
    medium: 'Acrylic on Canvas',
    dimensions: '30" x 40"',
    description: 'Bold orange hues capturing the exotic beauty of bird of paradise flowers.',
    imageUrl: 'https://res.cloudinary.com/dj15ypnx8/image/upload/v1782740752/art-gallery/photo-1507003211169-0a1dd7228f2d.jpg',
    category: 'Still Life'
  },
  {
    id: '5',
    title: 'Ocean Sunset',
    artist: 'Heena Chowdhary',
    year: 2026,
    medium: 'Oil on Canvas',
    dimensions: '48" x 36"',
    description: 'A breathtaking sunset over the ocean, capturing the golden hour\'s magic.',
    imageUrl: 'https://res.cloudinary.com/dj15ypnx8/image/upload/v1782740753/art-gallery/photo-1547891654-e66ed7ebb968.jpg',
    category: 'Landscape'
  },
  {
    id: '6',
    title: 'Blue Florals',
    artist: 'Heena Chowdhary',
    year: 2026,
    medium: 'Acrylic on Canvas',
    dimensions: '36" x 36"',
    description: 'Delicate blue floral patterns creating a sense of calm and serenity.',
    imageUrl: 'https://res.cloudinary.com/dj15ypnx8/image/upload/v1782740753/art-gallery/photo-1578926288207-a90a5366759d.jpg',
    category: 'Still Life'
  },
  {
    id: '7',
    title: 'Golden Horizon',
    artist: 'Heena Chowdhary',
    year: 2026,
    medium: 'Acrylic on Canvas',
    dimensions: '36" x 48"',
    description: 'A warm golden landscape capturing the essence of dawn breaking.',
    imageUrl: 'https://res.cloudinary.com/dj15ypnx8/image/upload/v1782740754/art-gallery/photo-1577720580479-7d839d829c73.jpg',
    category: 'Landscape'
  },
  {
    id: '8',
    title: 'Abstract Emotions',
    artist: 'Heena Chowdhary',
    year: 2026,
    medium: 'Mixed Media',
    dimensions: '30" x 40"',
    description: 'An abstract representation of human emotions through color and form.',
    imageUrl: 'https://res.cloudinary.com/dj15ypnx8/image/upload/v1782740755/art-gallery/photo-1561214115-f2f134cc4912.jpg',
    category: 'Abstract'
  },
  {
    id: '9',
    title: 'Nature\'s Symphony',
    artist: 'Heena Chowdhary',
    year: 2026,
    medium: 'Oil on Canvas',
    dimensions: '40" x 50"',
    description: 'A harmonious blend of natural elements in a symphony of colors.',
    imageUrl: 'https://res.cloudinary.com/dj15ypnx8/image/upload/v1782740756/art-gallery/photo-1544531586-fde5298cdd40.jpg',
    category: 'Landscape'
  },
  {
    id: '10',
    title: 'Portrait of Dreams',
    artist: 'Heena Chowdhary',
    year: 2026,
    medium: 'Acrylic on Canvas',
    dimensions: '24" x 30"',
    description: 'A dreamlike portrait exploring the subconscious mind.',
    imageUrl: 'https://res.cloudinary.com/dj15ypnx8/image/upload/v1782740757/art-gallery/photo-1494790108377-be9c29b29330.jpg',
    category: 'Portrait'
  },
  {
    id: '11',
    title: 'Sunset Boulevard',
    artist: 'Heena Chowdhary',
    year: 2026,
    medium: 'Oil on Canvas',
    dimensions: '36" x 48"',
    description: 'Urban sunset capturing the vibrant energy of city life.',
    imageUrl: 'https://res.cloudinary.com/dj15ypnx8/image/upload/v1782740758/art-gallery/photo-1507003211169-0a1dd7228f2d.jpg',
    category: 'Landscape'
  },
  {
    id: '12',
    title: 'Cosmic Dreams',
    artist: 'Heena Chowdhary',
    year: 2026,
    medium: 'Acrylic on Canvas',
    dimensions: '48" x 48"',
    description: 'An exploration of cosmic themes through vibrant abstract patterns.',
    imageUrl: 'https://res.cloudinary.com/dj15ypnx8/image/upload/v1782740759/art-gallery/photo-1547891654-e66ed7ebb968.jpg',
    category: 'Abstract'
  }
];

export const exhibitions = [
  {
    id: '1',
    title: 'Art Convention',
    date: '29 March - 2 April 2026',
    venue: 'AIFACS, New Delhi',
    description: 'Participating artist Heena Chowdhary showcasing latest works at the All India Fine Arts & Crafts Society.',
    image: 'https://res.cloudinary.com/dj15ypnx8/image/upload/v1782740755/art-gallery/photo-1577720580479-7d839d829c73.jpg'
  },
  {
    id: '2',
    title: 'Nicholas Roerich Art Gallery Exhibition',
    date: '1st - 3rd May 2026',
    venue: 'Nicholas Roerich Art Gallery, New Delhi',
    description: 'Featured artist Heena Chowdhary presenting multidisciplinary art collection.',
    image: 'https://res.cloudinary.com/dj15ypnx8/image/upload/v1782740756/art-gallery/photo-1561214115-f2f134cc4912.jpg'
  },
  {
    id: '3',
    title: 'Colors of India',
    date: 'March 2024',
    venue: 'National Gallery of Modern Art, Mumbai',
    description: 'A collective exhibition featuring contemporary Indian artists exploring the diverse palette of Indian culture.',
    image: 'https://res.cloudinary.com/dj15ypnx8/image/upload/v1782740757/art-gallery/photo-1544531586-fde5298cdd40.jpg'
  }
];

export const artistInfo = {
  name: 'Heena Chowdhary',
  bio: 'Multidisciplinary artist based in Delhi. All that surrounds you is ART..just keep a keen eye and an open heart. Contact for customised art.',
  education: [
    'Fine Arts Specialization',
    'Multidisciplinary Art Practice'
  ],
  achievements: [
    'Exhibited at AIFACS, New Delhi (2026)',
    'Featured at Nicholas Roerich Art Gallery (2026)',
    'Instagram: @_shadesnstrokes'
  ],
  image: 'https://res.cloudinary.com/dj15ypnx8/image/upload/v1783708145/art-gallery/artist-profile.webp'
};
