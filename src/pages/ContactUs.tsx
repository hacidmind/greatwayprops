import React from 'react';
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Twitter } from "lucide-react";

export const ContactUs = () => {
  return (
    <div className="bg-surface-low min-h-screen pb-32">
      <section className="bg-primary pt-32 pb-24 text-center">
        <div className="container mx-auto px-8 lg:px-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/70 text-xl max-w-2xl mx-auto font-light"
          >
            Our senior property curators are available for private consultations and inquiries.
          </motion.p>
        </div>
      </section>

      <section className="pt-20">
        <div className="container mx-auto px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-8">Get in Touch</h2>
              <p className="text-on-surface-variant text-lg leading-relaxed max-w-md">
                Whether you're looking to acquire a new estate or list your architectural masterpiece, we're here to provide elite guidance.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center flex-shrink-0 text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-1">Lagos Office</h4>
                  <p className="text-on-surface-variant">15A Banana Island Road, Ikoyi, Lagos, Nigeria</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center flex-shrink-0 text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-1">Abuja Office</h4>
                  <p className="text-on-surface-variant">Plot 452, Gana Street, Maitama, Abuja, Nigeria</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center flex-shrink-0 text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-1">Phone</h4>
                  <p className="text-on-surface-variant">+234 (0) 800 GREATWAY</p>
                  <p className="text-on-surface-variant">+234 (0) 900 123 4567</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center flex-shrink-0 text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-1">Email</h4>
                  <p className="text-on-surface-variant">concierge@greatwayproperties.com</p>
                  <p className="text-on-surface-variant">estates@greatwayproperties.com</p>
                </div>
              </div>
            </div>

            <div className="pt-8 flex gap-5">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-10 lg:p-16 rounded-3xl shadow-xl border border-outline-variant/10">
            <h3 className="text-3xl font-bold text-primary mb-10">Send a Message</h3>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-secondary">Full Name</label>
                  <input type="text" className="w-full bg-surface-low border-0 px-5 py-4 rounded-xl focus:ring-2 focus:ring-primary/20 transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-secondary">Email Address</label>
                  <input type="email" className="w-full bg-surface-low border-0 px-5 py-4 rounded-xl focus:ring-2 focus:ring-primary/20 transition-all" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-secondary">Subject</label>
                <select className="w-full bg-surface-low border-0 px-5 py-4 rounded-xl focus:ring-2 focus:ring-primary/20 transition-all appearance-none">
                  <option>Property Inquiry</option>
                  <option>Listing Consultation</option>
                  <option>Partnership Opportunity</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-secondary">Message</label>
                <textarea rows={5} className="w-full bg-surface-low border-0 px-5 py-4 rounded-xl focus:ring-2 focus:ring-primary/20 transition-all resize-none" placeholder="Tell us more about your requirements..."></textarea>
              </div>
              <button className="w-full bg-primary text-white py-5 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:opacity-90 transition-all shadow-lg active:scale-95">
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
