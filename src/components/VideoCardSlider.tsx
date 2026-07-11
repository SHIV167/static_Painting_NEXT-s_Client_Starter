'use client';

import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { FiPlay, FiHeart, FiMessageCircle, FiSend, FiVolume2, FiVolumeX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Image from 'next/image';

interface VideoCard {
  id: string;
  thumbnail: string;
  videoUrl: string;
  title: string;
  artist: string;
  location: string;
  likes?: number;
  comments?: number;
}

interface VideoCardSliderProps {
  videos: VideoCard[];
  heading?: string;
  subheading?: string;
}

export default function VideoCardSlider({ videos, heading, subheading }: VideoCardSliderProps) {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const [mutedVideos, setMutedVideos] = useState<Set<string>>(new Set());
  const containerRef = useRef<HTMLDivElement>(null);

  const handleCardClick = (videoId: string) => {
    if (playingVideo === videoId) {
      setPlayingVideo(null);
    } else {
      setPlayingVideo(videoId);
    }
  };

  const toggleMute = (e: React.MouseEvent, videoId: string) => {
    e.stopPropagation();
    const newMuted = new Set(mutedVideos);
    if (newMuted.has(videoId)) {
      newMuted.delete(videoId);
    } else {
      newMuted.add(videoId);
    }
    setMutedVideos(newMuted);
  };

  const scroll = (direction: 'left' | 'right') => {
    const container = containerRef.current;
    if (container) {
      const scrollAmount = 320;
      if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="relative w-full">
      {/* Heading Section */}
      {(heading || subheading) && (
        <div className="mb-6 text-center">
          {heading && (
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
              {heading}
            </motion.h2>
          )}
          {subheading && (
            <motion.p 
              className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-body"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {subheading}
            </motion.p>
          )}
        </div>
      )}

      {/* Navigation Buttons - Positioned at corners */}
      <div className="relative px-12 md:px-0">
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700 hidden md:flex"
        >
          <FiChevronLeft className="text-gray-900 dark:text-white text-xl" />
        </button>

        <div
          ref={containerRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide"
        >
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex-shrink-0 w-full md:w-80 snap-start px-2 md:px-0"
            >
              <div
                className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900 cursor-pointer group"
                onClick={() => handleCardClick(video.id)}
              >
                <div className="aspect-[9/16] relative bg-gray-900">
                  {playingVideo === video.id ? (
                    <video
                      src={video.videoUrl}
                      autoPlay
                      muted={mutedVideos.has(video.id)}
                      loop
                      playsInline
                      className="w-full h-full object-contain"
                      onClick={(e) => e.stopPropagation()}
                    />
                  ) : (
                    <>
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        fill
                        sizes="(max-width: 768px) 288px, 320px"
                        loading="lazy"
                        className="object-contain"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </>
                  )}
                  
                  {/* Instagram-style UI overlay */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-0.5">
                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                          <span className="text-purple-600 font-bold text-xs">HC</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-white font-semibold text-xs">{video.artist}</p>
                        <p className="text-gray-300 text-[10px]">{video.location}</p>
                      </div>
                    </div>
                  </div>

                  {/* Play button (only show when not playing) */}
                  {playingVideo !== video.id && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                        <FiPlay className="text-gray-900 text-2xl ml-1" />
                      </div>
                    </div>
                  )}

                  {/* Mute button (only show when playing) */}
                  {playingVideo === video.id && (
                    <button
                      onClick={(e) => toggleMute(e, video.id)}
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                    >
                      {mutedVideos.has(video.id) ? (
                        <FiVolumeX className="text-lg" />
                      ) : (
                        <FiVolume2 className="text-lg" />
                      )}
                    </button>
                  )}

                  {/* Bottom actions */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <div className="flex items-center gap-3">
                      <button className="text-white hover:text-red-500 transition-colors pointer-events-auto">
                        <FiHeart className="text-lg" />
                      </button>
                      <button className="text-white hover:text-blue-500 transition-colors pointer-events-auto">
                        <FiMessageCircle className="text-lg" />
                      </button>
                      <button className="text-white hover:text-yellow-500 transition-colors pointer-events-auto">
                        <FiSend className="text-lg" />
                      </button>
                    </div>
                  </div>

                  {/* Title overlay */}
                  <div className="absolute bottom-12 left-3 right-3 pointer-events-none">
                    <p className="text-white text-sm font-medium line-clamp-2">{video.title}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700 hidden md:flex"
        >
          <FiChevronRight className="text-gray-900 dark:text-white text-xl" />
        </button>
      </div>
    </div>
  );
}
