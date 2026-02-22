import { MapPin, Phone, Mail } from 'lucide-react';

export default function TopInfoBar() {
  return (
    <div className="bg-white border-b border-separator py-3 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-dm-body">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <span>3020 Nationwide Parkway, Brunswick, Ohio 44212</span>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <a href="tel:3302735872" className="hover:text-gold-dark transition-colors">
              (330) 273-5872
            </a>
          </div>
          <div className="h-4 w-px bg-separator hidden md:block"></div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <a href="mailto:email@diemension.com" className="hover:text-gold-dark transition-colors">
              email@diemension.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
