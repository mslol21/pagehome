'use client';

import { useState } from 'react';
import ScrollAnimation from '../ui/ScrollAnimation';

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
    <section className="flex justify-center w-full bg-[#F8F8FE] py-[60px]" id="faq-comparacao">
      <div className="w-[1200px] min-h-[801px] relative flex flex-col md:flex-row px-[49px]">
        
        {/* Column 1: Title Block */}
        <div className="w-full md:w-[475px] h-auto md:h-[158px] mt-[10px] md:mt-[10px] flex flex-col gap-[20px] z-10">
          <ScrollAnimation>
            <div className="inline-flex items-center gap-2 text-[#0066FF] font-black text-sm uppercase tracking-wider">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="currentColor"/>
              </svg>
              FAQ
            </div>
            <h2 className="text-[44px] md:text-[56px] font-black text-[#1a1a1a] leading-[1.1] tracking-tight mt-2">
              Perguntas Frequentes
            </h2>
            <p className="text-[#4a5568] text-[20px] font-medium leading-tight mt-4 opacity-80">
              Respostas para as dúvidas mais comuns sobre o Holerite Digital.
            </p>
          </ScrollAnimation>
        </div>

        {/* Column 2: FAQ Block */}
        <div className="w-full md:w-[610px] h-auto md:h-[681px] mt-[40px] md:mt-0 md:ml-[17px] flex flex-col gap-[20px] z-10">
          {faqs.map((faq, index) => (
             <ScrollAnimation key={index} delay={0.1 * index} className="w-full">
               <div 
                 className={`group cursor-pointer transition-all duration-300 border-b border-gray-100 pb-6`}
                 onClick={() => toggleAccordion(index)}
               >
                 <div className="flex justify-between items-center gap-4">
                   <h3 className={`font-bold text-[19px] md:text-[22px] tracking-tight ${openIndex === index ? 'text-[#0055FF]' : 'text-[#1a1a1a]'}`}>
                     {faq.question}
                   </h3>
                   <div className={`w-8 h-8 flex items-center justify-center transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'text-[#0055FF] rotate-180' : 'text-[#0055FF]'}`}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 9l6 6 6-6"/>
                      </svg>
                   </div>
                 </div>
                 <div className={`grid transition-all duration-300 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                    <div className="overflow-hidden">
                       <p className="text-[#4a5568] leading-relaxed text-[17px] font-medium pr-8">
                         {faq.answer}
                       </p>
                    </div>
                 </div>
               </div>
             </ScrollAnimation>
          ))}
        </div>

      </div>
    </section>
  );
}
