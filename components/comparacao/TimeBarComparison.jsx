import Link from 'next/link';
import ScrollAnimation from '../ui/ScrollAnimation';

export default function TimeBarComparison() {
  return (
    <section className="bg-[#F8F8FE] py-[60px] flex justify-center w-full" id="direto-ao-ponto">
      <div className="max-w-[1244px] w-full px-[48px] flex flex-col items-center min-h-[855px]">
        
        {/* Badge & Title */}
        <ScrollAnimation className="text-center mb-[80px]">
          <div className="inline-flex items-center gap-2 text-[#0066FF] mb-5 font-semibold text-sm">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z" fill="currentColor"/>
            </svg>
            Comparação
          </div>
          <h2 className="text-[40px] md:text-[56px] font-bold mb-[20px] text-[#1a1a1a] leading-tight tracking-tight">
            De 21 horas para apenas 20 minutos
          </h2>
          <p className="text-[#4a5568] text-lg max-w-[700px] mx-auto leading-relaxed font-medium">
            O Holerite Digital reduz drasticamente o tempo gasto com a distribuição de holerites.
          </p>
        </ScrollAnimation>

        {/* Comparison Bars Area */}
        <div className="w-full max-w-[1000px] space-y-12 mb-16">
          
          {/* Processo Manual */}
          <ScrollAnimation delay={0.1} className="space-y-4">
             <div className="flex items-center gap-2 text-red-500 font-bold text-xl uppercase tracking-tight">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                Processo Manual
             </div>
             <div className="h-[80px] w-full bg-[#FF0000] rounded-[16px] relative flex items-center justify-end px-8 shadow-lg shadow-red-100">
                <div className="flex items-center gap-4 text-white">
                   <span className="text-5xl font-black">+21</span>
                   <div className="text-sm font-bold uppercase leading-tight">Horas<br/>por mês</div>
                </div>
             </div>
          </ScrollAnimation>

          {/* Holerite Digital */}
          <ScrollAnimation delay={0.2} className="space-y-4">
             <div className="flex items-center gap-2 text-[#0055FF] font-bold text-xl uppercase tracking-tight">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14H12V22L22 10H13V2Z" fill="currentColor"/></svg>
                Holerite Digital
             </div>
             <div className="h-[80px] w-full bg-[#E5EEFF] rounded-[16px] relative flex items-center overflow-hidden shadow-sm">
                <div className="h-full w-[30px] bg-[#0055FF]" />
                <div className="absolute right-8 flex items-center gap-4 text-[#0055FF]">
                   <span className="text-5xl font-black">20</span>
                   <div className="text-sm font-bold uppercase leading-tight">Minutos</div>
                </div>
             </div>
          </ScrollAnimation>

          {/* Economia de Tempo Card */}
          <ScrollAnimation delay={0.3} className="pt-8">
             <div className="flex items-center gap-2 text-[#10B981] font-bold text-xl uppercase tracking-tight mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                Economia de tempo
             </div>
             <div className="w-full rounded-[24px] border-2 border-[#10B981] p-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-[80px] font-black text-[#10B981] leading-none">
                   97%
                </div>
                <div className="text-right max-w-[400px]">
                   <p className="text-[28px] md:text-[32px] font-bold text-[#10B981] leading-tight">
                      Redução no tempo necessário para distribuir holerites
                   </p>
                </div>
             </div>
          </ScrollAnimation>

        </div>

        {/* CTA Button */}
        <ScrollAnimation delay={0.4}>
           <Link
             href="#cta"
             className="bg-[#0055FF] text-white px-10 py-5 rounded-full font-bold text-lg flex items-center gap-3 hover:bg-[#0044CC] transition-all group shadow-xl shadow-blue-100"
           >
             Clique para aumentar sua produtividade
             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"><path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
           </Link>
        </ScrollAnimation>
        
      </div>
    </section>
  );
}
