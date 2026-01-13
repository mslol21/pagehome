import ScrollAnimation from '../ui/ScrollAnimation';

export default function Features() {
  return (
    <section className="bg-[#F8F8FE] py-[60px] flex justify-center w-full">
      <div className="max-w-[1200px] w-full px-5">
        <ScrollAnimation delay={0.2}>
          <div className="text-center mb-[60px]">
             <div className="inline-flex items-center gap-2 text-[#0066FF] mb-5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7.75 12L10.58 14.83L16.25 9.17004" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-[#0066FF] font-semibold text-sm">Recursos</span>
             </div>
             <h2 className="text-[40px] md:text-[48px] font-bold mb-[15px] text-[#1a1a1a] leading-tight tracking-tight">Transforme o envio de Holerites</h2>
             <p className="text-[#4a5568] text-lg max-w-[600px] mx-auto leading-relaxed">Nossa tecnologia de IA processa automaticamente seus holerites PDF e os envia com segurança.</p>
          </div>
        </ScrollAnimation>
        
        <div className="grid md:grid-cols-3 gap-[30px]">
          {/* Card 1 */}
          <ScrollAnimation delay={0.3} className="h-full">
            <div className="bg-[#E8F0FF] p-[40px_30px] rounded-[32px] h-full transition-transform hover:-translate-y-2 duration-300">
              <div className="w-[48px] h-[48px] bg-[#0066FF] rounded-full flex items-center justify-center mb-6 text-white shadow-sm">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M13 10V3L4 14H11V21L20 10H13Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                 </svg>
              </div>
              <h3 className="text-[24px] font-bold mb-4 text-[#1a1a1a] leading-tight">Processamento Inteligente</h3>
              <p className="text-[#4a5568] leading-relaxed text-[17px]">Nossa IA extrai automaticamente todos os dados relevantes dos holerites em PDF.</p>
            </div>
          </ScrollAnimation>

          {/* Card 2 */}
          <ScrollAnimation delay={0.4} className="h-full">
            <div className="bg-[#E8F0FF] p-[40px_30px] rounded-[32px] h-full transition-transform hover:-translate-y-2 duration-300">
               <div className="w-[48px] h-[48px] bg-[#0066FF] rounded-full flex items-center justify-center mb-6 text-white shadow-sm">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M13 10V3L4 14H11V21L20 10H13Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                 </svg>
               </div>
               <h3 className="text-[24px] font-bold mb-4 text-[#1a1a1a] leading-tight">Envio via WhatsApp</h3>
               <p className="text-[#4a5568] leading-relaxed text-[17px]">Envie links seguros diretamente para o WhatsApp de cada funcionário em poucos cliques.</p>
            </div>
          </ScrollAnimation>

          {/* Card 3 */}
          <ScrollAnimation delay={0.5} className="h-full">
            <div className="bg-[#E8F0FF] p-[40px_30px] rounded-[32px] h-full transition-transform hover:-translate-y-2 duration-300">
               <div className="w-[48px] h-[48px] bg-[#0066FF] rounded-full flex items-center justify-center mb-6 text-white shadow-sm">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M13 10V3L4 14H11V21L20 10H13Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                 </svg>
               </div>
               <h3 className="text-[24px] font-bold mb-4 text-[#1a1a1a] leading-tight">Acesso Simples</h3>
               <p className="text-[#4a5568] leading-relaxed text-[17px]">Funcionários acessam seus holerites diretamente pelo celular, sem necessidade de apps.</p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
