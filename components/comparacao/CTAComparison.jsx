import Link from 'next/link';

export default function CTAComparison() {
  return (
    <section className="bg-[#F8F8FE] pt-[80px] pb-[60px] flex justify-center px-5" id="contato-comparacao">
      <div>
        
        {/* Content Container */}
        <div className="w-full md:w-1/2 px-10 md:pl-[80px] py-10 z-10 text-black">
          <div className="flex flex-col gap-[20px] max-w-[447px] min-h-[242px]">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 text-white/90 font-semibold text-sm">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="currentColor"/>
              </svg>
              <span>Pronto para começar?</span>
            </div>

            {/* Heading */}
            <h2 className="text-[36px] md:text-[48px] font-bold leading-[1.2] tracking-tight">
              Transforme o RH da<br />
              sua empresa hoje
            </h2>

            {/* Subtitle */}
            <p className="text-black/80 text-lg leading-relaxed">
              Junte-se a centenas de empresas que já automatizaram seus processos com o Holerite Digital.
            </p>
          </div>

          {/* Button - Placed outside the constrained height/gap container to maintain visual balance */}
          <div className="mt-[40px]">
            <Link
              href="#contato"
              className="inline-flex items-center gap-2 bg-[#004DFF] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-black transition-all group shadow-xl"
            >
              Falar com Especialista
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"><path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
        </div>

        {/* Right Visual Element */}
        <div className="hidden lg:flex flex-1 items-center justify-center h-full relative p-12">
            <div className="w-full h-[80%] bg-white/10 backdrop-blur-xl rounded-[32px] border border-white/20 p-8 flex flex-col justify-between shadow-2xl">
               <div className="flex justify-between items-center">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#0055FF] shadow-lg">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                  <div className="text-[10px] font-black tracking-widest uppercase opacity-40">System Active</div>
               </div>
               
               <div className="space-y-4">
                  <div className="h-2 bg-white/20 rounded-full w-full" />
                  <div className="h-2 bg-white/20 rounded-full w-5/6" />
                  <div className="h-2 bg-white/10 rounded-full w-4/6" />
               </div>
               
               <div className="flex items-end justify-between">
                  <div className="text-4xl font-black">98%</div>
                  <div className="text-right">
                     <div className="text-[10px] font-bold uppercase opacity-60">Satisfação</div>
                     <div className="text-xs font-bold">Client Rate</div>
                  </div>
               </div>
            </div>
            
            {/* Decorative background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/[0.05] rounded-full blur-[100px] -z-10" />
        </div>

      </div>
    </section>
  );
}
