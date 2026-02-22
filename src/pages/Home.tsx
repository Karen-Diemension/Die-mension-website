import { motion } from 'framer-motion';
import { Target, Users, Award } from 'lucide-react';

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  const teamMembers = [
    {
      name: 'John Smith',
      title: 'Operations Manager',
      image: '/images/team-1.jpg'
    },
    {
      name: 'Sarah Johnson',
      title: 'Lead Engineer',
      image: '/images/team-2.jpg'
    },
    {
      name: 'Michael Chen',
      title: 'Quality Control',
      image: '/images/team-3.jpg'
    },
    {
      name: 'Emily Davis',
      title: 'Production Supervisor',
      image: '/images/team-4.jpg'
    }
  ];

  return (
    <div className="pt-20">
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero.jpg"
            alt="Die-Mension Manufacturing Facility"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-near-black/60"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="relative z-10 text-center px-6"
        >
          <motion.h1
            className="text-6xl md:text-7xl font-heading font-bold text-white mb-6 tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Die-Mension Corporation
          </motion.h1>
          <motion.p
            className="text-2xl md:text-3xl text-accent-gold font-body font-light tracking-wider"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Experienced. Committed. Dedicated.
          </motion.p>
        </motion.div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp}>
            <h2 className="text-5xl font-heading font-bold text-near-black mb-8 text-center">
              About Us
            </h2>
            <div className="h-1 w-24 bg-accent-gold mx-auto mb-12"></div>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="grid md:grid-cols-3 gap-12 mb-16"
          >
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-gold/20 mb-6">
                <Target className="w-8 h-8 text-accent-gold" />
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-4">Precision</h3>
              <p className="text-gray-700 leading-relaxed">
                State-of-the-art CNC and EDM technology ensures micron-level accuracy in every component we manufacture.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-gold/20 mb-6">
                <Award className="w-8 h-8 text-accent-gold" />
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-4">Quality</h3>
              <p className="text-gray-700 leading-relaxed">
                Rigorous quality control processes and ISO-certified standards guarantee excellence in every project.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-gold/20 mb-6">
                <Users className="w-8 h-8 text-accent-gold" />
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-4">Experience</h3>
              <p className="text-gray-700 leading-relaxed">
                Decades of expertise in tool and die manufacturing, serving diverse industries with custom solutions.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Die-Mension Corporation is a premier provider of precision manufacturing solutions.
              With advanced capabilities in CNC machining, EDM, and reverse engineering, we deliver
              exceptional quality tooling and components to industries worldwide.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our commitment to innovation, coupled with decades of experience, positions us as a
              trusted partner for complex manufacturing challenges. From prototype to production,
              we maintain the highest standards of precision and quality.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-heading font-bold text-near-black mb-8 text-center">
              Our Team
            </h2>
            <div className="h-1 w-24 bg-accent-gold mx-auto mb-16"></div>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg mb-4 aspect-square">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-near-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-heading font-semibold text-near-black mb-1">
                  {member.name}
                </h3>
                <p className="text-accent-gold font-body">{member.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
