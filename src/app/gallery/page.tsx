'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export default function Gallery() {
  const heroBanner = 'https://res.cloudinary.com/dj15ypnx8/image/upload/v1784040335/Shades_and_strokes_logo_g1wpxz.png';
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

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

  const handlePrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + categoryItems.length) % categoryItems.length);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % categoryItems.length);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (selectedImage === null) return;
    if (e.key === 'ArrowLeft') handlePrevious();
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'Escape') setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section with Banner */}
      <section className="relative w-full h-96 md:h-[500px]">
        <Image
          src={heroBanner}
          alt="Heena Chowdhary Art"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 flex items-center justify-center h-full"
        >
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-4 leading-tight">
              Heena Chowdhary
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 font-body">
              Explore our curated collection of contemporary Indian art
            </p>
          </div>
        </motion.div>
      </section>

      {/* Featured Works */}
      <section className="py-24 px-4 bg-white dark:bg-black relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-gray-900 dark:text-white mb-6"
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Featured Works
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-body"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Discover our handpicked selection of exceptional paintings from talented Indian artists
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative aspect-square overflow-hidden rounded-3xl shadow-2xl group cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={item.image}
                    alt={`Featured Art ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                    className="object-cover"
                  />
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ y: 20 }}
                  whileHover={{ y: 0 }}
                >
                  <motion.p 
                    className="text-white font-semibold text-lg font-display mb-2"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {item.title}
                  </motion.p>
                  <motion.p 
                    className="text-gray-300 text-sm"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    {item.description}
                  </motion.p>
                </motion.div>
                <motion.div
                  className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500/50 rounded-3xl transition-colors duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            onClick={() => setSelectedImage(null)}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-5xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
                aria-label="Close lightbox"
              >
                <FiX size={32} />
              </button>

              <button
                onClick={handlePrevious}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-white hover:text-gray-300 transition-colors z-10 hidden md:block"
                aria-label="Previous image"
              >
                <FiChevronLeft size={40} />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-white hover:text-gray-300 transition-colors z-10 hidden md:block"
                aria-label="Next image"
              >
                <FiChevronRight size={40} />
              </button>

              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={categoryItems[selectedImage].image}
                  alt={categoryItems[selectedImage].title}
                  width={1200}
                  height={1200}
                  className="max-w-full max-h-[85vh] object-contain rounded-lg"
                  priority
                />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white text-xl font-semibold mb-1">{categoryItems[selectedImage].title}</h3>
                <p className="text-gray-300 text-sm">{categoryItems[selectedImage].description}</p>
              </div>

              {/* Mobile navigation buttons */}
              <div className="absolute bottom-20 left-0 right-0 flex justify-between px-4 md:hidden">
                <button
                  onClick={handlePrevious}
                  className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
                  aria-label="Previous image"
                >
                  <FiChevronLeft size={24} />
                </button>
                <button
                  onClick={handleNext}
                  className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
                  aria-label="Next image"
                >
                  <FiChevronRight size={24} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
