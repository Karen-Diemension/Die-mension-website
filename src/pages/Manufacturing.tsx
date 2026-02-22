import { motion } from 'framer-motion';
import { Cog, Zap, RotateCcw } from 'lucide-react';

export default function Manufacturing() {
  const capabilities = [
    {
      icon: Cog,
      title: 'CNC Machining',
      description: 'Advanced CNC capabilities delivering precision components',
      details: [
        'Multi-axis CNC milling and turning',
        'Tight tolerance machining (±0.0001")',
        'Production and prototype runs',
        'Wide range of materials including exotic alloys',
        'CAD/CAM programming and optimization',
        'In-process inspection and quality control'
      ],
      image: '/images/cnc-machine.jpg'
    },
    {
      icon: Zap,
      title: 'EDM (Electrical Discharge Machining)',
      description: 'Precision EDM for complex geometries and hard materials',
      details: [
        'Wire EDM for intricate contours',
        'Sinker EDM for complex cavities',
        'Small hole drilling capabilities',
        'Machining of hardened materials',
        'Surface finishes to 8 micro-inches',
        'Prototype through production volumes'
      ],
      image: '/images/edm-machine.jpg'
    },
    {
      icon: RotateCcw,
      title: 'Reverse Engineering',
      description: 'Complete reverse engineering and replication services',
      details: [
        'CMM inspection and measurement',
        '3D scanning and modeling',
        'Legacy part reproduction',
        'Design optimization and improvement',
        'Material analysis and specification',
        'Complete documentation and drawings'
      ],
      image: '/images/reverse-engineering.jpg'
    }
  ];

  return (
    <div className="pt-20">
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/manufacturing-hero.jpg"
            alt="Manufacturing Capabilities"
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
            Manufacturing Capabilities
          </h1>
          <p className="text-xl text-accent-gold font-body">
            Precision manufacturing solutions for demanding applications
          </p>
        </motion.div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid md:grid-cols-2 gap-12 items-center mb-32 last:mb-0 ${
                index % 2 === 1 ? 'md:grid-flow-dense' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-gold/20 mb-6">
                  <capability.icon className="w-8 h-8 text-accent-gold" />
                </div>
                <h2 className="text-4xl font-heading font-bold text-near-black mb-4">
                  {capability.title}
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  {capability.description}
                </p>
                <ul className="space-y-3">
                  {capability.details.map((detail, detailIndex) => (
                    <motion.li
                      key={detailIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + detailIndex * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-gold mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{detail}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className={`relative h-[500px] rounded-lg overflow-hidden shadow-2xl ${
                  index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''
                }`}
              >
                <img
                  src={capability.image}
                  alt={capability.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-near-black/40 to-transparent"></div>
              </motion.div>
            </motion.div>
          ))}
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
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Our team of experts is ready to discuss your manufacturing needs and
              provide tailored solutions for your most challenging projects.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-accent-gold text-near-black font-semibold rounded-lg hover:bg-accent-gold/90 transition-colors"
            >
              Request a Quote
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
