import ScrollAnimation from '../ui/ScrollAnimation';

export default function AssinaturaFold1() {
  const cards = [
    {
      title: "Segurança dos Documentos",
      desc: "Todos os documentos são protegidos por um hash único, funcionando como uma impressão digital criptografada que garante a integridade e a autenticidade das informações.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
        </svg>
      )
    },
    {
      title: "Assinatura Vinculada",
      desc: "Cada assinatura é vinculada diretamente ao colaborador por meio de CPF, telefone e rubrica, garantindo identificação individual e segurança.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
        </svg>
      )
    },
    {
      title: "Registro Completo",
      desc: "O sistema registra automaticamente data, hora, endereço IP e dispositivo utilizado em cada ação, assegurando rastreabilidade total.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
        </svg>
      )
    },
    {
      title: "Auditoria Disponível",
      desc: "Uma auditoria completa fica disponível a qualquer momento, permitindo consulta e verificação sempre que necessário.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>
        </svg>
      )
    }
  ];

  return (
    <section className="bg-white py-[60px] flex justify-center w-full" id="validacao-juridica">
      <div className="max-w-[1244px] px-[48px] flex flex-col items-center">
        
        {/* Frame111 (Conteúdo Principal) */}
        <div className="w-full max-w-[1100px] flex flex-col gap-[60px] items-center">
          
          {/* Frame3 (Header) */}
          <ScrollAnimation className="w-full max-w-[570px] h-auto md:h-[130px] flex flex-col gap-[20px] items-center text-center">
            <div className="flex items-center gap-2 text-[#0066FF] font-bold text-sm">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Recursos
            </div>
            <h2 className="text-[36px] md:text-[44px] font-black text-[#1a1a1a] leading-tight tracking-tight">
              Qual a validação jurídica da assinatura eletrônica?
            </h2>
          </ScrollAnimation>

          {/* Frame157 (Grid de Cards) */}
          <div className="grid md:grid-cols-2 gap-[20px] w-full max-w-[1100px] h-auto md:h-[452px]">
             {cards.map((card, index) => (
               <ScrollAnimation key={index} delay={index * 0.1} className="bg-[#F8F9FF] border border-[#E0E9FE] rounded-[24px] p-8 flex flex-col gap-4">
                  <div className="w-12 h-12 bg-[#0066FF] rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-100">
                    {card.icon}
                  </div>
                  <h3 className="text-[22px] font-bold text-[#1a1a1a] tracking-tight">{card.title}</h3>
                  <p className="text-[#4a5568] text-[16px] leading-relaxed">
                    {card.desc}
                  </p>
               </ScrollAnimation>
             ))}
          </div>

          {/* Frame13 (Banner Azul) */}
          <ScrollAnimation delay={0.4} className="w-full max-w-[980px] min-h-[144px] bg-[#004DFF] border border-[#E0E9FE] rounded-[24px] p-8 md:p-10 flex items-center gap-8 group">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#004DFF] flex-shrink-0 animate-pulse">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                 <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
               </svg>
            </div>
            <p className="text-white text-[18px] md:text-[22px] font-bold leading-snug tracking-tight">
              Nossa assinatura eletrônica segue as diretrizes da MP 2.200-2/2001 e da Lei 14.063/2020, que reconhecem sua validade jurídica.
            </p>
          </ScrollAnimation>

        </div>

      </div>
    </section>
  );
}
