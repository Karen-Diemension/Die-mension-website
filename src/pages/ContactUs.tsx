import { ArrowRight } from 'lucide-react';

export default function ContactUs() {
  return (
    <div>
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <img
          src="/images/forklift-operator-loading-boxes-onto-semi-truck.jpg"
          alt="Contact Die-Mension"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dm-dark/70 via-dm-dark/60 to-dm-dark/70"></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-white text-5xl md:text-6xl font-extrabold mb-6 max-w-4xl mx-auto leading-tight">
            Trust Die-Mension for your tooling, machine & stamping needs
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-[#4a90a4] to-[#3d7a8b] rounded-full mx-auto mb-10"></div>
          <a
            href="mailto:karen@diemension.com"
            className="btn-primary text-lg group"
          >
            CONTACT OUR SALES TEAM / RFQ
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-2xl shadow-xl p-12 border border-gray-100">
            <div className="text-dm-body space-y-6">
              <p className="text-4xl font-extrabold text-dm-dark mb-8">DIE-MENSION CORPORATION</p>
              <div className="h-1 w-24 bg-gradient-to-r from-[#4a90a4] to-[#3d7a8b] rounded-full mx-auto mb-8"></div>
              <p className="text-xl font-medium">3020 Nationwide Parkway</p>
              <p className="text-xl font-medium">Brunswick, Ohio 44212</p>
              <div className="pt-8 space-y-4 border-t border-gray-200 mt-8">
                <p className="text-lg">
                  <span className="font-bold">Phone:</span>{' '}
                  <a href="tel:3302735872" className="text-[#4a90a4] hover:text-[#3d7a8b] font-semibold transition-colors">
                    (330) 273-5872
                  </a>
                </p>
                <p className="text-lg">
                  <span className="font-bold">Fax:</span> <span className="font-semibold">330-273-8275</span>
                </p>
                <p className="text-lg">
                  <span className="font-bold">Email:</span>{' '}
                  <a href="mailto:email@diemension.com" className="text-[#4a90a4] hover:text-[#3d7a8b] font-semibold transition-colors">
                    email@diemension.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
