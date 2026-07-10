'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Gallery() {
  const heroBanner = 'https://res.cloudinary.com/dj15ypnx8/image/upload/v1783710797/art-gallery/logo-transparent.png';

  const categoryItems = [
    {
      image: 'https://instagram.fdel1-8.fna.fbcdn.net/v/t51.82787-15/673122680_17962021311073055_1029815282776648670_n.jpg?stp=dst-jpg_e35_p1080x1080_tt6&_nc_cat=100&_nc_map=urlgen_bucketless&ig_cache_key=Mzg4MjA5ODU5ODc4MzAzNzg3OQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=V5IRkV0z_zMQ7kNvwEjR7Sv&_nc_oc=Adqdp5-6dSxGFDG9ZvU0ejj7kSGS4DUtQUMFaA0M0zZCSz_Qg2LLsLE6so35C6KX1P0aOJuPZ-T5ttxstMhv3P19&_nc_ad=z-m&_nc_cid=1174&_nc_zt=23&_nc_ht=instagram.fdel1-8.fna&_nc_gid=HvZqabhXxyReYwRW9fd9Kw&_nc_ss=7a22e&oh=00_AQCwdrVNzkfhSG-0gVfAdbMfJKe20W148EIA3HJgqgeG0A&oe=6A4F1A81',
    },
    {
      image: 'https://instagram.fdel1-5.fna.fbcdn.net/v/t51.82787-15/656737631_17958340059073055_4019896659995797975_n.jpg?stp=dst-jpg_e35_p640x640_sh2.08_tt6&_nc_cat=104&_nc_map=urlgen_bucketless&ig_cache_key=Mzg2MTM3MTgwMDMzMzAwMTkyNw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=Os4RrLP4s-EQ7kNvwFLV5-r&_nc_oc=AdqbbMo966eoYOL8RF9uwWg8qhkBR_WuA0J9Y5AvuJQau4mU8-eD5LlmHmPyT2uFjtdvTtXva3CAUjaEAO8HAT3s&_nc_ad=z-m&_nc_cid=1174&_nc_zt=23&_nc_ht=instagram.fdel1-5.fna&_nc_gid=nmvwAHvdweUsSz1wDRooQQ&_nc_ss=7a22e&oh=00_AQAJ7Nt_9NghTDT3b82Nkdyo5dx9gJxLSq24un5clSaqqg&oe=6A4F1317',
    },
    {
      image: 'https://instagram.fdel1-4.fna.fbcdn.net/v/t51.82787-15/655724484_17957590452073055_9117653858669761948_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=110&_nc_map=urlgen_bucketless&ig_cache_key=Mzg1Nzc1NjY4MDY5MjM5NzE2Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=DopLmKGGxc4Q7kNvwF25Nod&_nc_oc=AdprfEa_D9goEw2P06J4cd64yAe83jpVtOvJUhRcUiItZqb3TWPE7QAuoS7CtI69odbLB_IyVHMHwjt9MmePVgu-&_nc_ad=z-m&_nc_cid=1174&_nc_zt=23&_nc_ht=instagram.fdel1-4.fna&_nc_gid=nmvwAHvdweUsSz1wDRooQQ&_nc_ss=7a22e&oh=00_AQCyy8rnM8YqkikFncHugX3pJbh9oqVXnyoe9C7XdTqRiQ&oe=6A4F344B',
    },
    {
      image: 'https://instagram.fdel1-6.fna.fbcdn.net/v/t51.82787-15/525670560_17931745401073055_8114132161065609663_n.jpg?stp=dst-jpg_e35_p640x640_sh2.08_tt6&_nc_cat=104&_nc_map=urlgen_bucketless&ig_cache_key=MzY5MDI4MTM5NjU2OTkyOTUzMg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=kRZov5byENwQ7kNvwHnjlhi&_nc_oc=AdrnwzYsSSXFB1K7GxIHmyfVno6Ffh5moviBD3eHMw7zQqg2elo1QffuH8d34jZKUrb44f9h7yLdYjhZ8yXCzLiY&_nc_ad=z-m&_nc_cid=1174&_nc_zt=23&_nc_ht=instagram.fdel1-6.fna&_nc_gid=grXw9gkF9RZosQFGSxlJlQ&_nc_ss=7a22e&oh=00_AQBQnQPDk_QNJn_wZUU2USJdYfP0DgKKRRlGYDEoXK0EiQ&oe=6A4F1600',
    },
    {
      image: 'https://instagram.fdel1-8.fna.fbcdn.net/v/t51.82787-15/526596415_17931743298073055_6455642989614753907_n.jpg?stp=dst-jpg_e35_p640x640_sh2.08_tt6&_nc_cat=101&_nc_map=urlgen_bucketless&ig_cache_key=MzY5MDI3NDY1NDExNzM5NTI3NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=sODMf3XNdwgQ7kNvwFtbkJb&_nc_oc=Adq0yAj4FFQWyL8Qpq-lou6HsjAZcJJJXeSbvDviSV82z3dQpt4VE82Ls1jkA473gdvgG8EvcD2N0sVj85ItUWza&_nc_ad=z-m&_nc_cid=1174&_nc_zt=23&_nc_ht=instagram.fdel1-8.fna&_nc_gid=grXw9gkF9RZosQFGSxlJlQ&_nc_ss=7a22e&oh=00_AQAr3x3KmfHYYp1uI-ojiU5uy9OzISXjBa1XPW2yXzS3yw&oe=6A4F2ED6',
    },
    {
      image: 'https://instagram.fdel1-4.fna.fbcdn.net/v/t51.75761-15/496482346_17922039069073055_1015974517690005411_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=106&_nc_map=urlgen_bucketless&ig_cache_key=MzYyODY1NTUyNjUyNTI1ODc2Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=Gjg5x1LgC1IQ7kNvwGXEaG5&_nc_oc=Adokl3DiRuXo349xZgdozhOk9UrOk54SNjwceQrjPxLrGVfWUWEJ0buPvASa8hki-Y1WhjG1Ab1quBrO12tvKTlB&_nc_ad=z-m&_nc_cid=1174&_nc_zt=23&_nc_ht=instagram.fdel1-4.fna&_nc_gid=TmznI00ciemuDviuaDZXBw&_nc_ss=7a22e&oh=00_AQCEmsPCAaRWAWxhRmABK-LiivAcZAVAGpZfWRwnRJsajg&oe=6A4F18C9',
    }
  ];

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
      <section className="py-16 px-4 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 dark:text-white mb-4">
              Featured Works
            </h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-body">
              Discover our handpicked selection of exceptional paintings from talented Indian artists
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categoryItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative aspect-square overflow-hidden rounded-2xl shadow-lg"
              >
                <Image
                  src={item.image}
                  alt={`Featured Art ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
