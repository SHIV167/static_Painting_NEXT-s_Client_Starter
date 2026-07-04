'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { artistInfo } from '@/lib/data';
import { FiAward, FiBook, FiHeart } from 'react-icons/fi';

export default function About() {
  const heroBanner = 'https://instagram.fdel1-8.fna.fbcdn.net/v/t51.82787-15/673122680_17962021311073055_1029815282776648670_n.jpg?stp=dst-jpg_e35_p1080x1080_tt6&_nc_cat=100&_nc_map=urlgen_bucketless&ig_cache_key=Mzg4MjA5ODU5ODc4MzAzNzg3OQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=V5IRkV0z_zMQ7kNvwEjR7Sv&_nc_oc=Adqdp5-6dSxGFDG9ZvU0ejj7kSGS4DUtQUMFaA0M0zZCSz_Qg2LLsLE6so35C6KX1P0aOJuPZ-T5ttxstMhv3P19&_nc_ad=z-m&_nc_cid=1174&_nc_zt=23&_nc_ht=instagram.fdel1-8.fna&_nc_gid=HvZqabhXxyReYwRW9fd9Kw&_nc_ss=7a22e&oh=00_AQCwdrVNzkfhSG-0gVfAdbMfJKe20W148EIA3HJgqgeG0A&oe=6A4F1A81';

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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-4">
              About the Artist
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-200 font-body">
              Discover the story behind the art
            </p>
          </div>
        </motion.div>
      </section>

      {/* Artist Profile */}
      <section className="py-20 px-4 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={artistInfo.image}
                  alt={artistInfo.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                  className="object-cover"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute -bottom-6 -right-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-2xl shadow-xl"
              >
                <p className="text-4xl font-bold">15+</p>
                <p className="text-sm">Years Experience</p>
              </motion.div>
            </div>

            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold font-heading text-gray-900 dark:text-white mb-6"
              >
                {artistInfo.name}
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed font-body"
              >
                {artistInfo.bio}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl font-semibold font-display text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <FiBook className="text-purple-600" />
                    Education
                  </h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400 font-body">
                    {artistInfo.education.map((edu, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-purple-600 mt-1">•</span>
                        {edu}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold font-display text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <FiAward className="text-purple-600" />
                    Achievements
                  </h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400 font-body">
                    {artistInfo.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-purple-600 mt-1">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 dark:text-white mb-4">
              Artistic Philosophy
            </h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-body">
              The vision and principles that guide every creation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FiHeart className="text-4xl" />,
                title: 'Passion',
                description: 'Every brushstroke is infused with deep passion and emotion, creating art that speaks to the soul.'
              },
              {
                icon: <FiBook className="text-4xl" />,
                title: 'Tradition',
                description: 'Honoring traditional Indian art forms while embracing contemporary techniques and expressions.'
              },
              {
                icon: <FiAward className="text-4xl" />,
                title: 'Excellence',
                description: 'Committed to the highest standards of craftsmanship and artistic excellence in every piece.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center"
              >
                <div className="text-purple-600 mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold font-heading text-gray-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-body">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statement Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900 to-pink-800">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-8">
              Artist Statement
            </h2>
            <blockquote className="text-lg md:text-2xl text-gray-200 italic leading-relaxed font-body">
              &ldquo;All that surrounds you is ART..just keep a keen eye and an open heart. Through my multidisciplinary approach, I create pieces that transform spaces and connect with viewers on a deeply personal level.&rdquo;
            </blockquote>
            <p className="text-white mt-6 font-semibold font-display text-base md:text-lg">
              — {artistInfo.name}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
