'use client';

import { useState } from 'react';

export default function FAQComparison() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const faqs = [
    {
      question: "Preciso integrar com meu sistema atual?",
      answer: "Não. O Holerite Digital funciona de forma independente. Basta fazer o upload dos PDFs gerados pelo seu sistema atual, e nossa plataforma cuida do resto."
    },
    {
      question: "Como é garantida a segurança dos dados?",
      answer: "Utilizamos criptografia de ponta a ponta e seguimos rigorosamente a LGPD. Seus dados são armazenados em servidores seguros com monitoramento 24/7."
    },
    {
      question: "Como os dados são extraídos do arquivo PDF?",
      answer: "Nossa IA de alta precisão lê e interpreta os campos do PDF, identificando automaticamente funcionário, valores e competências sem erros manuais."
    },
    {
      question: "O sistema consegue processar holerites com mais de uma página?",
      answer: "Sim. A plataforma identifica documentos multi-página e separa cada holerite corretamente para o funcionário correspondente."
    },
    {
      question: "Quanto tempo leva para implantar?",
      answer: "A implantação é imediata. Após o cadastro, você já pode realizar o primeiro upload e começar a disparar os holerites em minutos."
    },
    {
      question: "Os funcionários precisam instalar algum aplicativo?",
      answer: "Não. Eles recebem um link seguro via WhatsApp e podem visualizar o holerite diretamente no navegador do celular ou computador."
    }
  ];

  return (
    // Dobra 9 - Container Mestre (Fundo #F8F8FE)
    <section className="flex justify-center w-full bg-[#F8F8FE] py-[60px] px-[48px] min-h-[801px]" id="faq">
      <div className="w-full max-w-[1102px] flex flex-col md:flex-row justify-between items-start gap-[60px]">
        
        {/* Frame 3 - Bloco de Título (Lado Esquerdo) */}
        <div className="w-full md:w-[475px] flex flex-col gap-[20px]">
          <div className="flex items-center gap-[10px] text-[#004DFF]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
               <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
               <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <span className="text-[16px] font-medium tracking-[-0.03em]">FAQ</span>
          </div>
          <h2 className="text-[40px] font-bold leading-[46px] tracking-[-0.03em] text-[#111]">
            Perguntas Frequentes
          </h2>
          <p className="text-[18px] font-semibold opacity-70 text-[#111] leading-[150%] max-w-[343px]">
            Respostas para as dúvidas mais comuns sobre o Holerite Digital.
          </p>
        </div>

        {/* Frame 63 - Bloco do Acordeão (Lado Direito) */}
        <div className="w-full md:w-[610px] flex flex-col gap-[20px]">
          {faqs.map((faq, index) => (
             <div 
               key={index} 
               className="w-full"
               onMouseEnter={() => setOpenIndex(index)}
               onMouseLeave={() => setOpenIndex(-1)}
             >
               <div 
                 className={`bg-white rounded-[20px] p-[24px] cursor-pointer transition-all duration-300 shadow-sm hover:shadow-md ${openIndex === index ? 'shadow-blue-100' : ''}`}
                 onClick={() => toggleAccordion(index)}
               >
                 <div className="flex justify-between items-center w-full gap-[20px]">
                   <h4 className="text-[20px] md:text-[24px] font-semibold text-[#111] tracking-[-0.03em] leading-tight">
                     {faq.question}
                   </h4>
                   <div className={`w-8 h-8 flex items-center justify-center transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`}>
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#004DFF" strokeWidth="2">
                        <path d="M6 9l6 6 6-6"/>
                      </svg>
                   </div>
                 </div>
                 
                 {/* Conteúdo da Resposta */}
                 <div className={`grid transition-all duration-300 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100 mt-[20px]' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden">
                       <p className="text-[18px] font-semibold text-[#111] opacity-70 leading-[150%]">
                         {faq.answer}
                       </p>
                    </div>
                 </div>
               </div>
             </div>
          ))}
        </div>

      </div>
    </section>
  );
}