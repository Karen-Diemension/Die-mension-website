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
    <nav className="bg-gradient-to-r from-[#1a1f2e] via-[#232833] to-[#1a1f2e] sticky top-0 z-50 shadow-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="transform hover:scale-105 transition-transform">
            <div>
              <img
                src="/images/Nanobanana-logo-removebg-preview.png"
                alt="Die-Mension Corporation"
                className="h-14"
              />
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-sans text-sm font-bold text-white transition-all relative group ${
                  location.pathname === item.path
                    ? 'text-[#4a90a4]'
                    : 'hover:text-[#4a90a4]'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#4a90a4] to-[#3d7a8b] transition-all ${
                  location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
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
        <div className="md:hidden bg-gradient-to-b from-[#1a1f2e] to-[#232833] border-t border-white/10">
          <div className="px-6 py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block font-sans text-base font-bold text-white transition-colors py-2 ${
                  location.pathname === item.path
                    ? 'text-[#4a90a4]'
                    : 'hover:text-[#4a90a4]'
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
