export default function EquipmentList() {
  const toolRoom = [
    '(1) Okuma Genos M560-V Machining Center',
    '(1) Hitachi H-Cut 304P wire EDM',
    '(1) Mitsubishi FX10K submersible wire EDM',
    '(1) Mitsubishi FX20K submersible wire EDM',
    '(1) Brown & Sharpe CMM',
    '(2) 12" x 24" Okamoto HYD surface grinders, fully automatic',
    '(4) 6" x 18" Harig handfed surface grinders',
    '(2) 6" x 12" Harig handfed surface grinders',
    '(2) pedestal grinders',
    '(1) Moore G-18 (No. 3) precision jig grinder with digital readout',
    '(1) 48" Bridgeport E-Z Track NC vertical milling machines',
    '(4) Southwest Industries CNC vertical milling machines',
    '(1) 48" Bridgeport variable speed (Series 1) vertical milling machines',
    '(1) 19" x 72" LeBlonde heavy duty engine lathe with quick-change tooling',
    '(1) 16" x 42" Ingalls lathe with quick-change tooling',
    '(1) American Hole Wizard radial drill press with 6\' x 13" column',
    '(1) American Hole Wizard radial drill press with 3\' x 11" column',
    '(3) 24" x 36" handfed drill presses',
    '(1) 36" DoAll contour bandsaw',
    '(1) 20" DoAll contour bandsaw',
    '(1) WS Wells 9" x 19" automatic cut-off saw',
    '(1) 4" cut-off saw',
    '(1) 50 Ton arbor press',
    '(1) Sunnen honing machine with tooling',
    '(1) Producto tapping bench',
    '(1) Miller CP-200 MIG welder',
    '(1) Lincoln 250 amp TIG welder',
    '(1) Sherr-Tumico 14" vertical beam optical comparator with digital readout',
    '(1) Trin-Mac 24" x 36" glass bead blasting machine',
    'Surface grinding from .0001" to 36", jig, flat, and form'
  ];

  const pressRoom = [
    '(1) 400 Ton SSDC Minster stamping press with 64" x 72" bed with feed line, large stroke up to 14", air cushioned',
    '(1) 200 Ton SSDC Bliss stamping press with 42" x 72" bed with feed line',
    '(1) 200 Ton SSDC Bliss stamping press with 36" x 42" bed with feed line',
    '(1) 110 Ton Niagara OBI stamping press with 32" x 48" bed with feed line',
    '(1) 90 Ton Niagara OBI stamping press with 25" x 39" bed with feed line',
    '(2) 45 Ton SSDC Minster stamping presses with 18" x 36" bed with feed lines',
    '(1) 45 Ton SSDC L & J stamping press with 18" x 30" bed with feed line'
  ];

  return (
    <div>
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="equipment list"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-dm-dark/50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-white text-5xl lowercase">equipment list</h1>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-separator"></div>
            <h2 className="text-3xl text-dm-dark text-center">TOOL ROOM</h2>
            <div className="flex-1 h-px bg-separator"></div>
          </div>

          <ul className="space-y-3 text-dm-body">
            {toolRoom.map((item, index) => (
              <li key={index} className="flex gap-3">
                <span className="text-gold-dark">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 px-6 bg-surface-off">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-separator"></div>
            <h2 className="text-3xl text-dm-dark text-center">PRESS ROOM</h2>
            <div className="flex-1 h-px bg-separator"></div>
          </div>

          <ul className="space-y-3 text-dm-body">
            {pressRoom.map((item, index) => (
              <li key={index} className="flex gap-3">
                <span className="text-gold-dark">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 px-6 bg-dm-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl mb-4">EXPERIENCED. COMMITTED. DEDICATED.</h2>
          <p className="text-2xl text-gold">
            CALL DIE-MENSION TODAY!{' '}
            <a href="tel:3302735872" className="hover:text-gold-light transition-colors">
              330-273-5872
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
