'use client';

import { useState } from 'react';

export default function AssinaturaFold7() {
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
    <section className="bg-[#F8F8FE] py-[60px] flex justify-center w-full" id="faq">
      <div className="max-w-[1400px] w-full px-6 lg:px-[48px]">
        
        {/* Grid 50/50: Texto fixo à esquerda | Cards accordion à direita */}
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-start">
          
          {/* LADO ESQUERDO: Texto Fixo (Sticky) */}
          <div className="flex flex-col gap-5 pt-10">
            <div>
              {/* Badge */}
              <div className="flex items-center gap-[10px] text-[#004DFF] mb-6 font-medium text-[16px]">
                <div className="w-5 h-5 rounded-full border-2 border-[#004DFF] flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                    <path d="M20 6L9 17 4 12"/>
                  </svg>
                </div>
                FAQ
              </div>

              {/* Título e Descrição */}
              <div className="flex flex-col gap-5">
                <h2 className="text-[40px] font-bold text-[#111] leading-[46px] tracking-[-0.03em]">
                  Perguntas Frequentes
                </h2>
                <p className="text-[#111] opacity-70 text-[18px] font-semibold leading-[150%] max-w-[420px]">
                  Respostas para as dúvidas mais comuns sobre o Holerite Digital.
                </p>
              </div>
            </div>
          </div>

          {/* LADO DIREITO: Cards Accordion com Hover */}
          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className={`bg-white rounded-[20px] transition-all duration-300 ${
                  openIndex === index 
                    ? 'border-[#004DFF] border-2 shadow-lg p-6' 
                    : 'border border-gray-100 hover:border-[#004DFF] hover:shadow-md hover:scale-[1.02] p-6'
                }`}
                onMouseEnter={() => setOpenIndex(index)}
                onMouseLeave={() => setOpenIndex(-1)}
              >
                <div className="flex justify-between items-center gap-5">
                  {/* Pergunta */}
                  <h4 className={`text-[20px] font-semibold leading-[24px] tracking-[-0.03em] flex-1 transition-colors ${
                    openIndex === index ? 'text-[#004DFF]' : 'text-[#111]'
                  }`}>
                    {faq.question}
                  </h4>
                  {/* Chevron Icon */}
                  <div className={`transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={openIndex === index ? "#004DFF" : "#111"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                  </div>
                </div>

                {/* Resposta (aparece ao fazer hover) */}
                {openIndex === index && (
                  <div className="mt-4 animate-in fade-in slide-in-from-top-2 duration-300">
                    <p className="text-[#111] opacity-70 text-[18px] font-semibold leading-[150%]">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}