import { Download, Award, Clock, Shield } from 'lucide-react';

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
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <img
          src="/images/Gemini_Generated_Image_index-header.png"
          alt="Die-Mension Corporation Headquarters"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
          <h1 className="text-white text-5xl md:text-6xl font-bold mb-6 max-w-3xl">
            Precision Engineering Since 1986
          </h1>
          <p className="text-white/90 text-xl mb-8 max-w-2xl">
            Expert tool and die design, build & repair, precision machining, and metal stampings
          </p>
          <button className="bg-[#4a90a4] hover:bg-[#3d7a8b] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg">
            Request a Quote
          </button>
        </div>
      </section>

      <section className="bg-[#2d3436] py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center gap-3">
              <Clock className="w-12 h-12 text-[#4a90a4]" />
              <h3 className="text-white text-3xl font-bold">35+ Years</h3>
              <p className="text-gray-300">Experience</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Shield className="w-12 h-12 text-[#4a90a4]" />
              <h3 className="text-white text-3xl font-bold">ISO 9001:2015</h3>
              <p className="text-gray-300">Certified</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Award className="w-12 h-12 text-[#4a90a4]" />
              <h3 className="text-white text-3xl font-bold">WBENC</h3>
              <p className="text-gray-300">Certified</p>
            </div>
          </div>
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

          <div className="grid md:grid-cols-2 gap-8 mb-8 text-sm text-dm-body">
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

          <div className="flex justify-center mt-8">
            <a
              href="/documents/Line_Card_Tri.pdf"
              download
              className="inline-flex items-center gap-3 bg-[#4a90a4] hover:bg-[#3d7a8b] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg"
            >
              <Download className="w-6 h-6" />
              <span>Download Complete Line Card</span>
            </a>
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

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                <div className="relative inline-block mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full object-cover border-4 border-[#4a90a4]"
                  />
                </div>
                <h3 className="text-2xl font-bold text-dm-dark mb-2">{member.name}</h3>
                <p className="text-lg text-dm-body mb-4">{member.title}</p>
                <a
                  href={`mailto:${member.email}`}
                  className="text-[#4a90a4] hover:text-[#3d7a8b] transition-colors font-medium"
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
