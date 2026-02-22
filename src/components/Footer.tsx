import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-separator py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
          <p className="text-sm text-dm-body">
            © {new Date().getFullYear()} Die-Mension Corporation. All rights reserved.
          </p>
          <p className="text-sm text-dm-muted">
            Powered by React + Vite
          </p>
        </div>
        <div className="flex items-center justify-center gap-6 text-sm">
          <Link to="/contact-us" className="text-dm-body hover:text-gold-dark transition-colors">
            Contact Us
          </Link>
          <Link to="/careers" className="text-dm-body hover:text-gold-dark transition-colors">
            Careers
          </Link>
        </div>
      </div>
    </footer>
  );
}
