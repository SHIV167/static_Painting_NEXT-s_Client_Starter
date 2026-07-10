'use client';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import Image from 'next/image';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

interface Slide {
  desktopImage: string;
  mobileImage: string;
  alt: string;
}

interface HeroSliderProps {
  slides: Slide[];
  autoplay?: boolean;
  autoplayDelay?: number;
}

export default function HeroSlider({ slides, autoplay = true, autoplayDelay = 5000 }: HeroSliderProps) {
  const [mounted, setMounted] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="relative h-screen w-full bg-gray-900">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-800 to-orange-700 opacity-90"
          animate={{
            background: [
              'linear-gradient(to bottom right, #581c87, #be185d, #c2410c)',
              'linear-gradient(to bottom right, #be185d, #c2410c, #581c87)',
              'linear-gradient(to bottom right, #c2410c, #581c87, #be185d)',
              'linear-gradient(to bottom right, #581c87, #be185d, #c2410c)',
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="text-center">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
            >
              <div className="w-16 h-16 rounded-full bg-white/30 animate-pulse" />
            </motion.div>
            <motion.p 
              className="text-white text-xl font-light tracking-widest"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              LOADING...
            </motion.p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        navigation={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={autoplay ? {
          delay: autoplayDelay,
          disableOnInteraction: false,
        } : false}
        loop={true}
        className="w-full"
        speed={1000}
        onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative w-full">
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              className="relative w-full"
            >
              {/* Desktop Image */}
              <div className="hidden md:block relative w-full">
                <Image
                  src={slide.desktopImage}
                  alt={slide.alt}
                  width={0}
                  height={0}
                  sizes="100vw"
                  priority={index === 0}
                  className="w-full h-auto"
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>

              {/* Mobile Image */}
              <div className="block md:hidden relative w-full">
                <Image
                  src={slide.mobileImage}
                  alt={slide.alt}
                  width={0}
                  height={0}
                  sizes="100vw"
                  priority={index === 0}
                  className="w-full h-auto"
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </motion.div>
            
            {/* Slide Overlay with Gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Progress Bar */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-1 bg-white/20"
        initial={{ width: 0 }}
        animate={{ width: `${((activeSlide + 1) / slides.length) * 100}%` }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
          animate={{ 
            background: [
              'linear-gradient(to right, #a855f7, #ec4899)',
              'linear-gradient(to right, #ec4899, #f97316)',
              'linear-gradient(to right, #f97316, #a855f7)',
              'linear-gradient(to right, #a855f7, #ec4899)',
            ]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </motion.div>

      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          width: 60px;
          height: 60px;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 50%;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(10px);
        }
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 24px;
          color: #1a1a1a;
          font-weight: bold;
        }
        :is(.swiper-button-prev, .swiper-button-next) ::slotted(svg),
        :is(.swiper-button-prev, .swiper-button-next) svg {
          object-fit: contain;
          transform-origin: center;
          fill: currentColor;
          pointer-events: none;
          width: 45%;
          height: 45%;
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: white;
          transform: scale(1.15) translateY(-2px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
        }
        .swiper-button-next:active,
        .swiper-button-prev:active {
          transform: scale(1.05);
        }
        .swiper-button-next {
          right: 30px;
        }
        .swiper-button-prev {
          left: 30px;
        }
        .swiper-pagination-bullet {
          width: 16px;
          height: 16px;
          background: rgba(255, 255, 255, 0.4);
          opacity: 1;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 2px solid rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(4px);
        }
        .swiper-pagination-bullet:hover {
          background: rgba(255, 255, 255, 0.7);
          transform: scale(1.2);
        }
        .swiper-pagination-bullet-active {
          background: white !important;
          width: 48px;
          border-radius: 8px;
          box-shadow: 0 4px 20px rgba(255, 255, 255, 0.5);
        }
        @media (max-width: 768px) {
          .swiper-button-next,
          .swiper-button-prev {
            width: 48px;
            height: 48px;
          }
          .swiper-button-next:after,
          .swiper-button-prev:after {
            font-size: 20px;
          }
          .swiper-button-next {
            right: 15px;
          }
          .swiper-button-prev {
            left: 15px;
          }
          .swiper-pagination-bullet {
            width: 12px;
            height: 12px;
          }
          .swiper-pagination-bullet-active {
            width: 36px;
          }
        }
      `}</style>
    </div>
  );
}
