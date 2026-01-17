export default function AssinaturaFold2() {
  const cards = [
    {
      title: "Segurança dos Documentos",
      desc: "Todos os documentos são protegidos por um hash único, funcionando como uma impressão digital criptografada que garante a integridade e a autenticidade das informações.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F8F8FE" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="11" width="14" height="10" rx="2" ry="2"/>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
        </svg>
      )
    },
    {
      title: "Assinatura Vinculada",
      desc: "Cada assinatura é vinculada diretamente ao colaborador por meio de CPF, telefone e rubrica, garantindo identificação individual e segurança.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F8F8FE" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20h9"/>
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
        </svg>
      )
    },
    {
      title: "Registro Completo",
      desc: "O sistema registra automaticamente data, hora, endereço IP e dispositivo utilizado em cada ação, assegurando rastreabilidade total.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F8F8FE" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      )
    },
    {
      title: "Auditoria Disponível",
      desc: "Uma auditoria completa fica disponível a qualquer momento, permitindo consulta e verificação sempre que necessário.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F8F8FE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"/>
          <path d="M14 13.12c0 2.38 0 6.38-1 8.88"/>
          <path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"/>
          <path d="M2 12a10 10 0 0 1 18-6"/>
          <path d="M2 16h.01"/>
          <path d="M21.8 16c.2-2 .131-5.354 0-6"/>
          <path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"/>
          <path d="M8.65 22c.21-.66.45-1.32.57-2"/>
          <path d="M9 6.8a6 6 0 0 1 9 5.2v2"/>
        </svg>
      )
    }
  ];

  return (
    <section 
      className="py-[60px] flex justify-center w-full" 
      style={{ background: 'linear-gradient(244.23deg, #E1E9FE -4.37%, #F8F8FE 85.27%)' }}
      id="validacao-juridica"
    >
      <div className="max-w-[1400px] w-full px-6 lg:px-[48px] flex flex-col items-center">
        
        {/* Frame 111 (Conteúdo Principal) */}
        <div className="w-full max-w-[1100px] flex flex-col gap-[60px] items-center">
          
          {/* Frame 3 (Header da Seção) */}
          <div className="flex flex-col items-center gap-[20px] max-w-[570px] text-center">
            {/* Badge Recursos (Frame 6) */}
            <div className="flex items-center gap-[10px] px-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#004DFF" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span className="text-[#004DFF] font-medium text-[16px] tracking-[-0.03em]">Recursos</span>
            </div>
            {/* Título (Frame 4 / H2) */}
            <h2 className="text-[40px] font-bold text-[#111] leading-[46px] tracking-[-0.03em]">
              Qual a validação jurídica da assinatura eletrônica?
            </h2>
          </div>

          {/* Frame 157 (Grid de Cards) */}
          <div className="grid md:grid-cols-2 gap-[22px] w-full">
             {cards.map((card, index) => (
               <div 
                 key={index} 
                 className="bg-[#F8F8FE] border border-[#7CA3FD] rounded-[20px] p-[20px] flex flex-col gap-[24px] h-auto min-h-[216px]"
               >
                  <div className="flex items-center gap-[20px]">
                    <div className="w-[36px] h-[36px] bg-[#004DFF] rounded-full flex items-center justify-center flex-shrink-0">
                      {card.icon}
                    </div>
                    <h3 className="text-[28px] font-semibold text-[#111] leading-[32px] tracking-[-0.03em]">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-[#111] opacity-70 text-[18px] font-semibold leading-[150%]">
                    {card.desc}
                  </p>
               </div>
             ))}
          </div>

          {/* Frame 13 (Banner Azul) */}
          <div className="w-full max-w-[980px] bg-[#004DFF] border border-[#E0E9FE] rounded-[20px] p-[24px] md:p-[40px] flex flex-col md:flex-row items-center gap-[20px]">
            <div className="w-[36px] h-[36px] bg-[#F8F8FE] rounded-full flex items-center justify-center flex-shrink-0">
               <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#004DFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                 <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
               </svg>
            </div>
            <p className="text-[#F8F8FE] text-[20px] md:text-[28px] font-semibold leading-[1.4] md:leading-[32px] tracking-[-0.03em] flex-1 text-center md:text-left">
              Nossa assinatura eletrônica segue as diretrizes da MP 2.200-2/2001 e da Lei 14.063/2020, que reconhecem sua validade jurídica.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}