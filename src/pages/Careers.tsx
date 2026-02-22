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
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="flex-1 h-px bg-separator"></div>
            <h1 className="text-4xl text-dm-dark text-center">seeking Press set up/Operator</h1>
            <div className="flex-1 h-px bg-separator"></div>
          </div>

          <div className="bg-surface-off p-8 rounded-lg mb-8">
            <div className="flex flex-wrap gap-6 text-dm-body mb-6">
              <div>
                <span className="font-semibold">Job Type:</span> Fulltime
              </div>
              <div>
                <span className="font-semibold">Pay:</span> Competitive, Negotiable
              </div>
            </div>
            <p className="text-dm-body">
              <span className="font-semibold">Email completed application to:</span>{' '}
              <a href="mailto:karen@diemension.com" className="text-gold-dark hover:text-gold-darker transition-colors">
                karen@diemension.com
              </a>
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl text-dm-dark mb-4">Overview</h2>
              <p className="text-dm-body leading-relaxed">
                Die-Mension Corporation is seeking an experienced Press Set-Up / Operator to set up presses and
                tooling for production for a variety of metal stamping jobs. The ideal candidate will have
                experience in machine setups, blueprint reading, and quality inspection. If performance and growth
                meet expectations, there is a clear path to a management role with increased strategic oversight and
                compensation.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-dm-dark mb-4">Responsibilities</h2>
              <ul className="space-y-3">
                {responsibilities.map((item, index) => (
                  <li key={index} className="flex gap-3 text-dm-body">
                    <span className="text-gold-dark flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl text-dm-dark mb-4">Qualifications</h2>
              <ul className="space-y-3">
                {qualifications.map((item, index) => (
                  <li key={index} className="flex gap-3 text-dm-body">
                    <span className="text-gold-dark flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl text-dm-dark mb-4">Proficiencies</h2>
              <ul className="grid md:grid-cols-2 gap-3">
                {proficiencies.map((item, index) => (
                  <li key={index} className="flex gap-3 text-dm-body">
                    <span className="text-gold-dark flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl text-dm-dark mb-4">Machines & Technologies</h2>
              <p className="text-dm-body">Stamping Press (Bliss, Minster)</p>
            </div>

            <div>
              <h2 className="text-2xl text-dm-dark mb-4">Benefits</h2>
              <ul className="space-y-3">
                {benefits.map((item, index) => (
                  <li key={index} className="flex gap-3 text-dm-body">
                    <span className="text-gold-dark flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6">
              <a
                href="/documents/ApplicationforEmploymentpg1,2,3,4.pdf"
                download
                className="inline-flex items-center gap-3 px-8 py-4 border-2 border-dm-dark bg-white text-dm-dark font-source uppercase tracking-button text-sm hover:bg-dm-dark hover:text-white transition-all rounded-full"
              >
                <Download className="w-5 h-5" />
                DOWNLOAD APPLICATION (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
