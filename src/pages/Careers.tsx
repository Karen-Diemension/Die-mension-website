import { Download } from 'lucide-react';

export default function Careers() {
  const responsibilities = [
    'Set up and operate stamping presses (single hit and progressive dies) and other production equipment for part forming, shaping, and stamping',
    'Manage coil and strip material with cranes, hoists, or tow motors, as needed',
    'Verify parts meet specifications before starting production or handing off job to another operator',
    'Maintain a clean and safe work environment according to company policies and standards',
    'Set up scrap chute arrangements',
    'Read and interpret blueprints',
    'Maintain quality standards are met through regular inspections',
    'Troubleshoot mechanical issues as they arise'
  ];

  const qualifications = [
    'Advanced capabilities and skills with stamping presses, associated tooling, and other production equipment preferred',
    'Advanced understanding of blueprints and parts inspection methods (e.g., verifying part measurements agree to blueprints), preferred',
    'Ability to perform visual inspections and identify defects, determine their root causes, deploy containment plans, and recommend solutions',
    'Troubleshoot mechanical issues as they arise',
    'Excellent communication skills'
  ];

  const proficiencies = [
    'Machine Setups for Production Runs',
    'Metal Stamping Tools & Die Setup Experience',
    'Blueprint Reading',
    'Quality Inspection Experience',
    'Mechanical Troubleshooting Skills',
    'Machine Safety Inspections',
    'Tow Motor Operation',
    'Excellent Communication Skills'
  ];

  const benefits = [
    '100% Company Paid Medical, Dental, Vision and Life Insurance',
    '(9) Paid Holidays',
    '(1) Week Vacation after one year, (2) Weeks\' Vacation after two years',
    'Profit Sharing',
    '401k with 3% Match',
    'Weekends off'
  ];

  return (
    <div>
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-extrabold text-dm-dark mb-4">Seeking Press Set Up / Operator</h1>
            <div className="h-1 w-24 bg-gradient-to-r from-[#4a90a4] to-[#3d7a8b] rounded-full mx-auto"></div>
          </div>

          <div className="bg-gradient-to-br from-[#4a90a4]/10 to-[#3d7a8b]/10 p-10 rounded-2xl mb-12 border-2 border-[#4a90a4]/20">
            <div className="flex flex-wrap gap-8 text-dm-body mb-6 justify-center">
              <div className="text-lg">
                <span className="font-bold">Job Type:</span> <span className="font-semibold">Full-Time</span>
              </div>
              <div className="text-lg">
                <span className="font-bold">Pay:</span> <span className="font-semibold">Competitive, Negotiable</span>
              </div>
            </div>
            <p className="text-dm-body text-lg text-center">
              <span className="font-bold">Email completed application to:</span>{' '}
              <a href="mailto:karen@diemension.com" className="text-[#4a90a4] hover:text-[#3d7a8b] font-bold transition-colors">
                karen@diemension.com
              </a>
            </p>
          </div>

          <div className="space-y-10">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-3xl font-extrabold text-dm-dark mb-6">Overview</h2>
              <p className="text-dm-body leading-relaxed text-lg">
                Die-Mension Corporation is seeking an experienced Press Set-Up / Operator to set up presses and
                tooling for production for a variety of metal stamping jobs. The ideal candidate will have
                experience in machine setups, blueprint reading, and quality inspection. If performance and growth
                meet expectations, there is a clear path to a management role with increased strategic oversight and
                compensation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-3xl font-extrabold text-dm-dark mb-6">Responsibilities</h2>
              <ul className="space-y-4">
                {responsibilities.map((item, index) => (
                  <li key={index} className="flex gap-3 text-dm-body text-lg">
                    <span className="text-[#4a90a4] flex-shrink-0 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-3xl font-extrabold text-dm-dark mb-6">Qualifications</h2>
              <ul className="space-y-4">
                {qualifications.map((item, index) => (
                  <li key={index} className="flex gap-3 text-dm-body text-lg">
                    <span className="text-[#4a90a4] flex-shrink-0 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-3xl font-extrabold text-dm-dark mb-6">Proficiencies</h2>
              <ul className="grid md:grid-cols-2 gap-4">
                {proficiencies.map((item, index) => (
                  <li key={index} className="flex gap-3 text-dm-body text-lg">
                    <span className="text-[#4a90a4] flex-shrink-0 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-3xl font-extrabold text-dm-dark mb-4">Machines & Technologies</h2>
              <p className="text-dm-body text-lg font-medium">Stamping Press (Bliss, Minster)</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-3xl font-extrabold text-dm-dark mb-6">Benefits</h2>
              <ul className="space-y-4">
                {benefits.map((item, index) => (
                  <li key={index} className="flex gap-3 text-dm-body text-lg">
                    <span className="text-[#4a90a4] flex-shrink-0 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8 text-center">
              <a
                href="/documents/ApplicationforEmploymentpg1,2,3,4.pdf"
                download
                className="btn-primary text-lg group"
              >
                <Download className="w-6 h-6 group-hover:scale-110 transition-transform" />
                DOWNLOAD APPLICATION (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
