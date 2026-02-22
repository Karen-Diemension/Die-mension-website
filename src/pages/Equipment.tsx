import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type EquipmentCategory = 'all' | 'toolroom' | 'pressroom';

interface EquipmentItem {
  name: string;
  category: 'toolroom' | 'pressroom';
  specs: string[];
  image: string;
}

export default function Equipment() {
  const [activeFilter, setActiveFilter] = useState<EquipmentCategory>('all');

  const equipment: EquipmentItem[] = [
    {
      name: 'CNC Vertical Machining Center',
      category: 'toolroom',
      specs: ['40" x 20" x 25" travels', '15,000 RPM spindle', '24-tool changer'],
      image: '/images/equipment-1.jpg'
    },
    {
      name: 'Wire EDM',
      category: 'toolroom',
      specs: ['16" x 12" x 10" capacity', '0.0001" accuracy', 'Automatic threading'],
      image: '/images/equipment-2.jpg'
    },
    {
      name: 'Sinker EDM',
      category: 'toolroom',
      specs: ['20" x 16" x 12" capacity', 'Orbital head', 'Copper & graphite'],
      image: '/images/equipment-3.jpg'
    },
    {
      name: 'CNC Lathe',
      category: 'toolroom',
      specs: ['12" chuck', '20" swing', 'Live tooling'],
      image: '/images/equipment-4.jpg'
    },
    {
      name: 'Surface Grinder',
      category: 'toolroom',
      specs: ['18" x 36" capacity', 'Auto feed', 'Magnetic chuck'],
      image: '/images/equipment-5.jpg'
    },
    {
      name: 'Jig Grinder',
      category: 'toolroom',
      specs: ['12" x 18" travels', '0.00005" resolution', 'Rotary table'],
      image: '/images/equipment-6.jpg'
    },
    {
      name: '150 Ton Hydraulic Press',
      category: 'pressroom',
      specs: ['24" x 36" bed', '12" stroke', 'Programmable controls'],
      image: '/images/equipment-7.jpg'
    },
    {
      name: '75 Ton Mechanical Press',
      category: 'pressroom',
      specs: ['18" x 24" bed', '8" stroke', 'Die cushion'],
      image: '/images/equipment-8.jpg'
    },
    {
      name: '300 Ton Transfer Press',
      category: 'pressroom',
      specs: ['48" x 60" bed', '16" stroke', 'Automated transfer'],
      image: '/images/equipment-9.jpg'
    },
    {
      name: '50 Ton Gap Press',
      category: 'pressroom',
      specs: ['15" throat depth', '6" stroke', 'Adjustable bed'],
      image: '/images/equipment-10.jpg'
    },
    {
      name: 'Stamping Press Line',
      category: 'pressroom',
      specs: ['100 SPM', 'Coil feed system', 'Progressive dies'],
      image: '/images/equipment-11.jpg'
    },
    {
      name: 'Hydraulic Trim Press',
      category: 'pressroom',
      specs: ['200 ton capacity', '30" x 40" bed', 'Quick die change'],
      image: '/images/equipment-12.jpg'
    }
  ];

  const filteredEquipment = activeFilter === 'all'
    ? equipment
    : equipment.filter(item => item.category === activeFilter);

  return (
    <div className="pt-20">
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/equipment-hero.jpg"
            alt="Equipment Inventory"
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
            Equipment
          </h1>
          <p className="text-xl text-accent-gold font-body">
            State-of-the-art machinery for precision manufacturing
          </p>
        </motion.div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center gap-4 mb-16"
          >
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                activeFilter === 'all'
                  ? 'bg-accent-gold text-near-black shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Equipment
            </button>
            <button
              onClick={() => setActiveFilter('toolroom')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                activeFilter === 'toolroom'
                  ? 'bg-accent-gold text-near-black shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Tool Room
            </button>
            <button
              onClick={() => setActiveFilter('pressroom')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                activeFilter === 'pressroom'
                  ? 'bg-accent-gold text-near-black shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Press Room
            </button>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-3 gap-8"
            >
              {filteredEquipment.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        item.category === 'toolroom'
                          ? 'bg-blue-500 text-white'
                          : 'bg-orange-500 text-white'
                      }`}>
                        {item.category === 'toolroom' ? 'Tool Room' : 'Press Room'}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-heading font-bold text-near-black mb-4">
                      {item.name}
                    </h3>
                    <ul className="space-y-2">
                      {item.specs.map((spec, specIndex) => (
                        <li key={specIndex} className="flex items-start gap-2 text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent-gold mt-1.5 flex-shrink-0"></div>
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
