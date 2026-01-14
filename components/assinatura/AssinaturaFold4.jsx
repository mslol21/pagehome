import ScrollAnimation from '../ui/ScrollAnimation';

export default function AssinaturaFold4() {
  const testimonials = [
    {
      name: "Isabela",
      role: "RH, Supermercados Becker",
      text: "“O novo sistema de holerite será um grande diferencial para nossa equipe. A interface é intuitiva e fácil de usar, tornando o acesso aos holerites muito mais prático e rápido. Nossos colaboradores gostaram muito da experiência. Sem dúvida, uma excelente ferramenta para facilitar a rotina!”"
    },
    {
      name: "Isabela",
      role: "RH, Supermercados Becker",
      text: "“O novo sistema de holerite será um grande diferencial para nossa equipe. A interface é intuitiva e fácil de usar, tornando o acesso aos holerites muito mais prático e rápido. Nossos colaboradores gostaram muito da experiência. Sem dúvida, uma excelente ferramenta para facilitar a rotina!”"
    },
    {
      name: "Isabela",
      role: "RH, Supermercados Becker",
      text: "“O novo sistema de holerite será um grande diferencial para nossa equipe. A interface é intuitiva e fácil de usar, tornando o acesso aos holerites muito mais prático e rápido. Nossos colaboradores gostaram muito da experiência. Sem dúvida, uma excelente ferramenta para facilitar a rotina!”"
    }
  ];

  return (
    <section 
      className="flex justify-center w-full min-h-[702px] relative overflow-hidden py-[60px]"
      style={{
        background: 'linear-gradient(0deg, #262626, #262626)'
      }}
    >
      {/* Ellipse Glow Effect */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[806px] h-[489px] opacity-20 pointer-events-none"
        style={{
          background: '#7CA3FD',
          filter: 'blur(218.4px)',
          borderRadius: '100%'
        }}
      />

      <div className="max-w-[1200px] w-full px-[50px] flex justify-center z-10">
        
        {/* Frame Principal (1100x582px) */}
        <div className="w-full max-w-[1100px] flex flex-col gap-[60px] items-center">
          
          {/* Header */}
          <ScrollAnimation className="text-center flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 text-[#0066FF] font-bold text-sm">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Depoimentos
            </div>
            <h2 className="text-[36px] md:text-[48px] font-black text-white leading-tight tracking-tight max-w-[800px]">
              O que nossos clientes estão dizendo?
            </h2>
            <p className="text-white/60 text-lg">
              O que as empresas estão descobrindo com nossa solução inovadora.
            </p>
          </ScrollAnimation>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-6 w-full h-auto md:h-[350px]">
             {testimonials.map((item, index) => (
               <ScrollAnimation key={index} delay={index * 0.1} className="bg-[#1a1a1a]/80 backdrop-blur-sm border border-white/5 rounded-[32px] p-8 flex flex-col justify-between hover:border-blue-500/30 transition-all duration-500 group">
                  <p className="text-white/80 text-[15px] leading-relaxed italic">
                    {item.text}
                  </p>
                  <div className="flex items-center gap-4 mt-8">
                     <div className="w-12 h-12 bg-blue-600 rounded-full flex-shrink-0" />
                     <div className="flex flex-col">
                        <span className="text-white font-bold">{item.name}</span>
                        <span className="text-white/40 text-xs">{item.role}</span>
                     </div>
                  </div>
               </ScrollAnimation>
             ))}
          </div>

        </div>

      </div>
    </section>
  );
}
