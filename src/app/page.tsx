'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { paintings } from '@/lib/data';
import { FiArrowRight, FiEye, FiPlay, FiX } from 'react-icons/fi';
import HeroSlider from '@/components/HeroSlider';
import VideoCardSlider from '@/components/VideoCardSlider';
import { useState, useEffect } from 'react';
import Skeleton, { HeroSkeleton, CategoryCardSkeleton, AboutSectionSkeleton, CTASkeleton } from '@/components/Skeleton';

export default function Home() {
  const featuredPaintings = paintings.slice(0, 3);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState('https://www.youtube.com/embed/VFrK2TM3gjk?autoplay=1');
  const [thumbnailError, setThumbnailError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const videoCards = [
    {
      id: '1',
      thumbnail: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&q=80',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      title: 'Portrait Painting - Face Art Process',
      artist: 'heena_chowdhary',
      location: 'Delhi, India',
      likes: 234,
      comments: 45
    },
    {
      id: '2',
      thumbnail: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=400&q=80',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      title: 'Face Expression - Art Creation',
      artist: 'heena_chowdhary',
      location: 'Delhi, India',
      likes: 189,
      comments: 32
    },
    {
      id: '3',
      thumbnail: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=400&q=80',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      title: 'Human Face - Painting Journey',
      artist: 'heena_chowdhary',
      location: 'Delhi, India',
      likes: 312,
      comments: 67
    },
    {
      id: '4',
      thumbnail: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=400&q=80',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      title: 'Portrait Mastery - Behind Scenes',
      artist: 'heena_chowdhary',
      location: 'Delhi, India',
      likes: 156,
      comments: 28
    },
    {
      id: '5',
      thumbnail: 'https://images.unsplash.com/photo-1577720580479-7d839d829c73?w=400&q=80',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      title: 'Face Art - Studio Session',
      artist: 'heena_chowdhary',
      location: 'Delhi, India',
      likes: 278,
      comments: 41
    },
    {
      id: '6',
      thumbnail: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      title: 'Portrait Detail - Art Process',
      artist: 'heena_chowdhary',
      location: 'Delhi, India',
      likes: 198,
      comments: 35
    },
    {
      id: '7',
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      title: 'Human Expression - Time Lapse',
      artist: 'heena_chowdhary',
      location: 'Delhi, India',
      likes: 345,
      comments: 52
    },
    {
      id: '8',
      thumbnail: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=400&q=80',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      title: 'Face Painting - Art Creation',
      artist: 'heena_chowdhary',
      location: 'Delhi, India',
      likes: 267,
      comments: 38
    },
    {
      id: '9',
      thumbnail: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&q=80',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      title: 'Portrait Commission - Behind Scenes',
      artist: 'heena_chowdhary',
      location: 'Delhi, India',
      likes: 412,
      comments: 63
    },
    {
      id: '10',
      thumbnail: 'https://images.unsplash.com/photo-1578926288207-a90a5366759d?w=400&q=80',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      title: 'Face Art Studio - Process Video',
      artist: 'heena_chowdhary',
      location: 'Delhi, India',
      likes: 389,
      comments: 57
    }
  ];

  useEffect(() => {
    // Simulate loading for demo purposes
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const categoryItems = [
    {
      image: 'https://instagram.fdel1-8.fna.fbcdn.net/v/t51.82787-15/673122680_17962021311073055_1029815282776648670_n.jpg?stp=dst-jpg_e35_p1080x1080_tt6&_nc_cat=100&_nc_map=urlgen_bucketless&ig_cache_key=Mzg4MjA5ODU5ODc4MzAzNzg3OQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=V5IRkV0z_zMQ7kNvwEjR7Sv&_nc_oc=Adqdp5-6dSxGFDG9ZvU0ejj7kSGS4DUtQUMFaA0M0zZCSz_Qg2LLsLE6so35C6KX1P0aOJuPZ-T5ttxstMhv3P19&_nc_ad=z-m&_nc_cid=1174&_nc_zt=23&_nc_ht=instagram.fdel1-8.fna&_nc_gid=HvZqabhXxyReYwRW9fd9Kw&_nc_ss=7a22e&oh=00_AQCwdrVNzkfhSG-0gVfAdbMfJKe20W148EIA3HJgqgeG0A&oe=6A4F1A81',
      title: 'Featured Art 1',
      description: 'Artwork from Instagram'
    },
    {
      image: 'https://instagram.fdel1-5.fna.fbcdn.net/v/t51.82787-15/656737631_17958340059073055_4019896659995797975_n.jpg?stp=dst-jpg_e35_p640x640_sh2.08_tt6&_nc_cat=104&_nc_map=urlgen_bucketless&ig_cache_key=Mzg2MTM3MTgwMDMzMzAwMTkyNw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=Os4RrLP4s-EQ7kNvwFLV5-r&_nc_oc=AdqbbMo966eoYOL8RF9uwWg8qhkBR_WuA0J9Y5AvuJQau4mU8-eD5LlmHmPyT2uFjtdvTtXva3CAUjaEAO8HAT3s&_nc_ad=z-m&_nc_cid=1174&_nc_zt=23&_nc_ht=instagram.fdel1-5.fna&_nc_gid=nmvwAHvdweUsSz1wDRooQQ&_nc_ss=7a22e&oh=00_AQAJ7Nt_9NghTDT3b82Nkdyo5dx9gJxLSq24un5clSaqqg&oe=6A4F1317',
      title: 'Featured Art 2',
      description: 'Artwork from Instagram'
    },
    {
      image: 'https://instagram.fdel1-4.fna.fbcdn.net/v/t51.82787-15/655724484_17957590452073055_9117653858669761948_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=110&_nc_map=urlgen_bucketless&ig_cache_key=Mzg1Nzc1NjY4MDY5MjM5NzE2Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=DopLmKGGxc4Q7kNvwF25Nod&_nc_oc=AdprfEa_D9goEw2P06J4cd64yAe83jpVtOvJUhRcUiItZqb3TWPE7QAuoS7CtI69odbLB_IyVHMHwjt9MmePVgu-&_nc_ad=z-m&_nc_cid=1174&_nc_zt=23&_nc_ht=instagram.fdel1-4.fna&_nc_gid=nmvwAHvdweUsSz1wDRooQQ&_nc_ss=7a22e&oh=00_AQCyy8rnM8YqkikFncHugX3pJbh9oqVXnyoe9C7XdTqRiQ&oe=6A4F344B',
      title: 'Featured Art 3',
      description: 'Artwork from Instagram'
    },
    {
      image: 'https://instagram.fdel1-6.fna.fbcdn.net/v/t51.82787-15/525670560_17931745401073055_8114132161065609663_n.jpg?stp=dst-jpg_e35_p640x640_sh2.08_tt6&_nc_cat=104&_nc_map=urlgen_bucketless&ig_cache_key=MzY5MDI4MTM5NjU2OTkyOTUzMg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=kRZov5byENwQ7kNvwHnjlhi&_nc_oc=AdrnwzYsSSXFB1K7GxIHmyfVno6Ffh5moviBD3eHMw7zQqg2elo1QffuH8d34jZKUrb44f9h7yLdYjhZ8yXCzLiY&_nc_ad=z-m&_nc_cid=1174&_nc_zt=23&_nc_ht=instagram.fdel1-6.fna&_nc_gid=grXw9gkF9RZosQFGSxlJlQ&_nc_ss=7a22e&oh=00_AQBQnQPDk_QNJn_wZUU2USJdYfP0DgKKRRlGYDEoXK0EiQ&oe=6A4F1600',
      title: 'Featured Art 4',
      description: 'Artwork from Instagram'
    },
    {
      image: 'https://instagram.fdel1-8.fna.fbcdn.net/v/t51.82787-15/526596415_17931743298073055_6455642989614753907_n.jpg?stp=dst-jpg_e35_p640x640_sh2.08_tt6&_nc_cat=101&_nc_map=urlgen_bucketless&ig_cache_key=MzY5MDI3NDY1NDExNzM5NTI3NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=sODMf3XNdwgQ7kNvwFtbkJb&_nc_oc=Adq0yAj4FFQWyL8Qpq-lou6HsjAZcJJJXeSbvDviSV82z3dQpt4VE82Ls1jkA473gdvgG8EvcD2N0sVj85ItUWza&_nc_ad=z-m&_nc_cid=1174&_nc_zt=23&_nc_ht=instagram.fdel1-8.fna&_nc_gid=grXw9gkF9RZosQFGSxlJlQ&_nc_ss=7a22e&oh=00_AQAr3x3KmfHYYp1uI-ojiU5uy9OzISXjBa1XPW2yXzS3yw&oe=6A4F2ED6',
      title: 'Featured Art 5',
      description: 'Artwork from Instagram'
    },
    {
      image: 'https://instagram.fdel1-4.fna.fbcdn.net/v/t51.75761-15/496482346_17922039069073055_1015974517690005411_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=106&_nc_map=urlgen_bucketless&ig_cache_key=MzYyODY1NTUyNjUyNTI1ODc2Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=Gjg5x1LgC1IQ7kNvwGXEaG5&_nc_oc=Adokl3DiRuXo349xZgdozhOk9UrOk54SNjwceQrjPxLrGVfWUWEJ0buPvASa8hki-Y1WhjG1Ab1quBrO12tvKTlB&_nc_ad=z-m&_nc_cid=1174&_nc_zt=23&_nc_ht=instagram.fdel1-4.fna&_nc_gid=TmznI00ciemuDviuaDZXBw&_nc_ss=7a22e&oh=00_AQCEmsPCAaRWAWxhRmABK-LiivAcZAVAGpZfWRwnRJsajg&oe=6A4F18C9',
      title: 'Featured Art 6',
      description: 'Artwork from Instagram'
    }
  ];

  const heroSlides = [
    {
      desktopImage: 'https://res.cloudinary.com/dj15ypnx8/image/upload/v1782740763/art-gallery/budget_artworks_desktop_jpg.jpg',
      mobileImage: 'https://res.cloudinary.com/dj15ypnx8/image/upload/v1782740764/art-gallery/budget_artworks_mobile_2_jpg.jpg',
      alt: 'Budget Artworks'
    },
    {
      desktopImage: 'https://res.cloudinary.com/dj15ypnx8/image/upload/v1782740766/art-gallery/shark_wall-5_png.png',
      mobileImage: 'https://res.cloudinary.com/dj15ypnx8/image/upload/v1782740767/art-gallery/bannerm10_png.png',
      alt: 'Banner Art'
    },
    {
      desktopImage: 'https://res.cloudinary.com/dj15ypnx8/image/upload/v1782740768/art-gallery/banner10_png.png',
      mobileImage: 'https://res.cloudinary.com/dj15ypnx8/image/upload/v1782740769/art-gallery/tree_of_life_m_jpg.jpg',
      alt: 'Tree of Life'
    },
    {
      desktopImage: 'https://res.cloudinary.com/dj15ypnx8/image/upload/v1782740770/art-gallery/tree_of_life_jpg.jpg',
      mobileImage: 'https://res.cloudinary.com/dj15ypnx8/image/upload/v1782740772/art-gallery/pooja_room_banner-mobile_version_png.png',
      alt: 'Pooja Room'
    },
    {
      desktopImage: 'https://res.cloudinary.com/dj15ypnx8/image/upload/v1782740768/art-gallery/banner10_png.png',
      mobileImage: 'https://res.cloudinary.com/dj15ypnx8/image/upload/v1782740772/art-gallery/gallery_walls_m_jpg.jpg',
      alt: 'Gallery Walls'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Slider */}
      <section className="relative w-full">
        {isLoading ? <HeroSkeleton /> : <HeroSlider slides={heroSlides} autoplay={true} autoplayDelay={5000} />}
      </section>

      {/* Featured Works */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          {isLoading ? (
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <Skeleton variant="text" width="40%" height="40px" className="mx-auto" />
                <Skeleton variant="text" width="70%" height="20px" className="mx-auto" />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {Array.from({ length: 4 }).map((_, i) => (
                  <CategoryCardSkeleton key={i} />
                ))}
              </div>
              <div className="text-center">
                <Skeleton variant="rounded" width="180px" height="48px" className="mx-auto" />
              </div>
            </div>
          ) : (
            <>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 dark:text-white mb-4">
                  Featured Works
                </h2>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-body">
                  Discover our handpicked selection of exceptional paintings from talented Indian artists
                </p>
              </motion.div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
                {categoryItems.map((item, index) => (
                  <div key={index} className="relative aspect-square overflow-hidden rounded-lg group">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                      loading="lazy"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-center"
              >
                <Link
                  href="/gallery"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                >
                  View All Paintings <FiArrowRight />
                </Link>
              </motion.div>
            </>
          )}
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 px-4 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto">
          {isLoading ? (
            <AboutSectionSkeleton />
          ) : (
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Instagram-style Video Card Slider */}
              <VideoCardSlider 
                videos={videoCards}
                heading="Art Process Videos"
                subheading="Watch behind-the-scenes of my artwork creation process"
              />
            </motion.div>
          )}
        </div>
      </section>

      {/* Video Popup Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" onClick={() => setIsVideoOpen(false)}>
          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <FiX size={32} />
            </button>
            <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
              {videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be') ? (
                <iframe
                  className="w-full h-full"
                  src={videoUrl}
                  title="Gallery Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <video
                  className="w-full h-full"
                  controls
                  autoPlay
                  src={videoUrl}
                />
              )}
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900 to-pink-800">
        {isLoading ? (
          <CTASkeleton />
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-6">
              Ready to Explore the Art?
            </h2>
            <p className="text-lg md:text-xl text-gray-200 mb-8 font-body">
              Visit our gallery or browse our online collection to find the perfect piece for your space.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 md:px-8 py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-colors text-sm md:text-base"
            >
              Get in Touch <FiArrowRight />
            </Link>
          </motion.div>
        )}
      </section>
    </div>
  );
}
