import ScrollAnimation from '../ui/ScrollAnimation';

export default function AssinaturaFold2() {
  const steps = [
    {
      number: "01.",
      title: "Importação",
      description: "Importe em lote e envie para a assinatura dos funcionários.",
      bgColor: "bg-[#EEF2FF]",
      graphic: (
        <div className="relative w-full h-full flex items-center justify-center p-8">
          {/* Main Dashboard Mockup */}
          <div className="w-[80%] bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="h-8 bg-gray-50 border-b border-gray-100 flex items-center px-4 gap-2">
              <div className="w-2 h-2 rounded-full bg-red-400" />
              <div className="w-2 h-2 rounded-full bg-yellow-400" />
              <div className="w-2 h-2 rounded-full bg-green-400" />
            </div>
            <div className="p-4 space-y-4">
               <div className="h-4 bg-gray-100 rounded w-1/3 mb-6" />
               <div className="space-y-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="flex items-center justify-between border-b border-gray-50 pb-2">
                       <div className="flex gap-3">
                          <div className="w-4 h-4 bg-gray-100 rounded" />
                          <div className="w-24 h-3 bg-gray-50 rounded" />
                       </div>
                       <div className="w-16 h-3 bg-blue-50 rounded" />
                    </div>
                  ))}
               </div>
            </div>
          </div>
          {/* Floating Toggle (Assinatura Digital) */}
          <div className="absolute -bottom-4 -right-4 md:right-10 w-[280px] bg-white rounded-2xl shadow-2xl border-2 border-green-100 p-5 z-20 transform translate-y-[-20%]">
             <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-sm text-[#1a1a1a]">Assinatura Digital</span>
                <div className="w-10 h-5 bg-green-500 rounded-full relative">
                   <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full shadow-sm" />
                </div>
             </div>
             <p className="text-[10px] text-gray-500 leading-tight">
                Ao ativar essa opção, os funcionários terão acesso ao botão de assinatura Digital.
             </p>
          </div>
        </div>
      )
    },
    {
      number: "02.",
      title: "Envio",
      description: "Envie no Whatsapp do funcionário para assinar o documento.",
      bgColor: "bg-[#EEF2FF]",
      graphic: (
        <div className="relative w-full h-full flex items-center justify-center p-8">
          {/* WhatsApp Screen Mockup */}
          <div className="w-[70%] h-[80%] bg-[#E5DDD5] rounded-[32px] border-4 border-[#075E54] relative overflow-hidden flex flex-col pt-10">
             <div className="absolute top-0 w-full h-10 bg-[#075E54] flex items-center px-6 gap-3">
                <div className="w-6 h-6 rounded-full bg-white/20" />
                <div className="w-20 h-2 bg-white/20 rounded-full" />
             </div>
             <div className="p-4 flex flex-col gap-3 h-full">
                <div className="bg-white p-3 rounded-2xl rounded-tl-none self-start max-w-[80%] shadow-sm">
                   <p className="text-[11px] leading-tight text-[#1a1a1a]">
                      Olá MATHEUS COSTA, você recebeu um documento. Para acessá-lo, pressione o botão abaixo!
                   </p>
                   <div className="mt-2 border border-blue-100 bg-[#F0F7FF] rounded-xl p-2 flex items-center gap-2">
                      <div className="w-6 h-6 bg-white rounded flex items-center justify-center text-blue-600"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg></div>
                      <span className="text-[10px] font-bold text-blue-600">Acessar Documento</span>
                   </div>
                </div>
             </div>
          </div>
          {/* Floating Signature Modal */}
          <div className="absolute bottom-4 -right-6 md:right-4 w-[260px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-20 scale-105">
             <div className="bg-gray-50 px-4 py-2 border-b border-gray-100 flex items-center gap-2">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#004DFF" strokeWidth="2.5"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                <span className="text-[10px] font-bold uppercase text-gray-400">Assinar Documento</span>
             </div>
             <div className="p-4">
                <div className="h-24 bg-gray-50 border-2 border-dashed border-blue-100 rounded-xl flex items-center justify-center italic text-gray-300 font-serif text-3xl">
                   Matheus
                </div>
                <div className="flex gap-2 mt-4">
                   <div className="flex-1 h-8 bg-blue-50 text-blue-600 rounded-lg text-[10px] font-bold flex items-center justify-center">Limpar</div>
                   <div className="flex-[2] h-8 bg-[#004DFF] text-white rounded-lg text-[10px] font-bold flex items-center justify-center">Finalizar Assinatura</div>
                </div>
             </div>
          </div>
        </div>
      )
    },
    {
      number: "03.",
      title: "Auditoria",
      description: "Acesso total a auditoria e todos os dados de validade da assinatura.",
      bgColor: "bg-[#EEF2FF]",
      graphic: (
        <div className="relative w-full h-full flex items-center justify-center p-8">
          {/* Audit Document Mockup */}
          <div className="w-[85%] bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
             <div className="h-10 bg-[#004DFF] flex items-center px-6 gap-3">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                <span className="text-white font-bold text-xs">Auditoria do Documento</span>
             </div>
             <div className="p-6 space-y-6">
                <div className="space-y-2">
                   <div className="flex items-center gap-2 text-[#0066FF] font-bold text-[10px]"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17 4 12"/></svg>Dados de Revisão</div>
                   <div className="grid grid-cols-2 gap-2"><div className="h-14 bg-gray-50 rounded-lg"/><div className="h-14 bg-gray-50 rounded-lg"/></div>
                </div>
                <div className="space-y-2">
                   <div className="flex items-center gap-2 text-[#0066FF] font-bold text-[10px]"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17 4 12"/></svg>Assinatura Eletrônica</div>
                   <div className="h-20 bg-gray-50 rounded-lg"/>
                </div>
             </div>
          </div>
          {/* Floating Success Check (Obrigado) */}
          <div className="absolute bottom-6 right-0 md:right-8 w-[280px] bg-white rounded-2xl shadow-2xl border-2 border-green-100 p-5 z-20 flex items-center gap-4 scale-110">
             <div className="flex-1">
                <div className="font-bold text-sm text-[#1a1a1a]">Obrigado</div>
                <div className="text-[10px] text-gray-500">Sua assinatura foi confirmada.</div>
             </div>
             <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17 4 12"/></svg>
             </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="flex justify-center w-full bg-[#F8F8FE] py-[60px]" id="como-funciona">
      <div className="max-w-[1200px] w-full px-[142px] min-h-[1610px] flex flex-col items-center">
        
        {/* Frame Principal (914px de largura interna) */}
        <div className="w-full max-w-[914px] flex flex-col gap-[60px]">
          
          {/* Header */}
          <ScrollAnimation className="text-left w-full flex flex-col gap-[10px]">
            <div className="flex items-center gap-2 text-[#0066FF] font-bold text-sm">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Processo Simples
            </div>
            <h2 className="text-[40px] md:text-[56px] font-black text-[#1a1a1a] leading-tight tracking-tight">
              Como funciona
            </h2>
            <p className="text-[#4a5568] text-[20px] font-medium leading-relaxed max-w-[420px]">
               Três passos simples para revolucionar a distribuição de holerites na sua empresa.
            </p>
          </ScrollAnimation>

          {/* Vertical Steps */}
          <div className="flex flex-col gap-[60px] w-full">
            {steps.map((step, index) => (
              <ScrollAnimation key={index} delay={index * 0.1} className="w-full flex flex-col gap-6">
                
                {/* Step Graphic Box */}
                <div className={`w-full h-[400px] md:h-[450px] ${step.bgColor} rounded-[40px] overflow-visible relative group`}>
                  {step.graphic}
                </div>

                {/* Step Text */}
                <div className="flex flex-col gap-2 pl-4">
                  <div className="text-[#004DFF] text-2xl font-black">{step.number}</div>
                  <h3 className="text-3xl font-black text-[#1a1a1a] tracking-tight">{step.title}</h3>
                  <p className="text-[#4a5568] text-lg max-w-[500px] leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>

              </ScrollAnimation>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
