'use client';

import { FiInstagram, FiTwitter, FiMail, FiMapPin, FiFacebook, FiLinkedin, FiYoutube } from 'react-icons/fi';
import Link from 'next/link';
import { theme } from '@/lib/theme';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="relative w-14 h-14"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 animate-pulse" style={{ animationDuration: '3s' }} />
                <div className="absolute inset-1 rounded-full bg-white dark:bg-gray-900 overflow-hidden">
                  <img
                    src="https://res.cloudinary.com/dj15ypnx8/image/upload/v1784040335/Shades_and_strokes_logo_g1wpxz.png"
                    alt="Heena Chowdhary Logo"
                    width={56}
                    height={56}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </motion.div>
              <motion.span 
                className="text-2xl sm:text-3xl font-bold font-display bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${theme.primary[600]} 0%, ${theme.secondary[600]} 50%, ${theme.primary[600]} 100%)`,
                  backgroundSize: '200% auto',
                  animation: 'gradient 3s linear infinite'
                }}
              >
                Heena Chowdhary
              </motion.span>
            </div>
            <motion.p 
              className="mb-8 leading-relaxed text-gray-600 dark:text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Showcasing contemporary art and connecting artists with art lovers worldwide through creativity and passion.
            </motion.p>
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {[
                { icon: FiFacebook, name: 'Facebook', href: '#' },
                { icon: FiInstagram, name: 'Instagram', href: '#' },
                { icon: FiTwitter, name: 'Twitter', href: '#' },
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white"
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h4 className="text-lg sm:text-xl font-semibold font-display mb-8 text-gray-900 dark:text-white">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', href: '/' },
                { name: 'Gallery', href: '/gallery' },
                { name: 'About', href: '/about' },
                { name: 'Exhibitions', href: '/exhibitions' },
                { name: 'Contact', href: '/contact' },
              ].map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-3 group transition-all duration-300 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400"
                  >
                    <motion.span
                      className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600 group-hover:bg-purple-600 transition-colors"
                    />
                    <span className="group-hover:translate-x-2 transition-transform duration-300">{link.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h4 className="text-lg sm:text-xl font-semibold font-display mb-8 text-gray-900 dark:text-white">
              Contact Info
            </h4>
            <ul className="space-y-6">
              <motion.li 
                className="flex items-start gap-4 text-gray-600 dark:text-gray-400"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30"
                >
                  <FiMapPin className="text-purple-600 dark:text-purple-400" />
                </motion.div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white mb-1">Address</p>
                  <p className="text-sm leading-relaxed">Ghitorni, New Delhi, India</p>
                </div>
              </motion.li>
              <motion.li 
                className="flex items-start gap-4 text-gray-600 dark:text-gray-400"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30"
                >
                  <FiMail className="text-purple-600 dark:text-purple-400" />
                </motion.div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white mb-1">Email</p>
                  <p className="text-sm">info@artgallery.com</p>
                </div>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Social Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800"
        >
          <h4 className="text-lg sm:text-xl font-semibold font-display mb-8 text-center text-gray-900 dark:text-white">
            Follow Our Journey
          </h4>
          <div className="flex justify-center gap-4 flex-wrap">
            {[
              { icon: FiFacebook, name: 'Facebook', href: '#' },
              { icon: FiInstagram, name: 'Instagram', href: '#' },
              { icon: FiTwitter, name: 'Twitter', href: '#' },
              { icon: FiLinkedin, name: 'LinkedIn', href: '#' },
              { icon: FiYoutube, name: 'YouTube', href: '#' },
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.15, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white shadow-lg hover:shadow-xl"
                  aria-label={social.name}
                >
                  <Icon size={24} />
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              &copy; {new Date().getFullYear()} Heena Chowdhary. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
