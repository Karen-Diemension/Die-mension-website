import { Download } from 'lucide-react';

export default function Home() {
  const teamMembers = [
    {
      name: 'KAREN THOMPSON',
      title: 'President',
      email: 'karen@diemension.com',
      image: '/images/Profile-Pic-0003-Karen-Thompson.jpg'
    },
    {
      name: 'RICK THOMPSON',
      title: 'Vice President',
      email: 'rick@diemension.com',
      image: '/images/Rick-Thompson-picture.jpg'
    }
  ];

  return (
    <div>
      <section className="relative h-[60vh] flex items-end overflow-hidden">
        <img
          src="/images/Gemini_Generated_Image_index-header.png"
          alt="Die-Mension Corporation Headquarters"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dm-dark/60 to-transparent"></div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-12">
          <h1 className="text-white text-3xl md:text-4xl mb-4 max-w-3xl">
            TOOL AND DIE DESIGN, BUILD & REPAIR, MACHINED DETAILS AND, METAL STAMPINGS
          </h1>
          <p className="text-white text-lg">
            3020 Nationwide Pkwy. Brunswick, Ohio 44212
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-separator"></div>
            <h2 className="text-3xl text-dm-dark text-center">ABOUT US / OUR HISTORY</h2>
            <div className="flex-1 h-px bg-separator"></div>
          </div>

          <div className="space-y-6 text-dm-body leading-relaxed">
            <p>
              Since 1986, Die-Mension Corporation has designed, built and repaired, high quality metal stamping dies.
              We can provide precision machined components, and produce metal stampings. We have built our reputation
              on our commitment to quality and on-time delivery.
            </p>
            <p>
              We specialize in Tool and Die Design, Build, and Repair. We are a Precision Machine Shop, with
              capabilities in, Wire EDM, Grinding, Jig Grinding. We can produce high and low volume Metal Stampings.
            </p>
            <p>
              Our talented and dedicated staff works hard to surpass your expectations. Our commitment to customer
              satisfaction, quality products, and reliability has made us a leader in the tool and die industry. We
              provide products and services to our customers, which meet or exceed their expectations. Our commitment
              to excellence is achieved through communication and continuous improvement.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-surface-off">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex-1 h-px bg-separator"></div>
            <h2 className="text-3xl text-dm-dark text-center">LINE CARD</h2>
            <div className="flex-1 h-px bg-separator"></div>
          </div>
          <p className="text-center text-dm-body mb-8 text-lg">
            OUR RANGE OF CAPABILITIES IN TOOL AND DIE, MACHINING & METAL STAMPING
          </p>

          <div className="bg-white p-8 rounded-lg shadow-md mb-6">
            <div className="aspect-[8.5/11] bg-surface-light flex items-center justify-center mb-4">
              <p className="text-dm-muted">Line Card PDF Viewer</p>
            </div>
            <a
              href="/documents/Line_Card_Tri.pdf"
              download
              className="inline-flex items-center gap-2 text-gold-dark hover:text-gold-darker transition-colors"
            >
              <Download className="w-5 h-5" />
              <span>Download Line Card PDF</span>
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-sm text-dm-body">
            <div>
              <h3 className="font-semibold text-lg text-dm-dark mb-4">Die Build and Repair Services</h3>
              <ul className="space-y-2">
                <li>• Blank Dies</li>
                <li>• Compound Dies</li>
                <li>• Die Design</li>
                <li>• Form Dies</li>
                <li>• Line Dies</li>
                <li>• Pierce Dies</li>
                <li>• Preventative Tool Maintenance</li>
                <li>• Progressive Dies</li>
                <li>• Prototyping</li>
                <li>• Secondary Dies</li>
                <li>• Single Hit Dies</li>
                <li>• Transfer Dies</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-dm-dark mb-4">Transfer Tooling, Stamping Services & Precision Machining</h3>
              <ul className="space-y-2">
                <li>• 3-Axis Vertical Machining</li>
                <li>• 3-Axis CNC Machining</li>
                <li>• 4-Axis Wire EDM (11" x 14" x 19" capacity)</li>
                <li>• Fixtures and Gages</li>
                <li>• Jig Grinding</li>
                <li>• Metal Stamping – High and Low Volume</li>
                <li>• Reverse Engineering</li>
                <li>• Surface grinding from .0001" to 36"</li>
                <li>• TIG/MIG welding and brazing</li>
              </ul>
            </div>
          </div>

          <p className="text-dm-body mt-8 text-center leading-relaxed">
            From concept through completion….. Die-Mension can design, engineer, prototype, and mass produce parts
            to your exact standards. We specialize in die building, die repair, precision machining, wire EDM, jig
            grinding, prototyping and, low and high volume production. With more than 35 years of experience,
            certified to ISO 9001:2015 with Design, our talented and dedicated staff will work hard to surpass your
            expectations.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="flex-1 h-px bg-separator"></div>
            <h2 className="text-3xl text-dm-dark text-center">OUR TEAM</h2>
            <div className="flex-1 h-px bg-separator"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative inline-block mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full object-cover border-8 border-gold"
                  />
                </div>
                <h3 className="text-xl font-semibold text-dm-dark mb-1">{member.name}</h3>
                <p className="text-dm-body mb-3">{member.title}</p>
                <a
                  href={`mailto:${member.email}`}
                  className="text-gold-dark hover:text-gold-darker transition-colors"
                >
                  {member.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-surface-off">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="flex-1 h-px bg-separator"></div>
            <h2 className="text-3xl text-dm-dark text-center">OUR CERTIFICATIONS</h2>
            <div className="flex-1 h-px bg-separator"></div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-12">
            <img
              src="/images/footer-wbenc-logo.jpg"
              alt="WBENC Certified"
              className="h-24 object-contain"
            />
            <img
              src="/images/footer-iso-logo.jpg"
              alt="ISO 9001:2015 with Design"
              className="h-24 object-contain"
            />
            <img
              src="/images/SCB-ISO-9001-Mark.jpg"
              alt="SCB ISO 9001"
              className="h-24 object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
