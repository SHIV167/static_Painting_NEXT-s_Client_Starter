'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { paintings } from '@/lib/data';
import { FiArrowRight, FiX } from 'react-icons/fi';
import HeroSlider from '@/components/HeroSlider';
import VideoCardSlider from '@/components/VideoCardSlider';
import { useState, useEffect } from 'react';
import Skeleton, { HeroSkeleton, CategoryCardSkeleton, AboutSectionSkeleton, CTASkeleton } from '@/components/Skeleton';

export default function Home() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState('https://www.youtube.com/embed/VFrK2TM3gjk?autoplay=1');
  const [isLoading, setIsLoading] = useState(true);

  const videoCards = [
    {
      id: '1',
      thumbnail: 'https://res.cloudinary.com/dj15ypnx8/image/upload/v1782740749/art-gallery/photo-1579783902614-a3fb3927b6a5.jpg',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      title: 'Portrait Painting - Face Art Process',
      artist: 'heena_chowdhary',
      location: 'Delhi, India',
      likes: 234,
      comments: 45
    },
    {
      id: '2',
      thumbnail: 'https://res.cloudinary.com/dj15ypnx8/image/upload/v1782740750/art-gallery/photo-1541961017774-22349e4a1262.jpg',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      title: 'Face Expression - Art Creation',
      artist: 'heena_chowdhary',
      location: 'Delhi, India',
      likes: 189,
      comments: 32
    },
    {
      id: '3',
      thumbnail: 'https://res.cloudinary.com/dj15ypnx8/image/upload/v1782740751/art-gallery/photo-1578301978693-85fa9c0320b9.jpg',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      title: 'Human Face - Painting Journey',
      artist: 'heena_chowdhary',
      location: 'Delhi, India',
      likes: 312,
      comments: 67
    },
    {
      id: '4',
      thumbnail: 'https://res.cloudinary.com/dj15ypnx8/image/upload/v1782740752/art-gallery/photo-1507003211169-0a1dd7228f2d.jpg',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      title: 'Portrait Mastery - Behind Scenes',
      artist: 'heena_chowdhary',
      location: 'Delhi, India',
      likes: 156,
      comments: 28
    },
    {
      id: '5',
      thumbnail: 'https://res.cloudinary.com/dj15ypnx8/image/upload/v1782740753/art-gallery/photo-1547891654-e66ed7ebb968.jpg',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      title: 'Face Art - Studio Session',
      artist: 'heena_chowdhary',
      location: 'Delhi, India',
      likes: 278,
      comments: 41
    },
    {
      id: '6',
      thumbnail: 'https://res.cloudinary.com/dj15ypnx8/image/upload/v1782740753/art-gallery/photo-1578926288207-a90a5366759d.jpg',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      title: 'Portrait Detail - Art Process',
      artist: 'heena_chowdhary',
      location: 'Delhi, India',
      likes: 198,
      comments: 35
    },
    {
      id: '7',
      thumbnail: 'https://res.cloudinary.com/dj15ypnx8/image/upload/v1782740754/art-gallery/photo-1577720580479-7d839d829c73.jpg',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      title: 'Human Expression - Time Lapse',
      artist: 'heena_chowdhary',
      location: 'Delhi, India',
      likes: 345,
      comments: 52
    },
    {
      id: '8',
      thumbnail: 'https://res.cloudinary.com/dj15ypnx8/image/upload/v1782740755/art-gallery/photo-1561214115-f2f134cc4912.jpg',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      title: 'Face Painting - Art Creation',
      artist: 'heena_chowdhary',
      location: 'Delhi, India',
      likes: 267,
      comments: 38
    },
    {
      id: '9',
      thumbnail: 'https://res.cloudinary.com/dj15ypnx8/image/upload/v1782740756/art-gallery/photo-1544531586-fde5298cdd40.jpg',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      title: 'Portrait Commission - Behind Scenes',
      artist: 'heena_chowdhary',
      location: 'Delhi, India',
      likes: 412,
      comments: 63
    },
    {
      id: '10',
      thumbnail: 'https://res.cloudinary.com/dj15ypnx8/image/upload/v1782740757/art-gallery/photo-1494790108377-be9c29b29330.jpg',
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
      image: 'https://res.cloudinary.com/dj15ypnx8/image/upload/v1783708461/673122680_17962021311073055_1029815282776648670_n_sa6fm3.webp',
      title: 'Featured Art 1',
      description: 'Artwork from Instagram'
    },
    {
      image: 'https://res.cloudinary.com/dj15ypnx8/image/upload/v1783708461/496482346_17922039069073055_1015974517690005411_n_1_zqqgno.webp',
      title: 'Featured Art 2',
      description: 'Artwork from Instagram'
    },
    {
      image: 'https://res.cloudinary.com/dj15ypnx8/image/upload/v1783708460/496482346_17922039069073055_1015974517690005411_n_n5rgae.webp',
      title: 'Featured Art 3',
      description: 'Artwork from Instagram'
    },
    {
      image: 'https://res.cloudinary.com/dj15ypnx8/image/upload/v1783708460/525670560_17931745401073055_8114132161065609663_n_lso2fi.webp',
      title: 'Featured Art 4',
      description: 'Artwork from Instagram'
    },
    {
      image: 'https://res.cloudinary.com/dj15ypnx8/image/upload/v1783708460/525670560_17931745401073055_8114132161065609663_n_lso2fi.webp',
      title: 'Featured Art 5',
      description: 'Artwork from Instagram'
    },
    {
      image: 'https://res.cloudinary.com/dj15ypnx8/image/upload/v1783708461/496482346_17922039069073055_1015974517690005411_n_1_zqqgno.webp',
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
                <motion.h2 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-gray-900 dark:text-white mb-4"
                  initial={{ backgroundPosition: '0% 50%' }}
                  animate={{ backgroundPosition: '100% 50%' }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)',
                    backgroundSize: '200% auto',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  Featured Works
                </motion.h2>
                <motion.p 
                  className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-body"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Discover our handpicked selection of exceptional paintings from talented Indian artists
                </motion.p>
              </motion.div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
                {categoryItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="relative aspect-square overflow-hidden rounded-2xl group cursor-pointer"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                        loading="lazy"
                        className="object-cover"
                      />
                    </motion.div>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ y: 20 }}
                      whileHover={{ y: 0 }}
                    >
                      <p className="text-white font-semibold text-sm font-display">{item.title}</p>
                      <p className="text-gray-300 text-xs">{item.description}</p>
                    </motion.div>
                    <motion.div
                      className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500/50 rounded-2xl transition-colors duration-300"
                    />
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/gallery"
                    className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
                  >
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <span className="relative z-10 flex items-center gap-3">
                      View All Paintings 
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <FiArrowRight />
                      </motion.span>
                    </span>
                  </Link>
                </motion.div>
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
                subheading="Discover our handpicked selection of exceptional paintings from talented Indian artists"
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
