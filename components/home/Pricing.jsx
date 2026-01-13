import Link from 'next/link';
import ScrollAnimation from '../ui/ScrollAnimation';

export default function Pricing() {
  return (
    <section className="flex justify-center w-full bg-gradient-to-b from-[#FDF2F8] to-[#F0F9FF] py-[100px]" id="precos">
      <div className="w-[1200px] px-[45px]">
        {/* Header */}
        <ScrollAnimation className="text-center mb-[60px]">
          <div className="inline-flex items-center gap-2 text-[#0066FF] mb-5">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7.75 12L10.58 14.83L16.25 9.17004" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="font-semibold text-sm">Investimento</span>
          </div>
          <h2 className="text-[40px] md:text-[48px] font-bold text-[#1a1a1a] mb-5 leading-tight tracking-tight">
            Comece agora mesmo
          </h2>
          <p className="text-[#4a5568] text-lg">
            Experimente gratuitamente por 1 mês ou assine nosso plano empresarial
          </p>
        </ScrollAnimation>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-[30px]">
          
          {/* Card 1: Start */}
          <ScrollAnimation delay={0.2} className="h-full">
            <div className="bg-[#e8f0ff] rounded-[32px] p-8 flex flex-col relative overflow-hidden h-full transition-transform hover:-translate-y-2 duration-300">
               <div className="flex justify-between items-start mb-6">
                   <span className="bg-white px-4 py-1.5 rounded-full font-bold text-[#1a1a1a] text-sm shadow-sm">Start</span>
                   <p className="text-right text-[11px] font-semibold text-[#1a1a1a] max-w-[100px] leading-tight">
                      *Válido para empresas com até 20 funcionários
                   </p>
               </div>
               <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-sm font-semibold text-[#1a1a1a]">R$</span>
                  <span className="text-[48px] font-bold text-[#1a1a1a] leading-none">59,80</span>
                  <span className="text-sm font-medium text-[#1a1a1a]">/Por mês</span>
               </div>

               <ul className="space-y-4 mb-10 flex-grow">
                 {[
                   'Envie até 3 documentos por funcionário por mês',
                   'Processamento automático com IA',
                   'Envio seguro via Whatsapp',
                   'Suporte dedicado',
                   'R$0,50 por documento extra'
                 ].map((item, i) => (
                   <li key={i} className="flex items-start gap-3">
                     <svg className="w-5 h-5 text-[#0066FF] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24">
                       <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
                       <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                     </svg>
                     <span className="text-[15px] font-medium text-[#1a1a1a]">{item}</span>
                   </li>
                 ))}
               </ul>

               <Link href="#contato" className="w-full py-4 rounded-full bg-[#0055FF] text-white font-bold text-center flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors">
                 Fale Conosco
                 <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
               </Link>
            </div>
          </ScrollAnimation>

          {/* Card 2: Profissional (Highlighted) */}
          <ScrollAnimation delay={0.4} className="h-full">
            <div className="bg-[#e8f0ff] rounded-[32px] p-8 flex flex-col relative overflow-hidden border-[3px] border-[#0055FF] h-full transition-transform hover:-translate-y-2 duration-300">
               <div className="flex justify-between items-start mb-6">
                   <span className="bg-[#0055FF] px-4 py-1.5 rounded-full font-bold text-white text-sm shadow-sm">Profissional</span>
                   <p className="text-right text-[11px] font-bold text-[#1a1a1a]">
                      *Mais vendido
                   </p>
               </div>
               <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-sm font-semibold text-[#1a1a1a]">R$</span>
                  <span className="text-[48px] font-bold text-[#1a1a1a] leading-none">2,99</span>
                  <span className="text-sm font-medium text-[#1a1a1a] max-w-[80px] leading-tight ml-1">Pro funcionário por mês</span>
               </div>

               <ul className="space-y-4 mb-10 flex-grow">
                 {[
                   'Envie até 3 documentos por funcionário por mês',
                   'Processamento automático com IA',
                   'Envio seguro via Whatsapp',
                   'Suporte dedicado',
                   'R$0,50 por documento extra'
                 ].map((item, i) => (
                   <li key={i} className="flex items-start gap-3">
                     <svg className="w-5 h-5 text-[#0066FF] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24">
                       <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
                       <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                     </svg>
                     <span className="text-[15px] font-medium text-[#1a1a1a]">{item}</span>
                   </li>
                 ))}
               </ul>

               <Link href="#contato" className="w-full py-4 rounded-full bg-[#0055FF] text-white font-bold text-center flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors">
                 Fale Conosco
                 <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
               </Link>
            </div>
          </ScrollAnimation>

          {/* Card 3: Empresarial */}
          <ScrollAnimation delay={0.6} className="h-full">
            <div className="bg-[#e8f0ff] rounded-[32px] p-8 flex flex-col relative overflow-hidden h-full transition-transform hover:-translate-y-2 duration-300">
               <div className="flex justify-between items-start mb-6">
                   <span className="bg-black px-4 py-1.5 rounded-full font-bold text-white text-sm shadow-sm">Empresarial</span>
               </div>
               <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-[40px] font-bold text-[#1a1a1a] leading-none tracking-tight">Sob consulta</span>
               </div>

               <ul className="space-y-4 mb-10 flex-grow">
                 {[
                   'Acima de 500 funcionários',
                   'Monte o plano ideal de acordo com as necessidades da sua empresa'
                 ].map((item, i) => (
                   <li key={i} className="flex items-start gap-3">
                     <svg className="w-5 h-5 text-[#0066FF] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24">
                       <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
                       <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                     </svg>
                     <span className="text-[15px] font-medium text-[#1a1a1a]">{item}</span>
                   </li>
                 ))}
               </ul>

               <Link href="#contato" className="w-full py-4 rounded-full bg-[#0055FF] text-white font-bold text-center flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors mt-auto">
                 Fale Conosco
                 <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
               </Link>
            </div>
          </ScrollAnimation>

        </div>
      </div>
    </section>
  );
}
