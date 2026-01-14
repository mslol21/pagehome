import Link from 'next/link';
import ScrollAnimation from '../ui/ScrollAnimation';

export default function DetailedComparison() {
  return (
    <section className="bg-[#F8F8FE] py-[60px] flex justify-center w-full" id="solucao">
      <div className="max-w-[1200px] w-full px-[48px] flex flex-col items-center min-h-[1147px]">
        
        {/* Badge & Title */}
        <ScrollAnimation className="text-center mb-[60px]">
          <div className="inline-flex items-center gap-2 text-[#0066FF] mb-5 font-semibold text-sm">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z" fill="currentColor"/>
            </svg>
            Solução
          </div>
          <h2 className="text-[40px] md:text-[52px] font-bold mb-[20px] text-[#1a1a1a] leading-tight tracking-tight">
            Aumente a produtividade do seu RH
          </h2>
          <p className="text-[#4a5568] text-lg max-w-[700px] mx-auto leading-relaxed">
            O Holerite Digital automatiza todo o processo de distribuição, liberando sua equipe para atividades estratégicas.
          </p>
        </ScrollAnimation>

        {/* Top 3 Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 w-full mb-12">
          {/* Card 1: Processo Simplificado */}
          <ScrollAnimation delay={0.1} className="bg-[#EFF6FF] rounded-[32px] p-8 border border-blue-50">
             <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#0055FF]">
                   <path d="M13 2L3 14H12V22L22 10H13V2Z" fill="currentColor" />
                </svg>
             </div>
             <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Processo Simplificado</h3>
             <p className="text-[#4a5568] text-sm mb-6 leading-relaxed">
                Reduza o processo de distribuição de holerites de 21 horas para apenas 30 minutos por mês.
             </p>
             <ul className="space-y-3">
                {['Upload dos PDFs em massa', 'Processamento automático com IA', 'Distribuição via WhatsApp'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm font-bold text-[#1a1a1a]">
                     <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <svg width="10" height="8" viewBox="0 0 12 10" fill="none"><path d="M1 5L4.5 8.5L11 1.5" stroke="#0055FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                     </div>
                     {item}
                  </li>
                ))}
             </ul>
          </ScrollAnimation>

          {/* Card 2: Foco Estratégico */}
          <ScrollAnimation delay={0.2} className="bg-[#EFF6FF] rounded-[32px] p-8 border border-blue-50">
             <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#0055FF]">
                   <path d="M13 2L3 14H12V22L22 10H13V2Z" fill="currentColor" />
                </svg>
             </div>
             <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Foco Estratégico</h3>
             <p className="text-[#4a5568] text-sm mb-6 leading-relaxed">
                Libere sua equipe de RH para atividades que realmente agregam valor ao negócio.
             </p>
             <ul className="space-y-3">
                {['Desenvolvimento de talentos', 'Programas de bem-estar', 'Projetos de engajamento'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm font-bold text-[#1a1a1a]">
                     <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <svg width="10" height="8" viewBox="0 0 12 10" fill="none"><path d="M1 5L4.5 8.5L11 1.5" stroke="#0055FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                     </div>
                     {item}
                  </li>
                ))}
             </ul>
          </ScrollAnimation>

          {/* Card 3: Resultados Imediatos */}
          <ScrollAnimation delay={0.3} className="bg-[#EFF6FF] rounded-[32px] p-8 border border-blue-50">
             <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#0055FF]">
                   <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" fill="currentColor" fillOpacity="0.3" />
                   <circle cx="12" cy="12" r="3" fill="currentColor" />
                </svg>
             </div>
             <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Resultados Imediatos</h3>
             <p className="text-[#4a5568] text-sm mb-6 leading-relaxed">
                Veja os benefícios desde o primeiro mês de implementação.
             </p>
             <ul className="space-y-3">
                {['Redução de 97,6% no tempo', 'Economia de recursos', 'Satisfação dos funcionários'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm font-bold text-[#1a1a1a]">
                     <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <svg width="10" height="8" viewBox="0 0 12 10" fill="none"><path d="M1 5L4.5 8.5L11 1.5" stroke="#0055FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                     </div>
                     {item}
                  </li>
                ))}
             </ul>
          </ScrollAnimation>
        </div>

        {/* Bottom Detailed Section */}
        <ScrollAnimation delay={0.4} className="w-full bg-[#EFF6FF] rounded-[40px] p-8 md:p-12 border border-blue-50 flex flex-col md:flex-row gap-12 items-center">
           {/* Left Info */}
           <div className="flex-1 space-y-8">
              <h3 className="text-[32px] font-bold text-[#1a1a1a] leading-tight">Como funciona o Holerite Digital</h3>
              <p className="text-[#4a5568] text-base">
                 Um processo simples de 3 passos que revoluciona a distribuição de holerites na sua empresa.
              </p>
              <div className="space-y-8">
                 <div>
                    <h4 className="text-xl font-bold text-[#0055FF] mb-2">Upload dos PDFs</h4>
                    <p className="text-[#4a5568] text-sm leading-relaxed">
                       Faça o upload dos holerites em PDF gerados pelo seu sistema atual.
                    </p>
                 </div>
                 <div>
                    <h4 className="text-xl font-bold text-[#0055FF] mb-2">Processamento Automático</h4>
                    <p className="text-[#4a5568] text-sm leading-relaxed">
                       Nossa IA identifica e organiza automaticamente todos os dados.
                    </p>
                 </div>
                 <div>
                    <h4 className="text-xl font-bold text-[#0055FF] mb-2">Distribuição via WhatsApp</h4>
                    <p className="text-[#4a5568] text-sm leading-relaxed">
                       Envie links seguros diretamente para o WhatsApp de cada funcionário.
                    </p>
                 </div>
              </div>
           </div>

           {/* Right Result Card */}
           <div className="flex-1 w-full max-w-[500px]">
              <div className="bg-[#F2FFF9] rounded-[32px] p-12 flex flex-col items-center text-center border border-green-100 shadow-sm relative overflow-hidden">
                 <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-8 shadow-sm">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-green-500">
                       <path d="M13 2L3 14H12V22L22 10H13V2Z" fill="currentColor" />
                    </svg>
                 </div>
                 <h4 className="text-[32px] font-bold text-[#1a1a1a] mb-4">Tempo Total : 20 minutos</h4>
                 <p className="text-[#4a5568] text-sm mb-10 max-w-[280px]">
                    Todo o processo de distribuição de holerites para 250 funcionários.
                 </p>
                 <div className="text-[40px] font-black text-green-500 leading-none">
                    97,6% mais rápido
                 </div>
              </div>
           </div>
        </ScrollAnimation>

        {/* CTA Button */}
        <ScrollAnimation delay={0.5} className="mt-12">
           <Link
             href="#cta"
             className="bg-[#0055FF] text-white px-10 py-5 rounded-full font-bold text-lg flex items-center gap-3 hover:bg-[#0044CC] transition-all group shadow-xl shadow-blue-200"
           >
             Aumente a produtividade do seu RH
             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"><path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
           </Link>
        </ScrollAnimation>
        
      </div>
    </section>
  );
}
