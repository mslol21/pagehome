"use client";
import { useState } from 'react';
import ScrollAnimation from '../ui/ScrollAnimation';

export default function AssinaturaFold6() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Preciso integrar com meu sistema atual?",
      answer: "Não. O Holerite Digital funciona de forma independente. Basta fazer o upload dos PDFs gerados pelo seu sistema atual, e nossa plataforma cuida do resto."
    },
    {
      question: "Como é garantida a segurança dos dados?",
      answer: "Utilizamos criptografia de ponta a ponta e seguimos rigorosamente todas as diretrizes da LGPD (Lei Geral de Proteção de Dados) para garantir que as informações da sua empresa e colaboradores estejam sempre seguras."
    },
    {
      question: "Como os dados são extraídos do arquivo PDF?",
      answer: "Nossa inteligência artificial de leitura processa os arquivos PDF em segundos, identificando automaticamente os campos de cada colaborar e separando-os para o envio individual via WhatsApp."
    },
    {
      question: "O sistema consegue processar holerites com mais de uma página?",
      answer: "Sim! O sistema é capaz de identificar e agrupar múltiplas páginas para o mesmo colaborador, garantindo que ele receba o documento completo em um único envio."
    },
    {
      question: "Quanto tempo leva para implantar?",
      answer: "A implantação é imediata. Como não requer integração técnica complexa, você pode começar a enviar seus holerites digitais no mesmo dia da contratação."
    },
    {
      question: "Os funcionários precisam instalar algum aplicativo?",
      answer: "Não. Os funcionários recebem e assinam tudo diretamente pelo WhatsApp, sem necessidade de baixar novos aplicativos ou criar contas complexas."
    }
  ];

  return (
    <section className="bg-[#F8F8FE] py-[60px] flex justify-center w-full min-h-[801px]" id="faq">
      <div className="max-w-[1244px] w-full px-[48px] flex justify-center">
        
        {/* Frame Interno (1102x681px) */}
        <div className="w-full max-w-[1102px] h-auto md:h-[681px] flex flex-col md:flex-row justify-between items-start gap-12 md:gap-0">
          
          {/* Left Column: Title Block */}
          <div className="w-full md:max-w-[420px] pt-10">
            <ScrollAnimation className="flex flex-col gap-5">
              <div className="inline-flex items-center gap-2 text-[#0066FF] font-bold text-sm">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.48 2 12C2 17.5 6.5 22 12 22Z"/>
                  <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>
                FAQ
              </div>
              <h2 className="text-[40px] md:text-[56px] font-black text-[#1a1a1a] leading-[1.1]">
                Perguntas Frequentes
              </h2>
              <p className="text-[#4a5568] text-lg max-w-[340px] leading-relaxed">
                Respostas para as dúvidas mais comuns sobre o Holerite Digital.
              </p>
            </ScrollAnimation>
          </div>

          {/* Right Column: Accordion */}
          <div className="w-full md:max-w-[610px] flex flex-col gap-4 overflow-y-auto pr-2 custom-scrollbar">
            {faqs.map((faq, index) => (
              <ScrollAnimation key={index} delay={index * 0.05} className="w-full">
                <div 
                  className={`border-b border-gray-100 transition-all duration-300 ${openIndex === index ? 'bg-white rounded-2xl p-6 shadow-sm mb-4 border-none' : 'py-5 cursor-pointer hover:pl-2'}`}
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                >
                  <div className="flex justify-between items-center gap-4">
                    <h3 className={`text-[17px] font-bold tracking-tight transition-colors ${openIndex === index ? 'text-[#004DFF]' : 'text-[#1a1a1a]'}`}>
                      {faq.question}
                    </h3>
                    <div className={`flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={openIndex === index ? "#004DFF" : "#1a1a1a"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"/>
                      </svg>
                    </div>
                  </div>
                  
                  {openIndex === index && (
                    <div className="mt-4 animate-in fade-in slide-in-from-top-2 duration-300">
                      <p className="text-[#4a5568] text-[15px] leading-relaxed font-medium">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              </ScrollAnimation>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
