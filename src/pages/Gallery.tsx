import React from 'react';
import { motion } from "motion/react";

const galleryImages = [
  { url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop", title: "Modern Villa Exterior" },
  { url: "https://images.unsplash.com/photo-1600607687940-477a63bd3998?q=80&w=2070&auto=format&fit=crop", title: "Luxury Living Room" },
  { url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop", title: "Architectural Detail" },
  { url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop", title: "Coastal Estate" },
  { url: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070&auto=format&fit=crop", title: "Premium Bathroom" },
  { url: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1984&auto=format&fit=crop", title: "Garden View" },
  { url: "https://images.unsplash.com/photo-1600585154526-990dcea4db0d?q=80&w=2070&auto=format&fit=crop", title: "Modern Kitchen" },
  { url: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2070&auto=format&fit=crop", title: "Master Bedroom" },
  { url: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=2070&auto=format&fit=crop", title: "Infinity Pool" }
];

export const Gallery = () => {
  return (
    <div className="bg-surface-low min-h-screen pb-32">
      <section className="bg-primary pt-32 pb-24 text-center">
        <div className="container mx-auto px-8 lg:px-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Visual Gallery
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/70 text-xl max-w-2xl mx-auto font-light"
          >
            A visual journey through our most exclusive architectural masterpieces and interior designs.
          </motion.p>
        </div>
      </section>

      <section className="pt-20">
        <div className="container mx-auto px-8 lg:px-12">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {galleryImages.map((img, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="relative group overflow-hidden rounded-2xl cursor-pointer shadow-sm"
              >
                <img 
                  src={img.url} 
                  alt={img.title} 
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-bold text-xl">{img.title}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
