import ScrollAnimation from '../ui/ScrollAnimation';

export default function Differentials() {
  return (
    <section className="bg-gradient-to-b from-[#F8FAFF] to-[#F0F4FF] py-[100px] flex justify-center w-full" id="como-funciona">
      <div className="max-w-[1200px] w-full px-[24px] md:px-[142px]">
        <ScrollAnimation className="text-center mb-[60px]">
          <div className="inline-flex items-center gap-2 text-[#0066FF] mb-5">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7.75 12L10.58 14.83L16.25 9.17004" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-[#0066FF] font-semibold text-sm">Processo Simples</span>
          </div>
          <h2 className="text-[40px] md:text-[48px] font-bold mb-[15px] text-[#1a1a1a] leading-tight tracking-tight">Como funciona</h2>
          <p className="text-[#4a5568] text-lg">Três passos simples para revolucionar a distribuição de holerites na sua empresa.</p>
        </ScrollAnimation>
        
        <div className="grid gap-[60px]">
          {/* Step 1 */}
          <ScrollAnimation delay={0.2} className="grid md:grid-cols-2 gap-[40px] md:gap-[80px] items-center">
            <div className="order-2 md:order-1">
              <div className="text-[#0066FF] text-lg font-bold mb-2.5">01.</div>
              <h3 className="text-[32px] font-bold mb-[15px] text-[#1a1a1a] leading-tight">Faça Upload dos PDFs</h3>
              <p className="text-[#4a5568] leading-relaxed text-[17px]">Carregue os arquivos PDF dos holerites na nossa plataforma segura.</p>
            </div>
            <div className="bg-white p-6 rounded-[32px] shadow-sm order-1 md:order-2 transition-transform hover:-translate-y-2 duration-300">
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img src="data:image/svg+xml,%3Csvg width='500' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='500' height='300' fill='%23F0F4FF' rx='20'/%3E%3Cpath d='M250 120 L250 180 M220 150 L250 120 L280 150' stroke='%230066FF' stroke-width='4' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3Ctext x='250' y='220' font-family='Arial' font-size='16' fill='%230066FF' text-anchor='middle' font-weight='bold'%3EUpload PDF%3C/text%3E%3C/svg%3E" alt="Upload" className="w-full rounded-[20px]" />
            </div>
          </ScrollAnimation>

          {/* Step 2 */}
          <ScrollAnimation delay={0.4} className="grid md:grid-cols-2 gap-[40px] md:gap-[80px] items-center">
             <div className="bg-white p-6 rounded-[32px] shadow-sm transition-transform hover:-translate-y-2 duration-300">
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img src="data:image/svg+xml,%3Csvg width='500' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='500' height='300' fill='%23F0F4FF' rx='20'/%3E%3Ccircle cx='250' cy='150' r='40' stroke='%230066FF' stroke-width='4' fill='none'/%3E%3Cpath d='M250 130 L250 150 L265 165' stroke='%230066FF' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Ctext x='250' y='220' font-family='Arial' font-size='16' fill='%230066FF' text-anchor='middle' font-weight='bold'%3EProcessando...%3C/text%3E%3C/svg%3E" alt="Processing" className="w-full rounded-[20px]" />
            </div>
            <div>
              <div className="text-[#0066FF] text-lg font-bold mb-2.5">02.</div>
              <h3 className="text-[32px] font-bold mb-[15px] text-[#1a1a1a] leading-tight">Processamento Automático</h3>
              <p className="text-[#4a5568] leading-relaxed text-[17px]">Nossa IA processa os documentos, extraindo e organizando todas as informações.</p>
            </div>
          </ScrollAnimation>

          {/* Step 3 */}
          <ScrollAnimation delay={0.6} className="grid md:grid-cols-2 gap-[40px] md:gap-[80px] items-center">
            <div className="order-2 md:order-1">
              <div className="text-[#0066FF] text-lg font-bold mb-2.5">03.</div>
              <h3 className="text-[32px] font-bold mb-[15px] text-[#1a1a1a] leading-tight">Revisão e Envio</h3>
              <p className="text-[#4a5568] leading-relaxed text-[17px]">Revise os dados extraídos e envie um link de acesso seguro para cada funcionário.</p>
            </div>
            <div className="bg-white p-6 rounded-[32px] shadow-sm order-1 md:order-2 transition-transform hover:-translate-y-2 duration-300">
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img src="data:image/svg+xml,%3Csvg width='500' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='500' height='300' fill='%23F0F4FF' rx='20'/%3E%3Cpath d='M220 150 L240 170 L280 130' stroke='%230066FF' stroke-width='4' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3Ctext x='250' y='220' font-family='Arial' font-size='16' fill='%230066FF' text-anchor='middle' font-weight='bold'%3EEnviado!%3C/text%3E%3C/svg%3E" alt="Send" className="w-full rounded-[20px]" />
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
