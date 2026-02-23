export default function ContactUs() {
  return (
    <div>
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Contact Die-Mension"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-dm-dark/60"></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-white text-4xl md:text-5xl mb-8 max-w-3xl mx-auto">
            Trust Die-Mension for your tooling, machine & stamping needs
          </h1>
          <a
            href="mailto:karen@diemension.com"
            className="inline-block px-10 py-4 border-2 border-dm-dark bg-white text-dm-dark font-source uppercase tracking-button text-sm hover:bg-dm-dark hover:text-white transition-all rounded-full"
          >
            CONTACT OUR SALES TEAM / RFQ
          </a>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-dm-body space-y-4">
            <p className="text-2xl font-semibold text-dm-dark">DIE-MENSION CORPORATION</p>
            <p className="text-lg">3020 Nationwide Parkway</p>
            <p className="text-lg">Brunswick, Ohio 44212</p>
            <div className="pt-6 space-y-2">
              <p>
                <span className="font-semibold">Phone:</span>{' '}
                <a href="tel:3302735872" className="text-gold-dark hover:text-gold-darker transition-colors">
                  (330) 273-5872
                </a>
              </p>
              <p>
                <span className="font-semibold">Fax:</span> 330-273-8275
              </p>
              <p>
                <span className="font-semibold">Email:</span>{' '}
                <a href="mailto:email@diemension.com" className="text-gold-dark hover:text-gold-darker transition-colors">
                  email@diemension.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
