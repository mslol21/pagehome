'use client';

import { useState } from 'react';

export default function FAQ() {
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
      answer: "Utilizamos criptografia de ponta a ponta e estamos totalmente adequados à LGPD. Seus dados são armazenados em servidores seguros com backups automáticos."
    },
    {
      question: "Como os dados são extraídos do arquivo PDF?",
      answer: "Nossa Inteligência Artificial proprietária analisa o layout do seu PDF e identifica automaticamente campos como Nome, CPF, Matrícula e Empresa para separar os arquivos."
    },
    {
      question: "O sistema consegue processar holerites com mais de uma página?",
      answer: "Sim. O sistema identifica as quebras de página e agrupa o conteúdo corretamente para cada funcionário, independente do número de páginas do documento original."
    },
    {
      question: "Quanto tempo leva para implantar?",
      answer: "A implantação é imediata. Após criar sua conta, você já pode realizar o primeiro upload e começar os envios em menos de 10 minutos."
    },
    {
      question: "Os funcionários precisam instalar algum aplicativo?",
      answer: "Não. Os funcionários recebem um link seguro via WhatsApp e visualizam o holerite diretamente no navegador do celular, sem precisar baixar nada."
    }
  ];

  return (
    // Dobra 8 - Container Mestre (Fundo Branco #F8F8FE e Padding 60px 48px)
    <section className="bg-[#F8F8FE] py-[60px] flex justify-center w-full min-h-[801px]" id="faq">
      <div className="w-full max-w-[1200px] px-[48px] flex flex-col md:flex-row gap-[60px]">
        
        {/* Lado Esquerdo - Cabeçalho (Width 570px conforme lógica de dobra anterior) */}
        <div className="w-full md:w-[450px]">
          <div className="flex items-center gap-2 text-[#004DFF] mb-[20px]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            <span className="font-medium text-[16px] tracking-[-0.03em]">FAQ</span>
          </div>
          <h2 className="text-[40px] md:text-[48px] font-bold text-[#111] mb-[20px] leading-[1.1] tracking-[-0.03em]">
            Perguntas<br/>Frequentes
          </h2>
          <p className="text-[#111] text-[18px] opacity-70 leading-relaxed max-w-[340px]">
            Respostas para as dúvidas mais comuns sobre o Holerite Digital.
          </p>
        </div>

        {/* Lado Direito - Accordion (Cards Brancos com Cantos Arredondados) */}
        <div className="flex-1 flex flex-col gap-[20px]">
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
                 <div className="flex justify-between items-center gap-4">
                   <h3 className="font-bold text-[20px] text-[#111] tracking-[-0.03em]">
                     {faq.question}
                   </h3>
                   <div className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-[#004DFF]' : 'text-[#004DFF]'}`}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                   </div>
                 </div>
                 
                 {/* Conteúdo da Resposta com Click ou Hover (Aparece se openIndex bater) */}
                 <div className={`grid transition-all duration-300 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100 mt-[20px]' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden">
                      <p className="text-[#111] text-[18px] opacity-70 leading-relaxed">
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