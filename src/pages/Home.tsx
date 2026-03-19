import React from 'react';
import { motion } from "motion/react";
import { Search, ArrowLeft, ArrowRight, ShieldCheck, Landmark, TrendingUp, Star } from "lucide-react";
import { PropertyCard, PropertyCardProps } from '../components/PropertyCard';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
          alt="Luxury modern villa" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-primary/30"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-8 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-[1.1]">
            Refining the Art <br /> of <span className="noto-serif-italic font-normal">Modern Living.</span>
          </h1>
          <p className="text-xl text-white/90 max-w-xl mb-12 font-light leading-relaxed">
            A curated portfolio of architectural masterpieces and luxury estates, tailored for the discerning collector.
          </p>
          
          <div className="bg-surface-lowest/90 backdrop-blur-xl p-8 rounded-2xl shadow-2xl max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-end">
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-widest font-semibold text-secondary">Location</label>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Where to?" 
                    className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 px-0 py-2 text-primary font-medium placeholder:text-secondary/50"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-widest font-semibold text-secondary">Budget</label>
                <select className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 px-0 py-2 text-primary font-medium appearance-none">
                  <option>₦50M - ₦100M</option>
                  <option>₦100M - ₦500M</option>
                  <option>₦500M+</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-widest font-semibold text-secondary">Type</label>
                <select className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 px-0 py-2 text-primary font-medium appearance-none">
                  <option>Modern Villa</option>
                  <option>Penthouse</option>
                  <option>Coastal Estate</option>
                </select>
              </div>
              <button className="w-full bg-primary text-white py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-primary-container transition-all shadow-lg active:scale-95">
                <Search size={20} />
                <span className="font-semibold">Explore</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const FeaturedProperties = () => {
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
    }
  ];

  return (
    <section className="py-32 bg-surface-low">
      <div className="container mx-auto px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-secondary font-semibold uppercase tracking-[0.25em] text-xs mb-4 block">Curated Selection</span>
            <h2 className="text-5xl font-bold text-primary">Signature Estates</h2>
          </div>
          <div className="flex gap-4">
            <button className="p-4 rounded-full border border-outline-variant hover:bg-white text-primary transition-all active:scale-95">
              <ArrowLeft size={24} />
            </button>
            <button className="p-4 rounded-full bg-primary text-white hover:bg-primary-container transition-all active:scale-95 shadow-lg">
              <ArrowRight size={24} />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {properties.map((prop, idx) => (
            <PropertyCard 
              key={idx} 
              {...prop}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section className="py-32 bg-surface">
      <div className="container mx-auto px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop" 
              alt="Luxury Interior" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="absolute -bottom-12 -right-12 w-72 bg-tertiary rounded-2xl p-10 flex flex-col justify-end shadow-2xl hidden md:flex"
          >
            <span className="text-5xl font-bold font-headline text-primary mb-3">25+</span>
            <p className="text-primary/80 font-medium leading-snug">Years of uncompromised excellence in real estate.</p>
          </motion.div>
        </div>
        
        <div className="space-y-10">
          <div className="space-y-4">
            <span className="text-secondary font-semibold uppercase tracking-[0.25em] text-xs">Our Philosophy</span>
            <h2 className="text-6xl font-bold text-primary leading-[1.1]">The Greatway <br /> Difference</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed max-w-xl">
              We believe property is more than just square footage—it's the canvas for your life. We combine data-driven insights with a curator's eye for quality.
            </p>
          </div>
          
          <div className="space-y-8 pt-4">
            {[
              { icon: ShieldCheck, title: "Elite Privacy", desc: "Confidential off-market transactions for high-profile clients." },
              { icon: Landmark, title: "Curated Portfolio", desc: "Only properties that meet our stringent 120-point architectural standard." },
              { icon: TrendingUp, title: "Wealth Management", desc: "Strategic acquisition advice focused on long-term appreciation." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex gap-6"
              >
                <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center flex-shrink-0 text-primary">
                  <item.icon size={28} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-1.5">{item.title}</h4>
                  <p className="text-on-surface-variant leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      stars: 5,
      quote: "Greatway Properties doesn't just sell homes; they curate lifestyles. Their attention to architectural detail and professional handling was unparalleled.",
      author: "Julian Thorne",
      role: "Tech Executive",
      image: "https://i.pravatar.cc/150?u=julian"
    },
    {
      stars: 5,
      quote: "Their off-market listings were a game changer for us. We found our dream coastal villa before it even hit the public websites. Absolute professionals.",
      author: "Elena Rodriguez",
      role: "Art Curator",
      image: "https://i.pravatar.cc/150?u=elena"
    },
    {
      stars: 5,
      quote: "The level of insight provided during the viewing process was incredible. They knew everything from the architect's intent to the quality of the limestone.",
      author: "Marcus Vance",
      role: "Venture Capitalist",
      image: "https://i.pravatar.cc/150?u=marcus"
    }
  ];

  return (
    <section className="py-32 bg-surface-high relative overflow-hidden">
      <div className="container mx-auto px-8 lg:px-12 relative z-10">
        <h2 className="text-5xl font-bold text-primary mb-20 text-center">Words from the Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-12 rounded-2xl shadow-sm border border-outline-variant/10 flex flex-col h-full">
              <div className="flex gap-1 text-tertiary mb-8">
                {[...Array(t.stars)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <p className="text-on-surface-variant italic mb-10 leading-relaxed text-lg flex-grow">"{t.quote}"</p>
              <div className="flex items-center gap-5 pt-6 border-t border-outline-variant/10">
                <div className="w-14 h-14 rounded-full overflow-hidden shadow-inner">
                  <img src={t.image} alt={t.author} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <p className="font-bold text-primary text-lg">{t.author}</p>
                  <p className="text-xs uppercase tracking-widest text-secondary font-semibold">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-8 lg:px-12">
        <div className="relative rounded-[2.5rem] overflow-hidden bg-primary p-16 lg:p-32 flex flex-col items-center text-center">
          <div className="absolute inset-0 opacity-25">
            <img 
              src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070&auto=format&fit=crop" 
              alt="Luxury Bathroom" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Ready to step into your <br /><span className="noto-serif-italic font-normal">future estate?</span>
            </h2>
            <p className="text-white/80 text-xl mb-12 font-light">Schedule a private, guided inspection with one of our senior property curators today.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-tertiary text-primary px-12 py-5 rounded-full font-bold text-lg hover:opacity-90 transition-all shadow-xl active:scale-95">
                Book Private Viewing
              </button>
              <button className="border border-white/30 text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all active:scale-95">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedProperties />
      <About />
      <Testimonials />
      <CTA />
    </>
  );
};
