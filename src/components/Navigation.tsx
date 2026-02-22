import { Link, useLocation } from 'react-router-dom';
import { Factory } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navigation() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/manufacturing', label: 'Manufacturing' },
    { path: '/equipment', label: 'Equipment' },
    { path: '/careers', label: 'Careers' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <Factory className="w-8 h-8 text-accent-gold" />
            <span className="text-2xl font-heading font-bold text-near-black group-hover:text-accent-gold transition-colors">
              Die-Mension
            </span>
          </Link>

          <div className="flex gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative font-body font-semibold text-sm tracking-wide transition-colors ${
                  location.pathname === item.path
                    ? 'text-accent-gold'
                    : 'text-near-black hover:text-accent-gold'
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-gold"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
