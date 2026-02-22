import { motion } from 'framer-motion';
import { Briefcase, DollarSign, Heart, GraduationCap, Clock, FileText } from 'lucide-react';

export default function Careers() {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Competitive Pay',
      description: 'Industry-leading compensation packages'
    },
    {
      icon: Heart,
      title: 'Health Benefits',
      description: 'Comprehensive medical, dental, and vision coverage'
    },
    {
      icon: GraduationCap,
      title: 'Training Programs',
      description: 'Ongoing professional development and skill training'
    },
    {
      icon: Clock,
      title: 'Paid Time Off',
      description: 'Generous vacation and holiday schedule'
    }
  ];

  return (
    <div className="pt-20">
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/careers-hero.jpg"
            alt="Career Opportunities"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-near-black/70"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-6xl font-heading font-bold text-white mb-4">
            Join Our Team
          </h1>
          <p className="text-xl text-accent-gold font-body">
            Build your career with a leader in precision manufacturing
          </p>
        </motion.div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading font-bold text-near-black mb-6">
              Why Die-Mension?
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              At Die-Mension Corporation, we believe our employees are our greatest asset.
              We foster a culture of excellence, innovation, and continuous improvement while
              providing the resources and support needed for career growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-gold/20 mb-4">
                  <benefit.icon className="w-8 h-8 text-accent-gold" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 rounded-lg p-8 md:p-12 shadow-lg"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent-gold">
                  <Briefcase className="w-6 h-6 text-near-black" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-heading font-bold text-near-black mb-2">
                  Press Set-Up / Operator
                </h3>
                <p className="text-accent-gold font-semibold">Full-Time Position</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-heading font-semibold text-near-black mb-3">
                  Position Overview
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  We are seeking an experienced Press Set-Up Operator to join our production team.
                  The ideal candidate will have expertise in setting up and operating stamping presses,
                  with a strong focus on quality and safety.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-heading font-semibold text-near-black mb-3">
                  Key Responsibilities
                </h4>
                <ul className="space-y-2">
                  {[
                    'Set up and operate hydraulic and mechanical presses (50-300 ton)',
                    'Read and interpret blueprints and work orders',
                    'Perform quality inspections using precision measuring instruments',
                    'Troubleshoot and resolve production issues',
                    'Maintain safe work environment and follow all safety protocols',
                    'Perform routine maintenance and die changes',
                    'Document production data and maintain accurate records'
                  ].map((responsibility, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-gold mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-heading font-semibold text-near-black mb-3">
                  Qualifications
                </h4>
                <ul className="space-y-2">
                  {[
                    '3+ years of experience in press operations',
                    'Strong mechanical aptitude and problem-solving skills',
                    'Proficiency with measuring tools (calipers, micrometers, gauges)',
                    'Ability to read blueprints and technical drawings',
                    'Fork lift certification preferred',
                    'High school diploma or equivalent required'
                  ].map((qualification, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-gold mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{qualification}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-heading font-semibold text-near-black mb-3">
                  Benefits Package
                </h4>
                <ul className="space-y-2">
                  {[
                    'Competitive hourly wage based on experience',
                    'Comprehensive health, dental, and vision insurance',
                    '401(k) retirement plan with company match',
                    'Paid vacation and holidays',
                    'Ongoing training and advancement opportunities',
                    'Safety equipment and uniforms provided'
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-gold mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="pt-6"
              >
                <a
                  href="/documents/application.pdf"
                  download
                  className="inline-flex items-center gap-3 px-8 py-4 bg-accent-gold text-near-black font-semibold rounded-lg hover:bg-accent-gold/90 transition-colors"
                >
                  <FileText className="w-5 h-5" />
                  Download Application (PDF)
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 bg-near-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-heading font-bold mb-6">
              Ready to Apply?
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Submit your completed application along with your resume to our HR department.
              We look forward to hearing from you!
            </p>
            <p className="text-accent-gold font-semibold">
              Die-Mension Corporation is an Equal Opportunity Employer
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
