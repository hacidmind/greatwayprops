import React, { useState } from 'react';
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { Instagram, Facebook, Twitter, Send, Menu, X } from "lucide-react";

export const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Properties', path: '/properties' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 flex justify-between items-center px-6 md:px-8 py-4 bg-surface/70 backdrop-blur-md shadow-sm"
    >
      <div className="flex items-center gap-12">
        <Link to="/" className="text-xl md:text-2xl font-headline italic font-bold text-primary truncate max-w-[200px] md:max-w-none">Greatway Properties</Link>
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              className={`${location.pathname === link.path ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary transition-colors'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Link to="/book-inspection" className="hidden md:block bg-gradient-to-br from-primary to-primary-container text-white px-6 py-2.5 rounded-xl font-medium active:scale-95 transition-transform hover:opacity-90">
          Book Inspection
        </Link>
        
        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-primary hover:bg-primary/5 rounded-lg transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-surface border-t border-outline-variant/10 shadow-xl md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.path}
                  to={link.path} 
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium ${location.pathname === link.path ? 'text-primary' : 'text-on-surface-variant'}`}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/book-inspection" 
                onClick={() => setIsOpen(false)}
                className="bg-primary text-white text-center py-4 rounded-xl font-bold shadow-lg"
              >
                Book Inspection
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-surface-high pt-16 pb-8 px-6 md:px-8 lg:px-12">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16 mb-12 md:mb-20">
        <div className="space-y-6 md:space-y-8">
          <span className="text-xl md:text-2xl font-headline italic font-bold text-primary">Greatway Properties</span>
          <p className="text-on-surface-variant text-sm leading-relaxed max-w-xs">
            Elevating real estate to an art form. We specialize in the acquisition and sale of architectural masterpieces and historic estates globally.
          </p>
          <div className="flex gap-4 md:gap-5">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
        
        <div>
          <h5 className="text-primary font-bold mb-6 md:mb-8 uppercase tracking-widest text-[10px] md:text-xs">Directory</h5>
          <ul className="space-y-4 md:space-y-5">
            <li><Link to="/" className="text-on-surface-variant hover:text-primary transition-all text-sm md:text-base">Home</Link></li>
            <li><Link to="/properties" className="text-on-surface-variant hover:text-primary transition-all text-sm md:text-base">Properties</Link></li>
            <li><Link to="/gallery" className="text-on-surface-variant hover:text-primary transition-all text-sm md:text-base">Gallery</Link></li>
            <li><Link to="/contact" className="text-on-surface-variant hover:text-primary transition-all text-sm md:text-base">Contact Us</Link></li>
          </ul>
        </div>
        
        <div>
          <h5 className="text-primary font-bold mb-6 md:mb-8 uppercase tracking-widest text-[10px] md:text-xs">Support</h5>
          <ul className="space-y-4 md:space-y-5">
            <li><Link to="/contact" className="text-on-surface-variant hover:text-primary transition-all text-sm md:text-base">Contact Us</Link></li>
            <li><a href="#" className="text-on-surface-variant hover:text-primary transition-all text-sm md:text-base">Privacy Policy</a></li>
            <li><a href="#" className="text-on-surface-variant hover:text-primary transition-all text-sm md:text-base">Terms of Service</a></li>
          </ul>
        </div>
        
        <div className="space-y-6">
          <h5 className="text-primary font-bold mb-6 md:mb-8 uppercase tracking-widest text-[10px] md:text-xs">Newsletter</h5>
          <p className="text-on-surface-variant text-sm leading-relaxed">Receive monthly architectural highlights and off-market opportunities.</p>
          <div className="flex group">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="bg-white border-0 rounded-l-xl px-4 md:px-5 py-3 md:py-4 w-full text-sm focus:ring-2 focus:ring-primary/20 transition-all"
            />
            <button className="bg-primary text-white px-5 md:px-6 py-3 md:py-4 rounded-r-xl hover:bg-primary-container transition-all">
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto pt-8 md:pt-12 border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
        <p className="text-on-surface-variant text-[10px] md:text-xs text-center md:text-left">© 2024 Greatway Properties. All rights reserved.</p>
        <div className="flex gap-6 md:gap-8 text-[10px] md:text-xs text-on-surface-variant">
          <a href="#" className="hover:text-primary">Sitemap</a>
          <a href="#" className="hover:text-primary">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen selection:bg-tertiary selection:text-primary">
      <Navbar />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};
