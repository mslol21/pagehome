import Link from 'next/link';
import ScrollAnimation from '../ui/ScrollAnimation';

export default function CTA() {
  return (
    <section className="py-[100px] flex justify-center px-5 bg-gradient-to-b from-[#EEF2FF] to-white relative overflow-hidden" id="contato">
+      {/* Bottom transition mask for Footer */}
+      <div className="absolute bottom-0 left-0 right-0 h-[150px] bg-gradient-to-t from-[#050505] to-transparent pointer-events-none opacity-20" />
+
      <div id="demo" className="absolute -top-20" />
      <ScrollAnimation className="w-full max-w-[1200px] h-auto md:h-[579px] bg-[#E8F0FF] rounded-[40px] relative overflow-hidden flex items-center">
        {/* Content Container */}
        <div className="w-full md:w-1/2 px-10 md:pl-[80px] py-10 z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 text-[#0066FF] mb-6">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7.75 12L10.58 14.83L16.25 9.17004" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="font-semibold">Recursos</span>
          </div>

          {/* Heading */}
          <h2 className="text-[40px] md:text-[48px] font-bold leading-[1.1] text-[#1a1a1a] mb-6 tracking-tight">
            Pronto para transformar o<br />
            RH da sua empresa?
          </h2>

          {/* Subtitle */}
          <p className="text-[#4a5568] text-lg mb-10 max-w-[480px] leading-relaxed">
            Agende uma demonstração gratuita e veja como o Holerite
            Digital pode revolucionar seus processos.
          </p>

          {/* Button */}
          <Link
            href="#demo"
            className="inline-flex items-center gap-2 bg-[#0055FF] text-white px-8 py-4 rounded-full font-bold text-base hover:bg-blue-700 transition-all group"
          >
            Agendar demonstração
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-4-4l4 4-4 4"/>
            </svg>
          </Link>
        </div>

        {/* Image Side */}
        <div className="hidden md:block absolute right-[-50px] top-[50px] bottom-[-50px] w-1/2 h-full z-0">
           {/* Placeholder for the Hand Holding Phone image. 
               Since we don't have the exact PNG, I'll create a CSS representation or use an SVG 
               that mimics the hand/phone placement to fill the space visually. */}
           <div className="relative w-full h-[120%] -translate-y-[10%] translate-x-[10%]">
              {/* This mimics the hand image area */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="data:image/svg+xml,%3Csvg width='600' height='800' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='screen' x1='0' y1='0' x2='100%25' y2='100%25'%3E%3Cstop offset='0' stop-color='%230055FF'/%3E%3Cstop offset='1' stop-color='%230033CC'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg transform='rotate(-15 300 400)'%3E%3Crect x='150' y='100' width='300' height='600' rx='40' fill='%231a1a1a'/%3E%3Crect x='160' y='110' width='280' height='580' rx='35' fill='url(%23screen)'/%3E%3Cpath d='M250 125 h100 a10 10 0 0 1 10 10 v20 a10 10 0 0 1 -10 10 h-100 a10 10 0 0 1 -10 -10 v-20 a10 10 0 0 1 10 -10' fill='%23000'/%3E%3Ctext x='300' y='400' font-family='Arial' font-weight='bold' font-size='24' fill='white' text-anchor='middle'%3EHolerite digital%3C/text%3E%3C/g%3E%3C/svg%3E" 
                alt="Holerite Digital App" 
                className="w-full h-full object-contain object-center drop-shadow-2xl"
              />
           </div>
        </div>
      </ScrollAnimation>
    </section>
  );
}
