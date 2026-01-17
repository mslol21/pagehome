'use client';

export default function Institutional() {
  return (
    // Dobra 5 - Container Mestre com fundo escuro específico
    <section className="bg-[#262626] py-[60px] flex justify-center w-full relative overflow-hidden" id="depoimentos">
      
      {/* Background Gradient (simulando os múltiplos gradients do Figma) */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      {/* Ellipse 1 - Efeito de Glow Azul Médio na base */}
      <div className="absolute w-[806px] h-[489px] left-1/2 -translate-x-1/2 top-[643px] bg-[#7CA3FD] filter blur-[109.2px] z-[1] opacity-40" />

      <div className="max-w-[1200px] w-full px-[50px] relative z-10">
        
        {/* Frame 113 & Frame 3 - Cabeçalho centralizado */}
        <div className="flex flex-col items-center gap-[60px] mb-[60px]">
          <div className="flex flex-col items-center gap-[20px] w-full max-w-[603px]">
            
            {/* Frame 6 - Badge Depoimentos */}
            <div className="flex items-center justify-center gap-[10px] h-[18px]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7CA3FD" strokeWidth="2.5">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <span className="text-[16px] font-medium leading-[18px] tracking-[-0.03em] text-[#7CA3FD]">
                Depoimentos
              </span>
            </div>

            {/* Frame 4 - Títulos */}
            <div className="flex flex-col items-center gap-[20px] text-center">
              <h2 className="text-[40px] font-bold leading-[46px] tracking-[-0.03em] text-[#F8F8FE]">
                O que nossos clientes estão dizendo?
              </h2>
              <p className="text-[18px] font-semibold leading-[150%] text-[#F8F8FE] opacity-70 max-w-[603px]">
                O que as empresas estão descobrindo com nossa solução inovadora.
              </p>
            </div>
          </div>
        </div>
        
        {/* Group 64 - Grid de Cards (352px de largura cada) */}
        <div className="grid md:grid-cols-3 gap-[22px] justify-items-center">
          {[1, 2, 3].map((i) => (
            <div 
              key={i} 
              className="w-full max-w-[352px] min-h-[391px] bg-[#212121] p-[40px] rounded-[20px] flex flex-col justify-between border border-transparent hover:border-[#7CA3FD]/30 transition-all duration-300"
            >
              {/* Texto do Depoimento */}
              <p className="text-[18px] font-semibold leading-[150%] text-[#F8F8FE] opacity-70">
                “O novo sistema de holerite será um grande diferencial para nossa equipe. A interface é intuitiva e fácil de usar, tornando o acesso aos holerites muito mais prático e rápido. Nossos colaboradores gostaram muito da experiência.”
              </p>

              {/* Frame 13 - Perfil do Cliente */}
              <div className="flex items-center gap-[10px] h-[36px]">
                {/* Frame 8 - Avatar */}
                <div className="w-[36px] h-[36px] bg-[#004DFF] rounded-full flex-shrink-0" />
                
                {/* Frame 14 - Informações */}
                <div className="flex flex-col justify-center items-start">
                  <h4 className="text-[16px] font-semibold leading-[18px] tracking-[-0.03em] text-[#F8F8FE]">
                    Isabela
                  </h4>
                  <p className="text-[12px] font-semibold leading-[150%] text-[#F8F8FE] whitespace-nowrap">
                    RH, Supermercados Becker
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}