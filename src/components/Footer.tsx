import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Die-Mension Corporation</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Precision tool and die manufacturing since 1986. ISO 9001:2015 certified with design.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                Home
              </Link>
              <Link to="/manufacturing" className="text-gray-400 hover:text-white transition-colors text-sm">
                Manufacturing
              </Link>
              <Link to="/equipment-list" className="text-gray-400 hover:text-white transition-colors text-sm">
                Equipment
              </Link>
              <Link to="/careers" className="text-gray-400 hover:text-white transition-colors text-sm">
                Careers
              </Link>
              <Link to="/contact-us" className="text-gray-400 hover:text-white transition-colors text-sm">
                Contact Us
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Info</h3>
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-start gap-2 text-gray-400">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>3020 Nationwide Parkway<br/>Brunswick, OH 44212</span>
              </div>
              <a href="tel:3302735872" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                (330) 273-5872
              </a>
              <a href="mailto:email@diemension.com" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                email@diemension.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Die-Mension Corporation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
