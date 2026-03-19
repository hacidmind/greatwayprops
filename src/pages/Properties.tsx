import React, { useState } from 'react';
import { motion } from "motion/react";
import { Search, Filter, SlidersHorizontal } from "lucide-react";
import { PropertyCard, PropertyCardProps } from '../components/PropertyCard';

const properties: PropertyCardProps[] = [
  {
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
    title: "The Zenith Pavilion",
    location: "Banana Island, Lagos",
    price: 1250000000,
    beds: 6,
    baths: 8,
    sqft: 8400,
    featured: true
  },
  {
    image: "https://images.unsplash.com/photo-1600607687940-477a63bd3998?q=80&w=2070&auto=format&fit=crop",
    title: "Obsidian Crest",
    location: "Maitama, Abuja",
    price: 890000000,
    beds: 5,
    baths: 6,
    sqft: 6200
  },
  {
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop",
    title: "Terra Mar Estate",
    location: "Lekki Phase 1, Lagos",
    price: 2400000000,
    beds: 7,
    baths: 10,
    sqft: 12000
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    title: "Azure Heights",
    location: "Victoria Island, Lagos",
    price: 750000000,
    beds: 4,
    baths: 5,
    sqft: 4500
  },
  {
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2070&auto=format&fit=crop",
    title: "The Ivory Manor",
    location: "Ikoyi, Lagos",
    price: 1800000000,
    beds: 8,
    baths: 9,
    sqft: 10500
  },
  {
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1984&auto=format&fit=crop",
    title: "Emerald Grove",
    location: "Asokoro, Abuja",
    price: 1100000000,
    beds: 6,
    baths: 7,
    sqft: 7800
  }
];

export const Properties = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProperties = properties.filter(p => 
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-surface-low min-h-screen pb-32">
      {/* Header */}
      <section className="bg-primary pt-32 pb-24 text-center">
        <div className="container mx-auto px-8 lg:px-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            The Collection
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/70 text-xl max-w-2xl mx-auto font-light"
          >
            Explore our curated portfolio of Nigeria's most prestigious architectural masterpieces.
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <div className="container mx-auto px-8 lg:px-12 -mt-12 relative z-10">
        <div className="bg-white p-6 rounded-2xl shadow-xl flex flex-col md:flex-row gap-6 items-center">
          <div className="relative flex-grow w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary" size={20} />
            <input 
              type="text" 
              placeholder="Search by name or location..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-surface-low rounded-xl border-0 focus:ring-2 focus:ring-primary/20 transition-all font-medium"
            />
          </div>
          <div className="flex gap-4 w-full md:w-auto">
            <button className="flex items-center gap-2 px-6 py-4 bg-surface-low rounded-xl text-primary font-bold hover:bg-surface-high transition-all flex-grow justify-center">
              <Filter size={18} />
              <span>Filter</span>
            </button>
            <button className="flex items-center gap-2 px-6 py-4 bg-primary text-white rounded-xl font-bold hover:opacity-90 transition-all flex-grow justify-center">
              <SlidersHorizontal size={18} />
              <span>Sort</span>
            </button>
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="pt-20">
        <div className="container mx-auto px-8 lg:px-12">
          <div className="flex justify-between items-center mb-12">
            <p className="text-on-surface-variant font-medium">Showing {filteredProperties.length} properties</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredProperties.map((prop, idx) => (
              <PropertyCard key={idx} {...prop} />
            ))}
          </div>

          {filteredProperties.length === 0 && (
            <div className="text-center py-32">
              <h3 className="text-2xl font-bold text-primary mb-2">No properties found</h3>
              <p className="text-on-surface-variant">Try adjusting your search or filters to find what you're looking for.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
