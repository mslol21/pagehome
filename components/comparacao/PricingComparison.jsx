import Link from 'next/link';
import ScrollAnimation from '../ui/ScrollAnimation';

export default function PricingComparison() {
  const plans = [
    {
      name: 'Start',
      price: '59,80',
      period: '/Por mês',
      note: '*Válido para empresas com até 20 funcionários',
      features: [
        'Envie até 3 documentos por funcionário por mês',
        'Processamento automático com IA',
        'Envio seguro via Whatsapp',
        'Suporte dedicado',
        'R$0,50 por documento extra'
      ],
      buttonText: 'Fale Conosco',
      highlight: false
    },
    {
      name: 'Profisisonal',
      price: '2,99',
      period: 'Pro funcionário por mês',
      note: '*Mais vendido',
      features: [
        'Envie até 3 documentos por funcionário por mês',
        'Processamento automático com IA',
        'Envio seguro via Whatsapp',
        'Suporte dedicado',
        'R$0,50 por documento extra'
      ],
      buttonText: 'Fale Conosco',
      highlight: true
    },
    {
      name: 'Empresarial',
      price: 'Sob consulta',
      period: '',
      note: '',
      features: [
        'Acima de 500 funcionários',
        'Monte o plano ideal de acordo com as necessidades da sua empresa'
      ],
      buttonText: 'Fale Conosco',
      highlight: false
    }
  ];

  return (
    <section className="flex justify-center w-full bg-[#F8F8FE] py-[60px]" id="investimento">
      <div className="max-w-[1200px] w-full px-[45px] flex flex-col items-center min-h-[645px]">
        
        {/* Badge & Title */}
        <ScrollAnimation className="text-center mb-[60px]">
          <div className="inline-flex items-center gap-2 text-[#0066FF] mb-5 font-semibold text-sm">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z" fill="currentColor"/>
            </svg>
            Investimento
          </div>
          <h2 className="text-[40px] md:text-[56px] font-bold mb-[20px] text-[#1a1a1a] leading-tight tracking-tight">
            Comece agora mesmo
          </h2>
          <p className="text-[#4a5568] text-lg max-w-[700px] mx-auto leading-relaxed">
            Experimente gratuitamente por 1 mês ou assine nosso plano empresarial
          </p>
        </ScrollAnimation>

        {/* Pricing Table */}
        <div className="grid md:grid-cols-3 gap-6 w-full relative z-10">
          {plans.map((plan, index) => (
            <ScrollAnimation key={index} delay={index * 0.1} className={`bg-[#EFF6FF] rounded-[32px] p-8 border ${plan.highlight ? 'border-[#0055FF] ring-1 ring-[#0055FF]' : 'border-blue-50'} flex flex-col relative`}>
              
              <div className="flex justify-between items-start mb-6">
                 <div className={`${index === 0 ? 'bg-white text-gray-900 border border-gray-100' : index === 1 ? 'bg-[#0055FF] text-white' : 'bg-[#1a1a1a] text-white'} px-4 py-1.5 rounded-full text-sm font-bold`}>
                   {plan.name}
                 </div>
                 {plan.note && (
                   <span className="text-[10px] font-bold text-gray-500 uppercase text-right leading-tight max-w-[100px]">
                     {plan.note}
                   </span>
                 )}
              </div>

              <div className="mb-8">
                 {plan.price === 'Sob consulta' ? (
                   <h3 className="text-[44px] font-bold text-[#1a1a1a] leading-none mb-2">Sob consulta</h3>
                 ) : (
                   <div className="flex items-baseline gap-1">
                      <span className="text-xl font-bold text-[#1a1a1a]">R$</span>
                      <span className="text-[52px] font-black text-[#1a1a1a] leading-none">{plan.price}</span>
                      <span className="text-xs font-bold text-gray-500 ml-1">{plan.period}</span>
                   </div>
                 )}
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                 {plan.features.map((feature, i) => (
                   <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-white border border-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                         <svg width="10" height="8" viewBox="0 0 12 10" fill="none"><path d="M1 5L4.5 8.5L11 1.5" stroke="#0055FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                      <span className="text-sm font-bold text-[#1a1a1a] leading-tight">{feature}</span>
                   </li>
                 ))}
              </ul>

              <Link
                href="#contato"
                className={`h-[56px] w-full rounded-2xl font-bold flex items-center justify-center gap-2 transition-all ${plan.highlight ? 'bg-[#0055FF] text-white' : 'bg-[#0055FF] text-white'} hover:opacity-90`}
              >
                {plan.buttonText}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="transition-transform"><path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </ScrollAnimation>
          ))}
        </div>

      </div>
    </section>
  );
}
