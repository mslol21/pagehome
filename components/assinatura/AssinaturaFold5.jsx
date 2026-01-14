import ScrollAnimation from '../ui/ScrollAnimation';

export default function AssinaturaFold5() {
  const plans = [
    {
      name: "Start",
      price: "59,80",
      validity: "*Válido para empresas com até 20 funcionários",
      features: [
        "Envie até 3 documentos por funcionário por mês",
        "Processamento automático com IA",
        "Envio seguro via Whatsapp",
        "Suporte dedicado",
        "R$0,50 por documento extra"
      ],
      highlight: false
    },
    {
      name: "Profissional",
      price: "2,99",
      priceSub: "Pro funcionário por mês",
      validity: "*Mais vendido",
      features: [
        "Envie até 3 documentos por funcionário por mês",
        "Processamento automático com IA",
        "Envio seguro via Whatsapp",
        "Suporte dedicado",
        "R$0,50 por documento extra"
      ],
      highlight: true
    },
    {
      name: "Empresarial",
      price: "Sob consulta",
      validity: "",
      features: [
        "Acima de 500 funcionários",
        "Monte o plano ideal de acordo com as necessidades da sua empresa"
      ],
      highlight: false
    }
  ];

  return (
    <section className="bg-[#F8F8FE] py-[60px] flex justify-center w-full" id="investimento">
      <div className="max-w-[1244px] w-full px-[45px] flex flex-col items-center">
        
        {/* Frame Principal (1110x645px) */}
        <div className="w-full max-w-[1110px] flex flex-col gap-[60px] items-center">
          
          {/* Header */}
          <ScrollAnimation className="text-center flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 text-[#0066FF] font-bold text-sm">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Investimento
            </div>
            <h2 className="text-[40px] md:text-[56px] font-black text-[#1a1a1a] leading-tight tracking-tight">
              Comece agora mesmo
            </h2>
            <p className="text-[#4a5568] text-[18px] md:text-[20px] font-medium leading-relaxed max-w-[700px]">
               Experimente gratuitamente por 1 mês ou assine nosso plano empresarial
            </p>
          </ScrollAnimation>

          {/* Pricing Grid */}
          <div className="grid md:grid-cols-3 gap-8 w-full items-stretch">
            {plans.map((plan, index) => (
              <ScrollAnimation 
                key={index} 
                delay={index * 0.1} 
                className={`flex flex-col rounded-[32px] p-8 transition-all duration-300 relative ${
                  plan.highlight 
                  ? 'bg-white border-[3px] border-[#004DFF] shadow-2xl shadow-blue-100 scale-105 z-10' 
                  : 'bg-[#EEF2FF] border border-[#E0E9FE] hover:shadow-xl'
                }`}
              >
                {/* Badge Tag */}
                <div className="flex justify-between items-start mb-8">
                  <span className={`px-4 py-2 rounded-full text-sm font-bold ${
                    plan.highlight ? 'bg-[#004DFF] text-white' : 'bg-white text-[#1a1a1a]'
                  }`}>
                    {plan.name === "Empresarial" ? 'Empresarial' : plan.name}
                  </span>
                  <span className="text-[10px] font-bold text-[#1a1a1a]/60 text-right max-w-[100px]">
                    {plan.validity}
                  </span>
                </div>

                {/* Price */}
                <div className="mb-10">
                  {plan.price === "Sob consulta" ? (
                    <div className="text-[42px] font-black text-[#1a1a1a] leading-tight mt-4">
                      {plan.price}
                    </div>
                  ) : (
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl font-bold text-[#1a1a1a]">R$</span>
                      <span className="text-[64px] font-black text-[#1a1a1a] leading-none tracking-tighter">
                        {plan.price}
                      </span>
                      {plan.priceSub ? (
                         <div className="text-[12px] font-bold text-[#4a5568] ml-2 leading-tight">
                            {plan.priceSub}
                         </div>
                      ) : (
                        <span className="text-sm font-bold text-[#4a5568] ml-2">/Por mês</span>
                      )}
                    </div>
                  )}
                </div>

                {/* Features */}
                <div className="flex flex-col gap-4 mb-10 flex-grow">
                  {plan.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#004DFF" strokeWidth="4"><path d="M20 6L9 17 4 12" /></svg>
                      </div>
                      <span className="text-sm text-[#4a5568] font-medium leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button className={`w-full py-4 rounded-full font-bold text-lg flex items-center justify-center gap-3 transition-all ${
                  plan.highlight 
                  ? 'bg-[#004DFF] text-white hover:bg-[#0044CC]' 
                  : 'bg-[#0055FF] text-white hover:bg-[#0044CC]'
                }`}>
                  Fale Conosco
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                </button>
              </ScrollAnimation>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
