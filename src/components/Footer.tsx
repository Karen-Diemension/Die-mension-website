import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-16 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-white font-extrabold text-2xl mb-4">Die-Mension Corporation</h3>
            <div className="h-1 w-16 bg-gradient-to-r from-[#4a90a4] to-[#3d7a8b] rounded-full mb-4"></div>
            <p className="text-gray-300 text-base leading-relaxed">
              Precision tool and die manufacturing since 1986. ISO 9001:2015 certified with design.
            </p>
          </div>

          <div>
            <h3 className="text-white font-extrabold text-2xl mb-4">Quick Links</h3>
            <div className="h-1 w-16 bg-gradient-to-r from-[#4a90a4] to-[#3d7a8b] rounded-full mb-4"></div>
            <div className="flex flex-col gap-3">
              <Link to="/" className="text-gray-300 hover:text-[#4a90a4] transition-colors text-base font-medium">
                Home
              </Link>
              <Link to="/manufacturing" className="text-gray-300 hover:text-[#4a90a4] transition-colors text-base font-medium">
                Manufacturing
              </Link>
              <Link to="/equipment-list" className="text-gray-300 hover:text-[#4a90a4] transition-colors text-base font-medium">
                Equipment
              </Link>
              <Link to="/careers" className="text-gray-300 hover:text-[#4a90a4] transition-colors text-base font-medium">
                Careers
              </Link>
              <Link to="/contact-us" className="text-gray-300 hover:text-[#4a90a4] transition-colors text-base font-medium">
                Contact Us
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-extrabold text-2xl mb-4">Contact Info</h3>
            <div className="h-1 w-16 bg-gradient-to-r from-[#4a90a4] to-[#3d7a8b] rounded-full mb-4"></div>
            <div className="flex flex-col gap-4 text-base">
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#4a90a4]" />
                <span>3020 Nationwide Parkway<br/>Brunswick, OH 44212</span>
              </div>
              <a href="tel:3302735872" className="flex items-center gap-3 text-gray-300 hover:text-[#4a90a4] transition-colors font-medium">
                <Phone className="w-5 h-5 text-[#4a90a4]" />
                (330) 273-5872
              </a>
              <a href="mailto:email@diemension.com" className="flex items-center gap-3 text-gray-300 hover:text-[#4a90a4] transition-colors font-medium">
                <Mail className="w-5 h-5 text-[#4a90a4]" />
                email@diemension.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-gray-400 text-base font-medium">
            © {new Date().getFullYear()} Die-Mension Corporation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
