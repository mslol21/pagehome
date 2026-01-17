'use client';

import Link from 'next/link';


export default function SustainabilitySection() {
  const impactStats = [
    { label: "Holerites por funcionário/ano", value: "15 folhas" },
    { label: "Total de folhas por ano", value: "3.750 folhas" },
    { label: "Árvores necessárias", value: "0,45 árvores" },
    { label: "Água utilizada", value: "16.875 litros" },
    { label: "Energia consumida", value: "1.125 kWh" }
  ];

  const benefits = [
    { title: "Zero Papel", desc: "Elimine completamente o uso de papel na distribuição de holerites." },
    { title: "Redução da Pegada de Carbono", desc: "Menos impressões significam menos energia consumida e menos emissões de CO2." },
    { title: "Economia de Água", desc: "A produção de papel consome grandes quantidades de água que podem ser economizadas." },
    { title: "Conformidade com ISO 14001", desc: "Contribua para as metas de sustentabilidade da sua empresa e para a conformidade com normas ambientais." }
  ];

  return (
    // Dobra 6 - Container Mestre (Fundo Azul Claro #E0E9FE)
    <section className="w-full flex justify-center bg-[#E0E9FE] py-[60px] px-[48px]" id="sustentabilidade">
      <div className="w-full max-w-[1103px] flex flex-col items-center gap-[60px]">
        
        {/* Frame 3 - Cabeçalho */}
        <div className="flex flex-col items-center gap-[20px] text-center max-w-[620px]">
          <div className="flex items-center gap-[10px] text-[#004DFF]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            <span className="text-[16px] font-medium tracking-tight">Sustentabilidade</span>
          </div>
          <h2 className="text-[40px] font-bold leading-[46px] tracking-tight text-[#111]">Impacto ambiental positivo</h2>
          <p className="text-[18px] font-semibold opacity-70 text-[#111]">Além de economizar tempo e dinheiro, o Holerite Digital contribui para a sustentabilidade do planeta.</p>
        </div>

        {/* Group 59 - Layout de Duas Colunas */}
        <div className="flex flex-col lg:flex-row gap-[40px] w-full min-h-[626px]">
          
          {/* LADO ESQUERDO: Impacto Ambiental (Frame 10) */}
          <div className="flex-1 bg-gradient-to-b from-[#E1E9FE] to-[#F8F8FE] border border-[#E0E9FE] rounded-[20px] p-[20px] flex flex-col justify-between">
            <div className="flex flex-col gap-[40px]">
              <h3 className="text-[28px] font-semibold tracking-tight text-[#111] leading-tight max-w-[400px]">
                Impacto Ambiental para uma Empresa com 250 Funcionários
              </h3>
              
              <div className="flex flex-col gap-[20px]">
                {impactStats.map((stat, i) => (
                  <div key={i} className="flex justify-between items-center w-full">
                    {/* Badge Azul Médio com ícone X */}
                    <div className="bg-[#7CA3FD] h-[40px] px-[20px] rounded-full flex items-center gap-[10px]">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                      <span className="text-[16px] font-medium text-white tracking-tight">{stat.label}</span>
                    </div>
                    <span className="text-[16px] font-medium text-[#111] tracking-tight">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[18px] md:text-[24px] font-semibold text-[#111] tracking-tight leading-tight mt-10">
              *Considerando holerites mensais, 13º salário, férias e eventuais complementares
            </p>
          </div>

          {/* LADO DIREITO: Benefícios Ambientais (Frame 11) */}
          <div className="flex-1 bg-gradient-to-b from-[#E1E9FE] to-[#F8F8FE] border border-[#E0E9FE] rounded-[20px] p-[20px] flex flex-col justify-between">
            <div className="flex flex-col gap-[40px]">
              <h3 className="text-[28px] font-semibold tracking-tight text-[#111]">Benefícios Ambientais do Holerite Digital</h3>
              
              <div className="flex flex-col gap-[40px]">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex flex-col gap-[10px]">
                    <div className="flex items-center gap-[10px]">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#004DFF" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                      <span className="text-[20px] font-medium text-[#111] tracking-tight">{benefit.title}</span>
                    </div>
                    <p className="text-[16px] font-medium opacity-70 text-[#111] tracking-tight">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Card de Conclusão Verde (Frame 103) */}
            <div className="w-full bg-[#F0FDF4] border border-[#13980C] rounded-[20px] p-[20px] mt-6 flex items-center">
              <h4 className="text-[24px] font-semibold tracking-tight text-[#111] leading-tight">
                Em 5 anos, sua empresa pode salvar mais de 2 árvores e 84.000 litros de água!
              </h4>
            </div>
          </div>
        </div>

        {/* Botão Final CTA */}
        <Link href="#sustentabilidade-link" className="h-[56px] px-[40px] rounded-full bg-[#004DFF] text-white text-[16px] font-bold flex items-center gap-[12px] hover:brightness-110 transition-all shadow-lg shadow-blue-500/20 group">
          Contribua para a sustentabilidade
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
        </Link>

      </div>
    </section>
  );
}