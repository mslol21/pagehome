'use client';

import { useState } from 'react';
import ScrollAnimation from '../ui/ScrollAnimation';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const faqs = [
    {
      question: "O Holerite Digital tem validade jurídica?",
      answer: "Sim. Nossos documentos utilizam assinatura eletrônica avançada com carimbo do tempo, garantindo total validade jurídica conforme a MP 2.200-2/2001 e a Lei 14.063/2020."
    },
    {
      question: "Preciso instalar algum aplicativo?",
      answer: "Não. Tanto o RH quanto os funcionários acessam tudo via navegador web ou WhatsApp, sem necessidade de baixar ou instalar aplicativos."
    },
    {
      question: "Como funciona a integração com meu sistema de folha?",
      answer: "É extremamente simples. Você apenas exporta os holerites em PDF do seu sistema atual e faz o upload na nossa plataforma. Nossa IA identifica e separa os documentos automaticamente."
    },
    {
      question: "Meus dados e dos funcionários estão seguros?",
      answer: "Absolutamente. Utilizamos criptografia de ponta a ponta, servidores seguros (AWS) e estamos totalmente adequados à LGPD (Lei Geral de Proteção de Dados)."
    },
    {
       question: "Quanto tempo leva para implantar?",
       answer: "Você pode começar a usar imediatamente. Basta criar sua conta, configurar os dados básicos da empresa e fazer o primeiro upload. Todo o processo leva menos de 15 minutos."
    }
  ];

  return (
    <section className="flex justify-center w-full bg-[#f8f8fe] py-[60px]" id="faq">
      <div className="w-[1200px] px-[45px] grid md:grid-cols-2 gap-[60px]">
        
        {/* Left Side */}
        <ScrollAnimation>
          <div className="inline-flex items-center gap-2 text-[#0066FF] mb-5">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7.75 12L10.58 14.83L16.25 9.17004" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="font-semibold text-sm">Tira Dúvidas</span>
          </div>
          <h2 className="text-[40px] md:text-[48px] font-bold text-[#1a1a1a] mb-5 leading-tight tracking-tight">
            Perguntas<br/>Frequentes
          </h2>
          <p className="text-[#4a5568] text-lg max-w-[400px]">
            Tudo o que você precisa saber sobre a nossa plataforma de holerites digitais.
          </p>
        </ScrollAnimation>

        {/* Right Side - Accordion */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
             <ScrollAnimation key={index} delay={0.1 * index} className="w-full">
               <div 
                 className={`bg-white rounded-[20px] p-6 cursor-pointer transition-all duration-300 border ${openIndex === index ? 'border-[#0066FF] shadow-md' : 'border-transparent shadow-sm hover:shadow-md'}`}
                 onClick={() => toggleAccordion(index)}
               >
                 <div className="flex justify-between items-center gap-4">
                   <h3 className={`font-bold text-lg ${openIndex === index ? 'text-[#0066FF]' : 'text-[#1a1a1a]'}`}>{faq.question}</h3>
                   <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'bg-[#0066FF] text-white rotate-180' : 'bg-[#F0F4FF] text-[#0066FF]'}`}>
                      <svg width="12" height="12" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                   </div>
                 </div>
                 <div className={`grid transition-all duration-300 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                    <div className="overflow-hidden">
                      <p className="text-[#4a5568] leading-relaxed">{faq.answer}</p>
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
