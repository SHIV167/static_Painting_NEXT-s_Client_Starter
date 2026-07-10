'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { artistInfo } from '@/lib/data';
import { FiAward, FiBook, FiHeart } from 'react-icons/fi';

export default function About() {
  const heroBanner = 'https://res.cloudinary.com/dj15ypnx8/image/upload/v1783710797/art-gallery/logo-transparent.png';

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
              About the Artist
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 font-body">
              Discover the story behind the art
            </p>
          </div>
        </motion.div>
      </section>

      {/* Artist Profile */}
      <section className="py-24 px-4 bg-white dark:bg-black relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-20 right-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-gray-900 dark:text-white mb-8"
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                {artistInfo.name}
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed font-body"
              >
                {artistInfo.bio}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="space-y-8"
              >
                <motion.div
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-semibold font-display text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 flex items-center justify-center"
                    >
                      <FiBook className="text-purple-600 dark:text-purple-400" />
                    </motion.div>
                    Education
                  </h3>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-400 font-body ml-13">
                    {artistInfo.education.map((edu, index) => (
                      <motion.li 
                        key={index} 
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        <motion.span 
                          className="w-2 h-2 rounded-full bg-purple-600 mt-2 flex-shrink-0"
                          whileHover={{ scale: 1.5 }}
                        />
                        {edu}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-semibold font-display text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 flex items-center justify-center"
                    >
                      <FiAward className="text-purple-600 dark:text-purple-400" />
                    </motion.div>
                    Achievements
                  </h3>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-400 font-body ml-13">
                    {artistInfo.achievements.map((achievement, index) => (
                      <motion.li 
                        key={index} 
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                      >
                        <motion.span 
                          className="w-2 h-2 rounded-full bg-purple-600 mt-2 flex-shrink-0"
                          whileHover={{ scale: 1.5 }}
                        />
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="relative h-[550px] rounded-3xl overflow-hidden shadow-2xl"
              >
                <Image
                  src={artistInfo.image}
                  alt={artistInfo.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                  className="object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="absolute -bottom-8 -right-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-3xl shadow-2xl"
              >
                <motion.p 
                  className="text-5xl font-bold"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  15+
                </motion.p>
                <p className="text-sm font-medium mt-1">Years Experience</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-4 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        
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
              Artistic Philosophy
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-body"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              The vision and principles that guide every creation
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FiHeart className="text-5xl" />,
                title: 'Passion',
                description: 'Every brushstroke is infused with deep passion and emotion, creating art that speaks to the soul.'
              },
              {
                icon: <FiBook className="text-5xl" />,
                title: 'Tradition',
                description: 'Honoring traditional Indian art forms while embracing contemporary techniques and expressions.'
              },
              {
                icon: <FiAward className="text-5xl" />,
                title: 'Excellence',
                description: 'Committed to the highest standards of craftsmanship and artistic excellence in every piece.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-xl text-center relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <motion.div
                  className="relative z-10 text-purple-600 mb-6 flex justify-center"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl md:text-2xl font-bold font-heading text-gray-900 dark:text-white mb-4 relative z-10">
                  {item.title}
                </h3>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 font-body leading-relaxed relative z-10">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statement Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 relative overflow-hidden">
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'linear-gradient(to bottom right, #581c87, #be185d, #c2410c)',
              'linear-gradient(to bottom right, #be185d, #c2410c, #581c87)',
              'linear-gradient(to bottom right, #c2410c, #581c87, #be185d)',
              'linear-gradient(to bottom right, #581c87, #be185d, #c2410c)',
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
        
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 rounded-full bg-white/10 blur-xl"
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-white/10 blur-xl"
          animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold font-heading text-white mb-12"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Artist Statement
            </motion.h2>
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <motion.div
                className="absolute -top-8 -left-8 text-8xl text-white/20 font-serif"
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                &ldquo;
              </motion.div>
              <blockquote className="text-xl md:text-3xl text-white/95 italic leading-relaxed font-body relative z-10 px-8">
                All that surrounds you is ART..just keep a keen eye and an open heart. Through my multidisciplinary approach, I create pieces that transform spaces and connect with viewers on a deeply personal level.
              </blockquote>
              <motion.div
                className="absolute -bottom-8 -right-8 text-8xl text-white/20 font-serif rotate-180"
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              >
                &rdquo;
              </motion.div>
            </motion.div>
            <motion.p 
              className="text-white mt-12 font-semibold font-display text-lg md:text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              — {artistInfo.name}
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
