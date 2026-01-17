'use client';



export default function Services() {
  const beneficios = [
    { text: 'Economize tempo' },
    { text: 'Elimine os erros' },
    { text: 'Sem integrações complexas' },
    { text: 'Segurança avançada' },
    { text: 'Satisfação dos funcionários' }
  ];

  return (
    // Dobra 4 - Container Mestre (Fundo Branco #F8F8FE)
    <section className="bg-[#F8F8FE] py-[40px] px-[20px] md:px-[49px] flex justify-center w-full" id="beneficios">
      <div className="max-w-[1200px] w-full">
        
        {/* Frame 6 - Container com Degradê Azul conforme Figma */}
        <div className="w-full bg-gradient-to-b from-[#E1E9FE] to-[#F8F8FE] rounded-[22.73px] overflow-hidden p-[30px] md:p-[50px]">
          
          {/* Grid de 2 Colunas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-center">
            
            {/* COLUNA ESQUERDA - Texto e Badges */}
            <div className="flex flex-col gap-[43px]">
              
              {/* Frame 3 - Título e Descrição */}
              <div className="flex flex-col gap-[22.73px]">
                {/* Badge Benefícios */}
                <div className="flex items-center gap-[11.37px] h-[21px] text-[#004DFF]">
                  <svg width="20.46" height="20.46" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span className="text-[16px] font-medium tracking-[-0.03em]">Benefícios</span>
                </div>
                
                {/* H2 - Cor #111 e peso 700 conforme imagem */}
                <h2 className="text-[40px] font-bold text-[#111] leading-[46px] tracking-[-0.03em]">
                  Elimine a burocracia do seu departamento de RH.
                </h2>
                
                {/* Descrição - Peso 600 e opacidade correta */}
                <p className="text-[18px] font-semibold text-[#111] opacity-70 leading-[150%]">
                  Transforme processos manuais demorados em tarefas automatizadas que levam minutos.
                </p>
              </div>
              
              {/* Frame 19 - Lista de Benefícios (Badges Azuis) */}
              <div className="flex flex-wrap gap-[12px]">
                {beneficios.map((item) => (
                  <div 
                    key={item.text} 
                    className="h-[44px] bg-[#004DFF] rounded-[100px] flex items-center justify-center gap-[10px] px-[20px] transition-transform hover:scale-105"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F8F8FE" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="text-white text-[16px] font-medium tracking-[-0.03em] whitespace-nowrap">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* COLUNA DIREITA - Imagens e Mockups */}
            <div className="relative w-full h-[500px] md:h-[600px]">

              
              {/* Mockup Macbook - Ajustado para alinhar com Frame 12.png */}
              <div className="absolute -left-[10%] top-[15%] w-full h-auto">
                <img 
                  src="/dashboard-macbook.png" 
                  alt="Dashboard MacBook" 
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Frame 119 - Card de Engajamento flutuante (Igual à referência Frame 119 (3).png) */}
              <div 
                className="absolute left-[30%] bottom-[5%] w-[280px] md:w-[320px] bg-[#F8F8FE] rounded-[15.84px] p-[24px] md:p-[31.68px] shadow-[0px_12.67px_25.34px_rgba(28,89,243,0.19)] z-20 flex flex-col gap-[16px]"
              >
                <div className="flex items-center gap-[7.92px]">
                  <div className="w-[24.55px] h-[24.55px] bg-[#DBE9FE] rounded-[5.54px] flex items-center justify-center">
                    <svg width="14.26" height="14.26" viewBox="0 0 24 24" fill="none" stroke="#004DFF" strokeWidth="1.5">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  </div>
                  <span className="text-[12.67px] font-bold text-[#111]">Engajamento com Documentos</span>
                </div>

                {/* Barra Taxa de Visualização */}
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#004DFF" strokeWidth="2">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                      </svg>
                      <span className="text-[11.08px] font-bold text-[#111]">Taxa de visualização</span>
                    </div>
                    <span className="text-[11.08px] font-bold text-[#004DFF]">76%</span>
                  </div>
                  <div className="w-full h-[6.34px] bg-[#E0E9FE] rounded-full overflow-hidden">
                    <div className="bg-[#004DFF] h-full w-[76%]" />
                  </div>
                  <span className="text-[9.5px] font-medium text-[#111] opacity-70">60 de 76 funcionários visualizaram</span>
                </div>

                {/* Barra Taxa de Assinatura */}
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16A349" strokeWidth="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                      <span className="text-[11.08px] font-bold text-[#111]">Taxa de assinatura</span>
                    </div>
                    <span className="text-[11.08px] font-bold text-[#16A349]">60%</span>
                  </div>
                  <div className="w-full h-[6.34px] bg-[#E0E9FE] rounded-full overflow-hidden">
                    <div className="bg-[#16A349] h-full w-[60%]" />
                  </div>
                  <span className="text-[9.5px] font-medium text-[#111] opacity-70">48 de 76 funcionários assinaram</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}