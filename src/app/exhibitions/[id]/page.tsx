'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiCalendar, FiMapPin, FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function ExhibitionDetail() {
  const params = useParams();
  const id = params.id as string;

  // Mock exhibition data - in a real app, this would come from an API
  const exhibition = {
    id: parseInt(id),
    title: `Exhibition ${id}`,
    date: '2024-12-15',
    venue: 'Art Gallery, New Delhi',
    description: 'A stunning showcase of contemporary art featuring works from talented artists.',
    image: 'https://res.cloudinary.com/dj15ypnx8/image/upload/v1783708461/673122680_17962021311073055_1029815282776648670_n_sa6fm3.webp'
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh]">
        <Image
          src={exhibition.image}
          alt={exhibition.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        {/* Back Button - Positioned over banner */}
        <div className="absolute top-8 left-4 md:left-8 z-10">
          <Link href="/exhibitions">
            <motion.button
              whileHover={{ x: -5 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-gray-900 dark:text-white"
            >
              <FiArrowLeft />
              Back to Exhibitions
            </motion.button>
          </Link>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-16">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-medium mb-4">
              Featured Exhibition
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {exhibition.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Quick Info */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            <div className="flex items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                <FiCalendar className="text-white text-2xl" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Date</p>
                <p className="font-semibold text-gray-900 dark:text-white text-lg">{exhibition.date}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                <FiMapPin className="text-white text-2xl" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Venue</p>
                <p className="font-semibold text-gray-900 dark:text-white text-lg">{exhibition.venue}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                <FiArrowRight className="text-white text-2xl" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Status</p>
                <p className="font-semibold text-green-600 dark:text-green-400 text-lg">Upcoming</p>
              </div>
            </div>
          </motion.div>

          {/* About Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 md:p-12 mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              About the Exhibition
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg mb-4">
              {exhibition.description}
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
              This exhibition brings together a curated selection of contemporary artworks that explore themes of identity, culture, and modern expression. Visitors will experience a diverse range of mediums including paintings, sculptures, and digital installations from both established and emerging artists.
            </p>
          </motion.div>

          {/* Additional Details */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          >
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Opening Hours</h3>
              <div className="space-y-2 text-gray-600 dark:text-gray-400">
                <p>Monday - Friday: 10:00 AM - 6:00 PM</p>
                <p>Saturday - Sunday: 11:00 AM - 8:00 PM</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Admission</h3>
              <div className="space-y-2 text-gray-600 dark:text-gray-400">
                <p>General: Free</p>
                <p>Guided Tours: Available upon request</p>
              </div>
            </div>
          </motion.div>

          {/* Featured Artworks */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
              Featured Artworks
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ y: -10 }}
                  className="relative aspect-square rounded-2xl overflow-hidden shadow-xl"
                >
                  <Image
                    src={exhibition.image}
                    alt={`Artwork ${item}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Visit?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Register now to secure your spot at this exclusive exhibition and receive updates about upcoming events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg">
                Register for Event
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                Add to Calendar
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
