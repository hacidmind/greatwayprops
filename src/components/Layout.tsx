import React from 'react';
import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { Instagram, Facebook, Twitter, Send } from "lucide-react";

export const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-4 bg-surface/70 backdrop-blur-md shadow-sm"
    >
      <div className="flex items-center gap-12">
        <Link to="/" className="text-2xl font-headline italic font-bold text-primary">Greatway Properties</Link>
        <div className="hidden md:flex gap-8">
          <Link to="/" className={`${isHome ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary transition-colors'}`}>Home</Link>
          <Link to="/properties" className={`${location.pathname === '/properties' ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary transition-colors'}`}>Properties</Link>
          <Link to="/gallery" className={`${location.pathname === '/gallery' ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary transition-colors'}`}>Gallery</Link>
          <Link to="/contact" className={`${location.pathname === '/contact' ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary transition-colors'}`}>Contact Us</Link>
        </div>
      </div>
      <Link to="/book-inspection" className="bg-gradient-to-br from-primary to-primary-container text-white px-6 py-2.5 rounded-xl font-medium active:scale-95 transition-transform hover:opacity-90">
        Book Inspection
      </Link>
    </motion.nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-surface-high pt-24 pb-12 px-8 lg:px-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
        <div className="space-y-8">
          <span className="text-2xl font-headline italic font-bold text-primary">Greatway Properties</span>
          <p className="text-on-surface-variant text-sm leading-relaxed max-w-xs">
            Elevating real estate to an art form. We specialize in the acquisition and sale of architectural masterpieces and historic estates globally.
          </p>
          <div className="flex gap-5">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
        
        <div>
          <h5 className="text-primary font-bold mb-8 uppercase tracking-widest text-xs">Directory</h5>
          <ul className="space-y-5">
            <li><Link to="/" className="text-on-surface-variant hover:text-primary transition-all">Home</Link></li>
            <li><Link to="/properties" className="text-on-surface-variant hover:text-primary transition-all">Properties</Link></li>
            <li><Link to="/gallery" className="text-on-surface-variant hover:text-primary transition-all">Gallery</Link></li>
            <li><Link to="/contact" className="text-on-surface-variant hover:text-primary transition-all">Contact Us</Link></li>
          </ul>
        </div>
        
        <div>
          <h5 className="text-primary font-bold mb-8 uppercase tracking-widest text-xs">Support</h5>
          <ul className="space-y-5">
            <li><Link to="/contact" className="text-on-surface-variant hover:text-primary transition-all">Contact Us</Link></li>
            <li><a href="#" className="text-on-surface-variant hover:text-primary transition-all">Privacy Policy</a></li>
            <li><a href="#" className="text-on-surface-variant hover:text-primary transition-all">Terms of Service</a></li>
          </ul>
        </div>
        
        <div className="space-y-6">
          <h5 className="text-primary font-bold mb-8 uppercase tracking-widest text-xs">Newsletter</h5>
          <p className="text-on-surface-variant text-sm leading-relaxed">Receive monthly architectural highlights and off-market opportunities.</p>
          <div className="flex group">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="bg-white border-0 rounded-l-xl px-5 py-4 w-full text-sm focus:ring-2 focus:ring-primary/20 transition-all"
            />
            <button className="bg-primary text-white px-6 py-4 rounded-r-xl hover:bg-primary-container transition-all">
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto pt-12 border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-on-surface-variant text-xs">© 2024 Greatway Properties. All rights reserved.</p>
        <div className="flex gap-8 text-xs text-on-surface-variant">
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
