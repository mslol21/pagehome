import ScrollAnimation from '../ui/ScrollAnimation';

export default function Comparison() {
  return (
    <section className="bg-gradient-to-b from-[#FFF7ED] to-[#FDF2F8] py-[100px] flex justify-center w-full" id="comparativo">
      <div className="max-w-[1200px] w-full px-[45px]">
        
        <ScrollAnimation className="text-center mb-[60px]">
          <div className="inline-flex items-center gap-2 text-[#0066FF] mb-5">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7.75 12L10.58 14.83L16.25 9.17004" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-[#0066FF] font-semibold text-sm">Comparativo</span>
          </div>
          <h2 className="text-[40px] md:text-[48px] font-bold mb-[15px] text-[#1a1a1a] leading-tight tracking-tight">Ganhe tempo com automação</h2>
          <p className="text-[#4a5568] text-lg">Compare e veja como nossa solução é superior aos métodos tradicionais.</p>
        </ScrollAnimation>

        <ScrollAnimation delay={0.2} className="bg-white rounded-[32px] p-[60px] shadow-sm">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Header Column */}
            <div className="flex flex-col justify-center border-b md:border-b-0 md:border-r border-gray-100 pb-8 md:pb-0 md:pr-8">
              <h3 className="text-[24px] font-bold text-[#1a1a1a] mb-2">Comparativo de<br/>Tempo e Custo</h3>
              <p className="text-[#4a5568] text-sm">Análise baseada em uma empresa com 100 funcionários.</p>
            </div>

            {/* Traditional Method */}
            <div className="flex flex-col justify-center border-b md:border-b-0 md:border-r border-gray-100 pb-8 md:pb-0 md:px-8">
               <div className="text-[#E53E3E] font-bold mb-4 flex items-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-[#E53E3E]" />
                 Método Tradicional
               </div>
               <div className="mb-6">
                 <p className="text-4xl font-bold text-[#1a1a1a] mb-1">40h</p>
                 <p className="text-[#4a5568] text-sm">Tempo gasto mensalmente</p>
               </div>
               <ul className="space-y-3">
                 <li className="flex items-start gap-2 text-[#4a5568] text-[15px]">
                   <span className="text-[#E53E3E] mt-1">✕</span> Processo manual e lento
                 </li>
                 <li className="flex items-start gap-2 text-[#4a5568] text-[15px]">
                   <span className="text-[#E53E3E] mt-1">✕</span> Alto risco de erros
                 </li>
                 <li className="flex items-start gap-2 text-[#4a5568] text-[15px]">
                    <span className="text-[#E53E3E] mt-1">✕</span> Custo operacional elevado
                 </li>
               </ul>
            </div>

            {/* Holerite Digital */}
            <div className="flex flex-col justify-center md:pl-8 relative text-left">
               {/* Optional Highlight for this column can go here */}
               <div className="text-[#0066FF] font-bold mb-4 flex items-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-[#0066FF]" />
                 Holerite Digital
               </div>
               <div className="mb-6">
                 <p className="text-4xl font-bold text-[#1a1a1a] mb-1">15min</p>
                 <p className="text-[#4a5568] text-sm">Tempo gasto mensalmente</p>
               </div>
               <ul className="space-y-3">
                 <li className="flex items-start gap-2 text-[#4a5568] text-[15px]">
                   <span className="text-[#0066FF] font-bold mt-1">✓</span> Automação completa
                 </li>
                 <li className="flex items-start gap-2 text-[#4a5568] text-[15px]">
                   <span className="text-[#0066FF] font-bold mt-1">✓</span> Zero erros de envio
                 </li>
                 <li className="flex items-start gap-2 text-[#4a5568] text-[15px]">
                    <span className="text-[#0066FF] font-bold mt-1">✓</span> Redução de 90% nos custos
                 </li>
               </ul>
            </div>

          </div>
        </ScrollAnimation>
        
      </div>
    </section>
  );
}
