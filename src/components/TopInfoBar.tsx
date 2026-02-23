import { MapPin, Phone, Mail } from 'lucide-react';

export default function TopInfoBar() {
  return (
    <div className="bg-gray-900 py-2 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-xs text-gray-300">
        <div className="flex items-center gap-1">
          <MapPin className="w-3 h-3" />
          <span>3020 Nationwide Parkway, Brunswick, OH 44212</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="tel:3302735872" className="hover:text-white transition-colors flex items-center gap-1">
            <Phone className="w-3 h-3" />
            (330) 273-5872
          </a>
          <span className="text-gray-600">·</span>
          <a href="mailto:email@diemension.com" className="hover:text-white transition-colors flex items-center gap-1">
            <Mail className="w-3 h-3" />
            email@diemension.com
          </a>
        </div>
      </div>
    </div>
  );
}
