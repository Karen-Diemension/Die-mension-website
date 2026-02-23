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
    <nav className="bg-[#1a1f2e] sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/">
            <div>
              <img
                src="/images/Nanobanana-logo-removebg-preview.png"
                alt="Die-Mension Corporation"
                className="h-12"
              />
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-sans text-sm font-medium text-white transition-colors ${
                  location.pathname === item.path
                    ? 'border-b-2 border-[#4a90a4]'
                    : 'hover:text-gray-300'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1a1f2e]">
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block font-sans text-sm font-medium text-white transition-colors ${
                  location.pathname === item.path
                    ? 'text-[#4a90a4]'
                    : 'hover:text-gray-300'
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
