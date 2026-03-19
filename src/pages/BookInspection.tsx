import React from 'react';
import { motion } from "motion/react";
import { Calendar, Clock, MapPin, User, Mail, Phone, Send } from "lucide-react";

export const BookInspection = () => {
  return (
    <div className="bg-surface-low min-h-screen pb-32">
      <section className="bg-primary pt-24 pb-16 md:pt-32 md:pb-24 text-center">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Book Inspection
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto font-light"
          >
            Schedule a private, guided tour of our most exclusive architectural masterpieces.
          </motion.p>
        </div>
      </section>

      <section className="pt-12 md:pt-20">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="bg-white p-6 sm:p-10 lg:p-16 rounded-3xl shadow-xl border border-outline-variant/10 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-8 md:mb-10 text-center">Inspection Details</h3>
            <form className="space-y-8 md:space-y-10">
              {/* Property Selection */}
              <div className="space-y-3 md:space-y-4">
                <label className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-secondary">Select Property</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary md:w-5 md:h-5" size={18} />
                  <select className="w-full bg-surface-low border-0 pl-12 pr-5 py-3 md:py-4 rounded-xl focus:ring-2 focus:ring-primary/20 transition-all appearance-none font-medium text-sm md:text-base">
                    <option>The Zenith Pavilion - Banana Island, Lagos</option>
                    <option>Obsidian Crest - Maitama, Abuja</option>
                    <option>Terra Mar Estate - Lekki Phase 1, Lagos</option>
                    <option>Azure Heights - Victoria Island, Lagos</option>
                    <option>The Ivory Manor - Ikoyi, Lagos</option>
                    <option>Emerald Grove - Asokoro, Abuja</option>
                  </select>
                </div>
              </div>

              {/* Date and Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-3 md:space-y-4">
                  <label className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-secondary">Preferred Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary md:w-5 md:h-5" size={18} />
                    <input type="date" className="w-full bg-surface-low border-0 pl-12 pr-5 py-3 md:py-4 rounded-xl focus:ring-2 focus:ring-primary/20 transition-all font-medium text-sm md:text-base" />
                  </div>
                </div>
                <div className="space-y-3 md:space-y-4">
                  <label className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-secondary">Preferred Time</label>
                  <div className="relative">
                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary md:w-5 md:h-5" size={18} />
                    <select className="w-full bg-surface-low border-0 pl-12 pr-5 py-3 md:py-4 rounded-xl focus:ring-2 focus:ring-primary/20 transition-all appearance-none font-medium text-sm md:text-base">
                      <option>Morning (09:00 - 12:00)</option>
                      <option>Afternoon (12:00 - 15:00)</option>
                      <option>Evening (15:00 - 18:00)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Personal Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-3 md:space-y-4">
                  <label className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-secondary">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary md:w-5 md:h-5" size={18} />
                    <input type="text" className="w-full bg-surface-low border-0 pl-12 pr-5 py-3 md:py-4 rounded-xl focus:ring-2 focus:ring-primary/20 transition-all font-medium text-sm md:text-base" placeholder="John Doe" />
                  </div>
                </div>
                <div className="space-y-3 md:space-y-4">
                  <label className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-secondary">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary md:w-5 md:h-5" size={18} />
                    <input type="email" className="w-full bg-surface-low border-0 pl-12 pr-5 py-3 md:py-4 rounded-xl focus:ring-2 focus:ring-primary/20 transition-all font-medium text-sm md:text-base" placeholder="john@example.com" />
                  </div>
                </div>
              </div>

              <div className="space-y-3 md:space-y-4">
                <label className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-secondary">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary md:w-5 md:h-5" size={18} />
                  <input type="tel" className="w-full bg-surface-low border-0 pl-12 pr-5 py-3 md:py-4 rounded-xl focus:ring-2 focus:ring-primary/20 transition-all font-medium text-sm md:text-base" placeholder="+234 800 123 4567" />
                </div>
              </div>

              <div className="space-y-3 md:space-y-4">
                <label className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-secondary">Special Requirements</label>
                <textarea rows={4} className="w-full bg-surface-low border-0 px-5 py-3 md:py-4 rounded-xl focus:ring-2 focus:ring-primary/20 transition-all resize-none font-medium text-sm md:text-base" placeholder="Any specific details or requirements for the inspection..."></textarea>
              </div>

              <button className="w-full bg-primary text-white py-4 md:py-5 rounded-xl font-bold text-base md:text-lg flex items-center justify-center gap-3 hover:opacity-90 transition-all shadow-lg active:scale-95">
                <Send size={18} className="md:w-5 md:h-5" />
                <span>Confirm Inspection Request</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
