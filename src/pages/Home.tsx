import { Download, Award, Clock, Shield, ArrowRight } from 'lucide-react';

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
      <section className="w-full">
        <img
          src="/images/IMG_9770.jpg"
          alt="Die-Mension Corporation Headquarters"
          className="w-full h-auto"
        />
      </section>

      <section className="bg-gradient-to-br from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a] py-16 px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5">
            <h1 className="text-white text-4xl font-extrabold leading-tight mb-4">
              Precision Engineering Since 1986
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-[#4a90a4] to-[#3d7a8b] rounded-full mb-4"></div>
          </div>
          <p className="text-white/90 text-lg leading-relaxed md:col-span-4">
            TOOL AND DIE DESIGN, BUILD & REPAIR , MACHINED DETAILS AND, METAL STAMPINGS
          </p>
          <div className="md:col-span-3 flex justify-end">
            <button className="btn-primary group whitespace-nowrap">
              Request a Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center justify-center gap-3 p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 card-hover">
              <Clock className="w-12 h-12 text-[#4a90a4] mb-2" />
              <h3 className="text-white text-4xl font-extrabold">35+</h3>
              <p className="text-gray-300 text-base font-medium">Years of Experience</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 card-hover">
              <Shield className="w-12 h-12 text-[#4a90a4] mb-2" />
              <h3 className="text-white text-4xl font-extrabold">ISO 9001:2015</h3>
              <p className="text-gray-300 text-base font-medium">Quality Certified</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 card-hover">
              <Award className="w-12 h-12 text-[#4a90a4] mb-2" />
              <h3 className="text-white text-4xl font-extrabold">WBENC</h3>
              <p className="text-gray-300 text-base font-medium">Certified Enterprise</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">About Us</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#4a90a4] to-[#3d7a8b] rounded-full mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#4a90a4] to-[#3d7a8b] rounded-full"></div>
              <div className="pl-8">
                <h3 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">35 Years of Precision Engineering Excellence</h3>
                <p className="text-xl text-gray-700 leading-relaxed font-medium">
                  Since 1986, Die-Mension Corporation has been the trusted partner for high-quality metal stamping dies,
                  precision machined components, and metal stampings.
                </p>
              </div>
            </div>

            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                We specialize in Tool and Die Design, Build, and Repair. As a Precision Machine Shop with
                capabilities in Wire EDM, Grinding, and Jig Grinding, we can produce high and low volume Metal Stampings
                that meet the most demanding specifications.
              </p>
              <p>
                Our talented and dedicated staff works hard to surpass your expectations. Our commitment to customer
                satisfaction, quality products, and reliability has made us a leader in the tool and die industry. We
                provide products and services to our customers which meet or exceed their expectations through
                communication and continuous improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">Capabilities</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#4a90a4] to-[#3d7a8b] rounded-full mx-auto mb-4"></div>
            <p className="text-gray-600 text-xl">
              Our range of expertise in tool and die, machining, and metal stamping
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100 card-hover">
              <h3 className="font-extrabold text-2xl text-gray-900 mb-8">Die Build and Repair Services</h3>
              <div className="grid grid-cols-2 gap-4">
                {['Blank Dies', 'Compound Dies', 'Die Design', 'Form Dies', 'Line Dies', 'Pierce Dies',
                  'Preventative Tool Maintenance', 'Progressive Dies', 'Prototyping', 'Secondary Dies',
                  'Single Hit Dies', 'Transfer Dies'].map((service) => (
                  <div key={service} className="text-sm text-gray-700 py-3 border-b border-gray-200 font-medium hover:text-[#4a90a4] hover:border-[#4a90a4] transition-all">
                    {service}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100 card-hover">
              <h3 className="font-extrabold text-2xl text-gray-900 mb-8">Machining & Stamping Services</h3>
              <div className="grid grid-cols-1 gap-4">
                {['3-Axis Vertical Machining', '3-Axis CNC Machining', '4-Axis Wire EDM (11" x 14" x 19" capacity)',
                  'Fixtures and Gages', 'Jig Grinding', 'Metal Stamping – High and Low Volume',
                  'Reverse Engineering', 'Surface grinding from .0001" to 36"', 'TIG/MIG welding and brazing'].map((service) => (
                  <div key={service} className="text-sm text-gray-700 py-3 border-b border-gray-200 font-medium hover:text-[#4a90a4] hover:border-[#4a90a4] transition-all">
                    {service}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-16">
            <a
              href="/documents/Line_Card_Tri.pdf"
              download
              className="btn-primary group text-lg"
            >
              <Download className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span>Download Complete Line Card</span>
            </a>
          </div>

          <p className="text-gray-600 mt-16 text-center leading-relaxed max-w-4xl mx-auto text-lg">
            From concept through completion, Die-Mension can design, engineer, prototype, and mass produce parts
            to your exact standards. With more than 35 years of experience and ISO 9001:2015 certification with Design,
            our talented and dedicated staff will work hard to surpass your expectations.
          </p>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">Our Leadership</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#4a90a4] to-[#3d7a8b] rounded-full mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl shadow-xl p-10 card-hover flex items-start gap-6 border border-gray-100">
                <div className="flex-shrink-0">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-36 h-36 rounded-2xl object-cover ring-4 ring-gray-100"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-lg text-gray-600 mb-4 font-medium">{member.title}</p>
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center gap-2 text-[#4a90a4] hover:text-[#3d7a8b] transition-colors font-semibold group"
                  >
                    {member.email}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-white mb-4">Certifications</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#4a90a4] to-[#3d7a8b] rounded-full mx-auto mb-4"></div>
            <p className="text-gray-300 text-xl">Recognized for quality and excellence</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center text-center group">
              <div className="bg-white rounded-2xl p-8 mb-6 h-40 flex items-center justify-center w-full shadow-xl card-hover">
                <img
                  src="/images/Gemini_Generated_Image_WBENC-m7ybam7ybam7ybam.png"
                  alt="WBENC Certified"
                  className="h-24 object-contain"
                />
              </div>
              <p className="text-white font-bold text-xl mb-2">WBENC Certified</p>
              <p className="text-gray-300 text-base">Women's Business Enterprise</p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="bg-white rounded-2xl p-8 mb-6 h-40 flex items-center justify-center w-full shadow-xl card-hover">
                <img
                  src="/images/Gemini_Generated_ISO-Image_bgb7z9bgb7z9bgb7.png"
                  alt="ISO 9001:2015 Certified"
                  className="h-24 object-contain"
                />
              </div>
              <p className="text-white font-bold text-xl mb-2">ISO 9001:2015</p>
              <p className="text-gray-300 text-base">With Design</p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="bg-white rounded-2xl p-8 mb-6 h-40 flex items-center justify-center w-full shadow-xl card-hover">
                <img
                  src="/images/SCB-ISO-9001-Mark.jpg"
                  alt="SCB ISO 9001"
                  className="h-24 object-contain"
                />
              </div>
              <p className="text-white font-bold text-xl mb-2">SCB Certified</p>
              <p className="text-gray-300 text-base">Quality Management</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
