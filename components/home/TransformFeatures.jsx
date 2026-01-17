'use client';



export default function TransformFeatures() {
  const features = [
    {
      title: "Processamento Inteligente",
      description: "Nossa IA extrai automaticamente todos os dados relevantes dos holerites em PDF.",
    },
    {
      title: "Envio via WhatsApp",
      description: "Envie links seguros diretamente para o WhatsApp de cada funcionário em poucos cliques.",
    },
    {
      title: "Acesso Simples",
      description: "Funcionários acessam seus holerites diretamente pelo celular, sem necessidade de apps.",
    }
  ];

  return (
    // Dobra 2 - Container Mestre centralizado
    <section className="w-full flex justify-center bg-[#F8F8FE] py-[80px] md:py-[100px] relative overflow-hidden" id="como-funciona">
      
      {/* Detalhe de iluminação suave no fundo */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E1E9FE] blur-[150px] opacity-40 pointer-events-none" />

      <div className="w-full max-w-[1200px] flex flex-col items-center px-6 relative z-10">
        
        {/* Badge Superior centralizado conforme imagem */}
        <div className="flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-[#004DFF]/10 bg-white/50">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#004DFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          <span className="text-[16px] font-semibold text-[#004DFF] tracking-tight">Recursos</span>
        </div>

        {/* Título Principal */}
        <h2 className="text-[40px] font-bold text-[#111] text-center leading-[46px] mb-6 tracking-[-0.03em]">
          Transforme o envio de Holerites
        </h2>

        {/* Descrição centralizada */}
        <p className="text-[18px] font-semibold text-[#111] opacity-70 text-center max-w-[700px] leading-[150%] mb-[60px]">
          Nossa tecnologia de IA processa automaticamente seus holerites PDF e os envia com segurança.
        </p>

        {/* Grid de Cards - Ajustado para alinhar ícone e texto à esquerda */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {features.map((feature, index) => (
            <div 
              key={index}
              // Alinhamento items-start para manter ícone e texto alinhados à esquerda do card
              className="flex flex-col items-start p-10 bg-gradient-to-b from-[#EBF2FF] to-[#F8F9FF] border border-[#DCE4F5] rounded-[20px] min-h-[253px] min-w-[320px] transition-all hover:shadow-xl hover:shadow-blue-500/5"
            >
              {/* Ícone de Raio - Centralizado no círculo azul */}
              <div className="w-[44px] h-[44px] bg-[#004DFF] rounded-full flex items-center justify-center mb-8 shadow-md shadow-blue-200">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="white" />
                </svg>
              </div>

              {/* Título do Card - Obrigatoriamente em uma única linha */}
              <h3 className="text-[28px] font-semibold text-[#111] leading-[32px] mb-4 tracking-[-0.03em] whitespace-normal md:whitespace-nowrap">
                {feature.title}
              </h3>

              {/* Descrição do Card */}
              <p className="text-[18px] font-semibold text-[#111] opacity-70 leading-[150%]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}