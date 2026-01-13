import ScrollAnimation from '../ui/ScrollAnimation';

export default function Institutional() {
  return (
    <section className="bg-[#1a1a1a] py-[60px] flex justify-center w-full relative overflow-hidden">
      {/* Background Gradient simulating the "lights" from the bottom */}
      <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[80%] h-[200px] bg-[#0066FF] opacity-20 blur-[120px] pointer-events-none" />

      <div className="max-w-[1200px] w-full px-[50px] relative z-10">
        <ScrollAnimation className="text-center mb-[60px]">
          <div className="inline-flex items-center gap-2 text-[#0066FF] mb-5">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7.75 12L10.58 14.83L16.25 9.17004" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-[#0066FF] font-semibold text-sm">Depoimentos</span>
          </div>
          <h2 className="text-[40px] md:text-[48px] mb-[15px] font-bold text-white leading-tight tracking-tight">O que nossos clientes estão dizendo?</h2>
          <p className="text-[#a0aec0] text-lg">O que as empresas estão descobrindo com nossa solução inovadora.</p>
        </ScrollAnimation>
        
        <div className="grid md:grid-cols-3 gap-[30px]">
          {/* Testimonial Cards */}
          {[1, 2, 3].map((i, index) => (
            <ScrollAnimation key={i} delay={0.2 * index} className="h-full">
              <div className="bg-[#262626] p-[30px] rounded-[24px] border border-[#333] flex flex-col justify-between h-full transition-colors hover:border-[#0066FF] duration-300">
                <p className="text-base leading-[1.7] mb-[25px] text-[#e2e8f0] opacity-80">
                  "O novo sistema de holerite será um grande diferencial para nossa equipe. A interface é intuitiva e fácil de usar, tornando o acesso aos holerites muito mais prático e rápido. Nossos colaboradores gostaram muito da experiência. Sem dúvida, uma excelente ferramenta para facilitar a rotina!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-[48px] h-[48px] bg-[#0055FF] rounded-full flex-shrink-0" />
                  <div>
                    <h4 className="text-[16px] font-bold text-white mb-[2px]">Isabela</h4>
                    <p className="text-[13px] text-[#a0aec0]">RH, Supermercados Becker</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
