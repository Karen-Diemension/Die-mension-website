import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'HOME' },
    { path: '/manufacturing', label: 'MANUFACTURING' },
    { path: '/equipment-list', label: 'EQUIPMENT LIST' },
    { path: '/contact-us', label: 'CONTACT US' },
    { path: '/careers', label: 'CAREERS' },
  ];

  return (
    <nav className="bg-gold sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img
              src="/images/Nanobanana-logo.png"
              alt="Die-Mension Corporation"
              className="h-12"
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-source text-dm-warm transition-colors ${
                  location.pathname === item.path
                    ? 'font-semibold'
                    : 'hover:text-dm-dark'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden text-dm-warm"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-dm-darker">
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block font-source text-white transition-colors ${
                  location.pathname === item.path
                    ? 'font-semibold'
                    : 'hover:text-gold'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
