import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    company: '',
    contactName: '',
    email: '',
    phone: '',
    material: '',
    quantity: '',
    description: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));

      console.log('RFQ Submission:', formData);

      setSubmitStatus('success');
      setFormData({
        company: '',
        contactName: '',
        email: '',
        phone: '',
        material: '',
        quantity: '',
        description: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="pt-20">
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/contact-hero.jpg"
            alt="Contact Us"
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
            Contact Us
          </h1>
          <p className="text-xl text-accent-gold font-body">
            Let's discuss your manufacturing needs
          </p>
        </motion.div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-heading font-bold text-near-black mb-8">
                Request for Quote
              </h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Fill out the form below with details about your project, and our team will
                respond promptly with a comprehensive quote tailored to your specifications.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-accent-gold/20 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-accent-gold" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-1">Location</h3>
                    <p className="text-gray-700">
                      123 Industrial Drive<br />
                      Manufacturing City, ST 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-accent-gold/20 flex items-center justify-center">
                      <Phone className="w-6 h-6 text-accent-gold" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-1">Phone</h3>
                    <p className="text-gray-700">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-accent-gold/20 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-accent-gold" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-1">Email</h3>
                    <p className="text-gray-700">info@die-mension.com</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-near-black mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="contactName" className="block text-sm font-semibold text-near-black mb-2">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    name="contactName"
                    required
                    value={formData.contactName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-near-black mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-near-black mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="material" className="block text-sm font-semibold text-near-black mb-2">
                      Material *
                    </label>
                    <input
                      type="text"
                      id="material"
                      name="material"
                      required
                      value={formData.material}
                      onChange={handleChange}
                      placeholder="e.g., Steel, Aluminum"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="quantity" className="block text-sm font-semibold text-near-black mb-2">
                      Quantity *
                    </label>
                    <input
                      type="text"
                      id="quantity"
                      name="quantity"
                      required
                      value={formData.quantity}
                      onChange={handleChange}
                      placeholder="e.g., 1000 units"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-semibold text-near-black mb-2">
                    Project Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={5}
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Provide details about your project requirements..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-transparent outline-none transition-all resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-accent-gold text-near-black font-semibold rounded-lg hover:bg-accent-gold/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Submit Request</span>
                    </>
                  )}
                </motion.button>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-100 text-green-800 rounded-lg text-center"
                  >
                    Thank you! We'll respond to your quote request shortly.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-100 text-red-800 rounded-lg text-center"
                  >
                    Something went wrong. Please try again or contact us directly.
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
