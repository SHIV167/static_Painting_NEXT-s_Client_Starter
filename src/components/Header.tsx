'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiImage, FiUser, FiCalendar, FiMail } from 'react-icons/fi';
import { theme } from '@/lib/theme';
import { HeaderSkeleton } from '@/components/Skeleton';

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const navItems = [
    { name: 'Gallery', href: '/gallery', icon: FiImage },
    { name: 'About', href: '/about', icon: FiUser },
    { name: 'Exhibitions', href: '/exhibitions', icon: FiCalendar },
    { name: 'Contact', href: '/contact', icon: FiMail },
  ];

  if (isLoading) {
    return <HeaderSkeleton />;
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-black/95 backdrop-blur-2xl border-b border-gray-200/30 dark:border-gray-800/30 shadow-2xl"
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="relative w-12 h-12">
                  <img
                    src="https://res.cloudinary.com/dj15ypnx8/image/upload/v1783710797/art-gallery/logo-transparent.png"
                    alt="Heena Chowdhary Logo"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <span 
                className="text-xl sm:text-2xl font-bold font-display text-gray-900 dark:text-white hidden sm:block"
              >
                Heena Chowdhary
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-5 py-2.5 transition-all duration-300 rounded-xl font-medium font-display group overflow-hidden ${
                    pathname === item.href ? 'text-white' : ''
                  }`}
                  style={{
                    color: pathname === item.href ? 'white' : theme.neutral[600],
                    backgroundColor: pathname === item.href ? `linear-gradient(135deg, ${theme.primary[600]}, ${theme.secondary[600]})` : 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    if (pathname !== item.href) {
                      e.currentTarget.style.color = theme.primary[600];
                      e.currentTarget.style.backgroundColor = `${theme.primary[50]}40`;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (pathname !== item.href) {
                      e.currentTarget.style.color = theme.neutral[600];
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  <span className="relative z-10">{item.name}</span>
                  {pathname === item.href && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0"
                      style={{ background: `linear-gradient(135deg, ${theme.primary[600]}, ${theme.secondary[600]})` }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                    style={{ transformOrigin: 'left' }}
                  />
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-3 rounded-2xl text-white shadow-xl hover:shadow-2xl transition-all duration-300"
              style={{
                background: `linear-gradient(135deg, ${theme.primary[600]}, ${theme.secondary[600]})`
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMenuOpen ? 'close' : 'menu'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Side Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 md:hidden"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-full w-80 bg-white dark:bg-gray-900 z-50 md:hidden shadow-2xl overflow-y-auto"
            >
              <div className="p-6 min-h-screen flex flex-col">
                <div className="flex items-center justify-between mb-8">
                  <Link href="/" className="flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
                    <div className="relative w-10 h-10">
                      <img
                        src="https://res.cloudinary.com/dj15ypnx8/image/upload/v1783710797/art-gallery/logo-transparent.png"
                        alt="Heena Chowdhary Logo"
                        width={40}
                        height={40}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <span 
                      className="text-xl font-bold font-display text-gray-900 dark:text-white"
                    >
                      Heena Chowdhary
                    </span>
                  </Link>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <FiX size={24} className="text-gray-900 dark:text-white" />
                  </button>
                </div>

                <nav className="space-y-3 flex-1">
                  {navItems.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className={`flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 group relative overflow-hidden ${
                            pathname === item.href ? 'text-white' : ''
                          }`}
                          style={{
                            color: pathname === item.href ? 'white' : theme.neutral[600],
                            background: pathname === item.href ? `linear-gradient(135deg, ${theme.primary[600]}, ${theme.secondary[600]})` : 'transparent'
                          }}
                          onMouseEnter={(e) => {
                            if (pathname !== item.href) {
                              e.currentTarget.style.background = `linear-gradient(135deg, ${theme.primary[50]}, ${theme.secondary[50]})`;
                              e.currentTarget.style.color = theme.primary[600];
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (pathname !== item.href) {
                              e.currentTarget.style.background = 'transparent';
                              e.currentTarget.style.color = theme.neutral[600];
                            }
                          }}
                        >
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Icon size={22} className={pathname === item.href ? 'text-white' : ''} />
                          </motion.div>
                          <span className="font-medium font-display">{item.name}</span>
                          {pathname === item.href && (
                            <motion.div
                              className="absolute right-4"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ type: 'spring', stiffness: 200 }}
                            >
                              <div className="w-2 h-2 rounded-full bg-white" />
                            </motion.div>
                          )}
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-6"
                >
                  <div 
                    className="p-5 rounded-3xl text-white relative overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${theme.primary[600]}, ${theme.secondary[600]})`
                    }}
                  >
                    <motion.div
                      className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-white/10"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    <motion.div
                      className="absolute -bottom-10 -left-10 w-24 h-24 rounded-full bg-white/10"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                    />
                    <div className="relative z-10">
                      <p className="text-sm font-semibold mb-2">✨ Discover Art</p>
                      <p className="text-xs opacity-90 leading-relaxed">Explore our curated collection of contemporary Indian art</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
