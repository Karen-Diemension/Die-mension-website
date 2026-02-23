import { Download } from 'lucide-react';

export default function Manufacturing() {
  return (
    <div>
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1567789884554-0b844b597180?w=1600"
          alt="Manufacturing Solutions"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-dm-dark/50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-white text-5xl">Manufacturing Solutions</h1>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-dm-body text-lg leading-relaxed mb-12 text-center">
            Die-Mension is a one-source shop for your complete tooling design, build, repair and metal stamping needs.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="space-y-4">
              <img
                src="/images/Okuma-pic.jpg"
                alt="Okuma Genos M560-V Machining Center"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <p className="text-center text-dm-body font-semibold">Okuma Genos M560-V Machining Center</p>
            </div>
            <div className="space-y-4">
              <img
                src="/images/CMM-Pic.jpg"
                alt="Brown & Sharpe CMM Inspection"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <p className="text-center text-dm-body font-semibold">Brown & Sharpe CMM Inspection</p>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-separator"></div>
            <h2 className="text-3xl text-dm-dark text-center">TOOL BUILD, REPAIR & STAMPING SERVICES</h2>
            <div className="flex-1 h-px bg-separator"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-dm-body">
            <div className="bg-surface-light p-6 rounded">
              <h3 className="font-semibold text-lg text-dm-dark mb-3">3-Axis CNC Vertical Machining Center</h3>
            </div>
            <div className="bg-surface-light p-6 rounded">
              <h3 className="font-semibold text-lg text-dm-dark mb-3">Reverse Engineering</h3>
            </div>
            <div className="bg-surface-light p-6 rounded">
              <h3 className="font-semibold text-lg text-dm-dark mb-3">Short Run Production</h3>
            </div>
            <div className="bg-surface-light p-6 rounded">
              <h3 className="font-semibold text-lg text-dm-dark mb-3">Drilling</h3>
            </div>
            <div className="bg-surface-light p-6 rounded">
              <h3 className="font-semibold text-lg text-dm-dark mb-3">Gages and Fixtures</h3>
            </div>
            <div className="bg-surface-light p-6 rounded">
              <h3 className="font-semibold text-lg text-dm-dark mb-3">Metal Stamping</h3>
            </div>
            <div className="bg-surface-light p-6 rounded">
              <h3 className="font-semibold text-lg text-dm-dark mb-3">Grinding</h3>
            </div>
            <div className="bg-surface-light p-6 rounded">
              <h3 className="font-semibold text-lg text-dm-dark mb-3">Jig Grinding</h3>
            </div>
            <div className="bg-surface-light p-6 rounded">
              <h3 className="font-semibold text-lg text-dm-dark mb-3">Milling</h3>
            </div>
            <div className="bg-surface-light p-6 rounded">
              <h3 className="font-semibold text-lg text-dm-dark mb-3">Welding</h3>
            </div>
            <div className="bg-surface-light p-6 rounded">
              <h3 className="font-semibold text-lg text-dm-dark mb-3">Wire EDM</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-dm-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl mb-4">EXPERIENCED. COMMITTED. DEDICATED.</h2>
          <p className="text-2xl text-gold">
            CALL DIE-MENSION TODAY!{' '}
            <a href="tel:3302735872" className="hover:text-gold-light transition-colors">
              330-273-5872
            </a>
          </p>
        </div>
      </section>

      <section className="py-12 px-6 bg-surface-off">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-dm-body space-y-2">
            <p className="font-semibold text-lg text-dm-dark">DIE-MENSION CORPORATION</p>
            <p>3020 NATIONWIDE PARKWAY</p>
            <p>BRUNSWICK, OH 44212</p>
            <p className="mt-4">
              P: <a href="tel:3302735872" className="hover:text-gold-dark transition-colors">330-273-5872</a>
              {' '}|{' '}
              F: 330-273-8275
            </p>
            <p className="mt-4">
              <a
                href="/documents/ISO 9001 2015.pdf"
                className="inline-flex items-center gap-2 text-gold-dark hover:text-gold-darker transition-colors"
              >
                ISO 9001:2015 with Design
                <Download className="w-4 h-4" />
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
