'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiCalendar, FiMapPin, FiArrowRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useState } from 'react';

export default function Exhibitions() {
  const heroBanner = 'https://instagram.fdel1-8.fna.fbcdn.net/v/t51.82787-15/673122680_17962021311073055_1029815282776648670_n.jpg?stp=dst-jpg_e35_p1080x1080_tt6&_nc_cat=100&_nc_map=urlgen_bucketless&ig_cache_key=Mzg4MjA5ODU5ODc4MzAzNzg3OQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=V5IRkV0z_zMQ7kNvwEjR7Sv&_nc_oc=Adqdp5-6dSxGFDG9ZvU0ejj7kSGS4DUtQUMFaA0M0zZCSz_Qg2LLsLE6so35C6KX1P0aOJuPZ-T5ttxstMhv3P19&_nc_ad=z-m&_nc_cid=1174&_nc_zt=23&_nc_ht=instagram.fdel1-8.fna&_nc_gid=HvZqabhXxyReYwRW9fd9Kw&_nc_ss=7a22e&oh=00_AQCwdrVNzkfhSG-0gVfAdbMfJKe20W148EIA3HJgqgeG0A&oe=6A4F1A81';

  const galleryImages = [
    'https://instagram.fdel1-8.fna.fbcdn.net/v/t51.82787-15/673122680_17962021311073055_1029815282776648670_n.jpg?stp=dst-jpg_e35_p1080x1080_tt6&_nc_cat=100&_nc_map=urlgen_bucketless&ig_cache_key=Mzg4MjA5ODU5ODc4MzAzNzg3OQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=V5IRkV0z_zMQ7kNvwEjR7Sv&_nc_oc=Adqdp5-6dSxGFDG9ZvU0ejj7kSGS4DUtQUMFaA0M0zZCSz_Qg2LLsLE6so35C6KX1P0aOJuPZ-T5ttxstMhv3P19&_nc_ad=z-m&_nc_cid=1174&_nc_zt=23&_nc_ht=instagram.fdel1-8.fna&_nc_gid=HvZqabhXxyReYwRW9fd9Kw&_nc_ss=7a22e&oh=00_AQCwdrVNzkfhSG-0gVfAdbMfJKe20W148EIA3HJgqgeG0A&oe=6A4F1A81',
    'https://instagram.fdel1-5.fna.fbcdn.net/v/t51.82787-15/656737631_17958340059073055_4019896659995797975_n.jpg?stp=dst-jpg_e35_p640x640_sh2.08_tt6&_nc_cat=104&_nc_map=urlgen_bucketless&ig_cache_key=Mzg2MTM3MTgwMDMzMzAwMTkyNw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=Os4RrLP4s-EQ7kNvwFLV5-r&_nc_oc=AdqbbMo966eoYOL8RF9uwWg8qhkBR_WuA0J9Y5AvuJQau4mU8-eD5LlmHmPyT2uFjtdvTtXva3CAUjaEAO8HAT3s&_nc_ad=z-m&_nc_cid=1174&_nc_zt=23&_nc_ht=instagram.fdel1-5.fna&_nc_gid=nmvwAHvdweUsSz1wDRooQQ&_nc_ss=7a22e&oh=00_AQAJ7Nt_9NghTDT3b82Nkdyo5dx9gJxLSq24un5clSaqqg&oe=6A4F1317',
    'https://instagram.fdel1-4.fna.fbcdn.net/v/t51.82787-15/655724484_17957590452073055_9117653858669761948_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=110&_nc_map=urlgen_bucketless&ig_cache_key=Mzg1Nzc1NjY4MDY5MjM5NzE2Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=DopLmKGGxc4Q7kNvwF25Nod&_nc_oc=AdprfEa_D9goEw2P06J4cd64yAe83jpVtOvJUhRcUiItZqb3TWPE7QAuoS7CtI69odbLB_IyVHMHwjt9MmePVgu-&_nc_ad=z-m&_nc_cid=1174&_nc_zt=23&_nc_ht=instagram.fdel1-4.fna&_nc_gid=nmvwAHvdweUsSz1wDRooQQ&_nc_ss=7a22e&oh=00_AQCyy8rnM8YqkikFncHugX3pJbh9oqVXnyoe9C7XdTqRiQ&oe=6A4F344B',
    'https://instagram.fdel1-6.fna.fbcdn.net/v/t51.82787-15/525670560_17931745401073055_8114132161065609663_n.jpg?stp=dst-jpg_e35_p640x640_sh2.08_tt6&_nc_cat=104&_nc_map=urlgen_bucketless&ig_cache_key=MzY5MDI4MTM5NjU2OTkyOTUzMg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=kRZov5byENwQ7kNvwHnjlhi&_nc_oc=AdrnwzYsSSXFB1K7GxIHmyfVno6Ffh5moviBD3eHMw7zQqg2elo1QffuH8d34jZKUrb44f9h7yLdYjhZ8yXCzLiY&_nc_ad=z-m&_nc_cid=1174&_nc_zt=23&_nc_ht=instagram.fdel1-6.fna&_nc_gid=grXw9gkF9RZosQFGSxlJlQ&_nc_ss=7a22e&oh=00_AQBQnQPDk_QNJn_wZUU2USJdYfP0DgKKRRlGYDEoXK0EiQ&oe=6A4F1600',
    'https://instagram.fdel1-8.fna.fbcdn.net/v/t51.82787-15/526596415_17931743298073055_6455642989614753907_n.jpg?stp=dst-jpg_e35_p640x640_sh2.08_tt6&_nc_cat=101&_nc_map=urlgen_bucketless&ig_cache_key=MzY5MDI3NDY1NDExNzM5NTI3NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=sODMf3XNdwgQ7kNvwFtbkJb&_nc_oc=Adq0yAj4FFQWyL8Qpq-lou6HsjAZcJJJXeSbvDviSV82z3dQpt4VE82Ls1jkA473gdvgG8EvcD2N0sVj85ItUWza&_nc_ad=z-m&_nc_cid=1174&_nc_zt=23&_nc_ht=instagram.fdel1-8.fna&_nc_gid=grXw9gkF9RZosQFGSxlJlQ&_nc_ss=7a22e&oh=00_AQAr3x3KmfHYYp1uI-ojiU5uy9OzISXjBa1XPW2yXzS3yw&oe=6A4F2ED6',
    'https://instagram.fdel1-4.fna.fbcdn.net/v/t51.75761-15/496482346_17922039069073055_1015974517690005411_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=106&_nc_map=urlgen_bucketless&ig_cache_key=MzYyODY1NTUyNjUyNTI1ODc2Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=Gjg5x1LgC1IQ7kNvwGXEaG5&_nc_oc=Adokl3DiRuXo349xZgdozhOk9UrOk54SNjwceQrjPxLrGVfWUWEJ0buPvASa8hki-Y1WhjG1Ab1quBrO12tvKTlB&_nc_ad=z-m&_nc_cid=1174&_nc_zt=23&_nc_ht=instagram.fdel1-4.fna&_nc_gid=TmznI00ciemuDviuaDZXBw&_nc_ss=7a22e&oh=00_AQCEmsPCAaRWAWxhRmABK-LiivAcZAVAGpZfWRwnRJsajg&oe=6A4F18C9'
  ];

  // Generate 105 exhibition cards
  const exhibitions = Array.from({ length: 105 }, (_, i) => ({
    id: i + 1,
    title: `Exhibition ${i + 1}`,
    date: `2024-${String((i % 12) + 1).padStart(2, '0')}-${String((i % 28) + 1).padStart(2, '0')}`,
    venue: 'Art Gallery, New Delhi',
    description: 'A stunning showcase of contemporary art featuring works from talented artists.',
    image: galleryImages[i % galleryImages.length]
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(exhibitions.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentExhibitions = exhibitions.slice(indexOfFirstItem, indexOfLastItem);

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
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 flex items-center justify-center h-full"
        >
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Exhibitions
            </h1>
            <p className="text-xl text-gray-200">
              Explore our past and upcoming art exhibitions
            </p>
          </div>
        </motion.div>
      </section>

      {/* Exhibitions List */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Exhibitions
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
              Discover the art shows and exhibitions where our work has been featured
            </p>
          </motion.div>

          <div className="space-y-12">
            {currentExhibitions.map((exhibition, index) => (
              <motion.div
                key={exhibition.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.6 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto">
                    <Image
                      src={exhibition.image}
                      alt={exhibition.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 mb-4">
                      <FiCalendar />
                      <span className="font-semibold">{exhibition.date}</span>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      {exhibition.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-6">
                      <FiMapPin />
                      <span>{exhibition.venue}</span>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {exhibition.description}
                    </p>
                    
                    <button className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 font-semibold hover:text-purple-700 dark:hover:text-purple-300 transition-colors">
                      Learn More <FiArrowRight />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-12">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="w-10 h-10 rounded-lg flex items-center justify-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <FiChevronLeft />
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-lg flex items-center justify-center font-medium transition-colors ${
                  currentPage === page
                    ? 'bg-purple-600 text-white'
                    : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {page}
              </button>
            ))}
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="w-10 h-10 rounded-lg flex items-center justify-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <FiChevronRight />
            </button>
          </div>
        </div>
      </section>

      {/* Upcoming Exhibition CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900 to-pink-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Interested in Future Exhibitions?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Stay updated with our upcoming exhibitions and art shows by subscribing to our newsletter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 rounded-full text-gray-900 w-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
              <button className="px-8 py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Exhibition Services */}
      <section className="py-20 px-4 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Exhibition Services
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We offer comprehensive exhibition services for galleries and art institutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Solo Exhibitions',
                description: 'Complete solo exhibition planning and curation for individual artists.'
              },
              {
                title: 'Group Shows',
                description: 'Curated group exhibitions featuring multiple artists around specific themes.'
              },
              {
                title: 'Art Consulting',
                description: 'Professional art consulting for galleries, museums, and private collectors.'
              },
              {
                title: 'Installation Services',
                description: 'Professional art installation and exhibition setup services.'
              },
              {
                title: 'Event Management',
                description: 'Full event management for exhibition openings and art events.'
              },
              {
                title: 'Digital Exhibitions',
                description: 'Virtual and hybrid exhibition solutions for global reach.'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
