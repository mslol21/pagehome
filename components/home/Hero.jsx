import Link from 'next/link';
import ScrollAnimation from '../ui/ScrollAnimation';

export default function Hero() {
  return (
    <section className="flex justify-center px-5 py-[60px] bg-gradient-to-b from-white to-[#F8FAFF]" id="home">
      <ScrollAnimation className="max-w-[1200px] w-full bg-[#E8F0FF] rounded-[40px] px-[24px] md:px-[48px] pt-[40px] md:pt-[10px] pb-[60px] flex flex-col md:flex-row items-center gap-10 md:h-[683px] relative overflow-hidden">
        
        {/* Left Content */}
        <div className="flex-1 z-10 md:mt-10">
          <div className="inline-flex items-center gap-2 text-[#0066FF] font-semibold mb-6">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7.75 12L10.58 14.83L16.25 9.17004" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Sem integrações - Pronto para uso - Seguro
          </div>
          
          <h1 className="text-[40px] md:text-[56px] font-bold leading-[1.1] text-[#1a1a1a] mb-6 tracking-tight">
            Automatize o envio de<br />
            holerites com<br />
            Inteligência Artificial
          </h1>
          
          <p className="text-[#4a5568] text-lg mb-8 max-w-[500px] leading-relaxed">
            Elimine processos manuais do RH. Envie holerites diretamente para o WhatsApp dos colaboradores em minutos.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link
              href="#contato"
              className="h-[56px] px-8 rounded-full bg-[#0066FF] text-white font-bold flex items-center gap-2 hover:bg-[#0052CC] transition-all group"
            >
              Fale Conosco
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"><path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
            <Link
              href="#demo"
              className="h-[56px] px-8 rounded-full bg-[#0a0a0a] text-white font-bold flex items-center gap-2 hover:bg-gray-800 transition-all group"
            >
              Agendar Demo
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"><path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 w-full h-full flex items-center justify-center md:justify-end relative">
          {/* Using SVG to construct the phone + modal mockup */}
          <img 
            src="data:image/svg+xml,%3Csvg width='500' height='700' viewBox='0 0 500 700' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- Phone Frame --%3E%3Crect x='100' y='50' width='300' height='600' rx='40' fill='%231a1a1a'/%3E%3Crect x='110' y='60' width='280' height='580' rx='30' fill='white'/%3E%3C!-- Screen Header --%3E%3Crect x='110' y='60' width='280' height='180' rx='10' fill='%230066FF'/%3E%3Cpath d='M130 90 h40' stroke='white' stroke-width='2'/%3E%3Cpath d='M360 90 h20' stroke='white' stroke-width='2'/%3E%3Ctext x='130' y='160' font-family='Arial' font-size='14' fill='white'%3EHolerite Digital%3C/text%3E%3C!-- Dynamic Island --%3E%3Crect x='210' y='70' width='80' height='25' rx='12' fill='black'/%3E%3C!-- Content Area --%3E%3Ctext x='250' y='280' font-family='Arial' font-size='16' font-weight='bold' text-anchor='middle' fill='%23333'%3EOlá, MATHEUS DA COSTA 👋%3C/text%3E%3Ctext x='250' y='310' font-family='Arial' font-size='12' text-anchor='middle' fill='%23666'%3EAqui você pode visualizar e baixar o seu%3C/text%3E%3Ctext x='250' y='330' font-family='Arial' font-size='12' text-anchor='middle' fill='%23666'%3Edocumento de DEZEMBRO DE 2025.%3C/text%3E%3C!-- Document Preview --%3E%3Crect x='140' y='360' width='220' height='250' stroke='%23ddd' fill='white'/%3E%3Crect x='150' y='370' width='200' height='10' fill='%23eee'/%3E%3Crect x='150' y='390' width='200' height='10' fill='%23eee'/%3E%3Crect x='150' y='410' width='200' height='10' fill='%23eee'/%3E%3C!-- Floating Modal --%3E%3Cg filter='url(%23shadow)'%3E%3Crect x='20' y='450' width='300' height='200' rx='20' fill='white'/%3E%3Ctext x='40' y='480' font-family='Arial' font-size='14' font-weight='bold' fill='%23333'%3E✎ Assinar Documento%3C/text%3E%3Crect x='40' y='500' width='260' height='80' rx='10' stroke='%23ddd' fill='%23f9f9f9'/%3E%3C!-- Signature --%3E%3Cpath d='M100 550 c10 -10 20 -10 30 0 s10 10 20 0 s10 -20 20 0' stroke='black' stroke-width='2' fill='none'/%3E%3C!-- Modal Buttons --%3E%3Crect x='40' y='600' width='120' height='40' rx='8' fill='%23E8F0FF'/%3E%3Ctext x='100' y='625' font-family='Arial' font-size='12' text-anchor='middle' fill='black'%3ELimpar%3C/text%3E%3Crect x='180' y='600' width='120' height='40' rx='8' fill='%230066FF'/%3E%3Ctext x='240' y='625' font-family='Arial' font-size='12' text-anchor='middle' fill='white'%3E🔒 Assinar%3C/text%3E%3C/g%3E%3Cdefs%3E%3Cfilter id='shadow' x='0' y='440' width='340' height='240' filterUnits='userSpaceOnUse'%3E%3CfeDropShadow dx='0' dy='10' stdDeviation='10' flood-color='rgba(0,0,0,0.1)'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E" 
            alt="Hero Mockup" 
            className="w-full h-auto max-h-[120%] object-contain md:absolute md:bottom-[-5%] md:right-[-5%]"
          />
        </div>
      </ScrollAnimation>
    </section>
  );
}
