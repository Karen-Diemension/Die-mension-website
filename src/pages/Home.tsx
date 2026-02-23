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
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <img
          src="/images/IMG_9770.jpeg"
          alt="Die-Mension Corporation Headquarters"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-12">
          <h1 className="text-white text-5xl md:text-6xl font-bold mb-4 max-w-3xl">
            Precision Engineering Since 1986
          </h1>
          <p className="text-white/95 text-xl mb-8 max-w-2xl">
            Expert tool and die design, build & repair, precision machining, and metal stampings
          </p>
          <button className="bg-[#4a90a4] hover:bg-[#3d7a8b] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg">
            Request a Quote
          </button>
        </div>
      </section>

      <section className="bg-gray-900 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-3 divide-x divide-gray-700">
            <div className="flex flex-col items-center justify-center gap-2">
              <Clock className="w-10 h-10 text-[#4a90a4] mb-1" />
              <h3 className="text-white text-3xl font-bold">35+ Years</h3>
              <p className="text-gray-400 text-sm">Experience</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <Shield className="w-10 h-10 text-[#4a90a4] mb-1" />
              <h3 className="text-white text-3xl font-bold">ISO 9001:2015</h3>
              <p className="text-gray-400 text-sm">Certified</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <Award className="w-10 h-10 text-[#4a90a4] mb-1" />
              <h3 className="text-white text-3xl font-bold">WBENC</h3>
              <p className="text-gray-400 text-sm">Certified</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">About Us</h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="border-l-4 border-[#4a90a4] pl-6">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">35 Years of Precision Engineering Excellence</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Since 1986, Die-Mension Corporation has been the trusted partner for high-quality metal stamping dies,
                precision machined components, and metal stampings.
              </p>
            </div>

            <div className="space-y-6 text-gray-600 leading-relaxed">
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

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Capabilities</h2>
          <p className="text-gray-600 mb-12 text-lg">
            Our range of expertise in tool and die, machining, and metal stamping
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="font-bold text-xl text-gray-900 mb-6">Die Build and Repair Services</h3>
              <div className="grid grid-cols-2 gap-3">
                {['Blank Dies', 'Compound Dies', 'Die Design', 'Form Dies', 'Line Dies', 'Pierce Dies',
                  'Preventative Tool Maintenance', 'Progressive Dies', 'Prototyping', 'Secondary Dies',
                  'Single Hit Dies', 'Transfer Dies'].map((service) => (
                  <div key={service} className="text-sm text-gray-600 py-2 border-b border-gray-200">
                    {service}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-xl text-gray-900 mb-6">Machining & Stamping Services</h3>
              <div className="grid grid-cols-1 gap-3">
                {['3-Axis Vertical Machining', '3-Axis CNC Machining', '4-Axis Wire EDM (11" x 14" x 19" capacity)',
                  'Fixtures and Gages', 'Jig Grinding', 'Metal Stamping – High and Low Volume',
                  'Reverse Engineering', 'Surface grinding from .0001" to 36"', 'TIG/MIG welding and brazing'].map((service) => (
                  <div key={service} className="text-sm text-gray-600 py-2 border-b border-gray-200">
                    {service}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <a
              href="/documents/Line_Card_Tri.pdf"
              download
              className="inline-flex items-center gap-2 bg-[#4a90a4] hover:bg-[#3d7a8b] text-white px-6 py-3 rounded-md font-semibold transition-colors"
            >
              <Download className="w-5 h-5" />
              <span>Download Complete Line Card</span>
            </a>
          </div>

          <p className="text-gray-600 mt-12 text-center leading-relaxed max-w-4xl mx-auto">
            From concept through completion, Die-Mension can design, engineer, prototype, and mass produce parts
            to your exact standards. With more than 35 years of experience and ISO 9001:2015 certification with Design,
            our talented and dedicated staff will work hard to surpass your expectations.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Our Leadership</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow flex items-start gap-6">
                <div className="flex-shrink-0">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-2xl object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-lg text-gray-600 mb-4">{member.title}</p>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-[#4a90a4] hover:text-[#3d7a8b] transition-colors font-medium"
                  >
                    {member.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Certifications</h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="bg-white rounded-xl p-6 mb-4 h-32 flex items-center justify-center w-full">
                <img
                  src="/images/Gemini_Generated_Image_WBENC-m7ybam7ybam7ybam.png"
                  alt="WBENC Certified"
                  className="h-20 object-contain"
                />
              </div>
              <p className="text-white font-semibold">WBENC Certified</p>
              <p className="text-gray-400 text-sm">Women's Business Enterprise</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-white rounded-xl p-6 mb-4 h-32 flex items-center justify-center w-full">
                <img
                  src="/images/Gemini_Generated_ISO-Image_bgb7z9bgb7z9bgb7.png"
                  alt="ISO 9001:2015 Certified"
                  className="h-20 object-contain"
                />
              </div>
              <p className="text-white font-semibold">ISO 9001:2015</p>
              <p className="text-gray-400 text-sm">With Design</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-white rounded-xl p-6 mb-4 h-32 flex items-center justify-center w-full">
                <img
                  src="/images/SCB-ISO-9001-Mark.jpg"
                  alt="SCB ISO 9001"
                  className="h-20 object-contain"
                />
              </div>
              <p className="text-white font-semibold">SCB Certified</p>
              <p className="text-gray-400 text-sm">Quality Management</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
