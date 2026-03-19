import React from 'react';
import { motion } from "motion/react";
import { MapPin, Bed, Bath, Square } from "lucide-react";

export interface PropertyCardProps {
  key?: React.Key;
  image: string;
  title: string;
  location: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  featured?: boolean;
}

export const PropertyCard = ({ image, title, location, price, beds, baths, sqft, featured = false }: PropertyCardProps) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="group cursor-pointer"
  >
    <div className="relative overflow-hidden rounded-2xl mb-6 shadow-sm">
      <img 
        src={image} 
        alt={title} 
        className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-700"
        referrerPolicy="no-referrer"
      />
      {featured && (
        <div className="absolute top-4 left-4 bg-tertiary text-primary px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">
          Featured
        </div>
      )}
    </div>
    <div className="space-y-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-2xl font-bold text-primary mb-1">{title}</h3>
          <p className="text-secondary flex items-center gap-1.5 text-sm">
            <MapPin size={14} /> {location}
          </p>
        </div>
        <span className="text-xl font-bold text-primary">₦{price.toLocaleString()}</span>
      </div>
      <div className="flex gap-6 text-on-surface-variant border-t border-outline-variant/20 pt-4 text-sm font-medium">
        <span className="flex items-center gap-2"><Bed size={16} className="text-secondary" /> {beds} Beds</span>
        <span className="flex items-center gap-2"><Bath size={16} className="text-secondary" /> {baths} Baths</span>
        <span className="flex items-center gap-2"><Square size={16} className="text-secondary" /> {sqft.toLocaleString()} sqft</span>
      </div>
    </div>
  </motion.div>
);
