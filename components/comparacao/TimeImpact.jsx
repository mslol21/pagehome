'use client';

import Link from 'next/link';


export default function ImpactSection() {
  const calculations = [
    { label: "Total de colaboradores", value: "250", unit: "Funcionários" },
    { label: "Tempo médio por holerite", value: "5", unit: "Minutos por funcionário" },
    { label: "Equivalente a 3 dias de trabalho", value: "1.250", unit: "Minutos totais" }
  ];

  const painPoints = [
    { title: "Deslocamento entre filiais", desc: "Horas adicionais para entregar holerites em diferentes locais" },
    { title: "Funcionários ausentes", desc: "Tentativas repetidas de entrega para quem está de férias ou afastado" },
    { title: "Reimpressões e correções", desc: "Holerites perdidos, danificados ou com erros que precisam ser refeitos" },
    { title: "Arquivamento e organização", desc: "Tempo gasto para organizar, arquivar e recuperar documentos físicos" }
  ];

  return (
    // Dobra 2 - Container Mestre (Fundo Branco #F8F8FE)
    <section className="w-full flex justify-center bg-[#F8F8FE] py-[60px] px-[48px]">
      <div className="w-full max-w-[1104px] flex flex-col items-center gap-[60px]">
        
        {/* Frame 3 - Cabeçalho centralizado */}
        <div className="flex flex-col items-center gap-[20px] max-w-[570px] text-center">
          <div className="flex items-center gap-[10px] h-[18px] text-[#004DFF]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            <span className="text-[16px] font-medium tracking-[-0.03em]">O impacto do seu tempo</span>
          </div>
          <h2 className="text-[40px] font-bold leading-[46px] tracking-[-0.03em] text-[#111]">O verdadeiro valor do seu tempo</h2>
          <p className="text-[18px] font-semibold opacity-70 text-[#111]">Veja quanto tempo sua equipe de RH está desperdiçando com a distribuição manual de holerites.</p>
        </div>

        {/* Frame 84 - Conteúdo de Duas Colunas */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-5 w-full min-h-[598px]">
          
          {/* LADO ESQUERDO: Frame 71 (Cálculo do RH) */}
          <div className="w-full lg:w-[542px] min-h-[598px] bg-gradient-to-tr from-[#FAF4F8] to-[#FF000D]/10 rounded-[20px] p-[20px] flex flex-col justify-between items-center">
            <div className="flex flex-col gap-[10px] w-full">
              {/* Grid 3 colunas (Frame 82) */}
              <div className="flex flex-row gap-[10px] w-full">
                {calculations.map((calc, i) => (
                  <div key={i} className="flex-1 h-[176px] bg-[#FAF4F8] border border-[#FF000D] rounded-[20px] p-5 flex flex-col justify-between">
                    <span className="text-[15px] font-bold leading-[17px] text-[#FF4242] tracking-tight">{calc.label}</span>
                    <div>
                      <div className="text-[40px] font-bold leading-[46px] text-[#111]">{calc.value}</div>
                      <div className="text-[14px] font-bold text-[#111] opacity-80">{calc.unit}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Card Destaque (Frame 75) */}
              <div className="w-full h-[176px] bg-[#FFD5D6] border border-[#FF000D] rounded-[20px] p-5 flex flex-col justify-between">
                <span className="text-[15px] font-bold text-[#111] tracking-tight uppercase">Tempo desperdiçado</span>
                <div>
                  <div className="text-[40px] font-bold text-[#111]">+21</div>
                  <div className="text-[24px] font-bold text-[#111]">Horas por mês</div>
                </div>
              </div>
            </div>

            <p className="text-[18px] font-semibold text-[#111] opacity-70 px-4">
              Para uma empresa com 250 funcionários, o processo manual de distribuição de holerites consome mais de 21 horas por mês da sua equipe de RH.
            </p>
          </div>

          {/* LADO DIREITO: Frame 72 (Lista de Problemas) */}
          <div className="w-full lg:w-[542px] min-h-[598px] bg-gradient-to-b from-[#FF000D]/10 to-[#FAF4F8] rounded-[20px] p-[20px] flex flex-col gap-[10px] justify-center items-center">
            {painPoints.map((item, i) => (
              <div key={i} className="w-full h-[99px] bg-[#FAF4F8] border border-[#FF000D] rounded-[20px] p-[15px] flex flex-col justify-center">
                <div className="flex items-center gap-[10px] mb-1">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF000D" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                  <h4 className="text-[24px] font-semibold text-[#111] tracking-tight">{item.title}</h4>
                </div>
                <p className="text-[14px] font-semibold text-[#111] opacity-70 ml-8">{item.desc}</p>
              </div>
            ))}
            
            {/* Card de Conclusão */}
            <div className="w-full h-[96px] bg-[#FAF4F8] border border-[#FF000D] rounded-[20px] p-5 flex items-center">
              <h4 className="text-[24px] font-semibold text-[#111] tracking-tight leading-tight">
                Na prática, o processo pode facilmente se estender por dias ou até semanas.
              </h4>
            </div>
          </div>
        </div>

        {/* Botão Final CTA */}
        <Link href="#contato" className="h-[56px] px-8 rounded-full bg-[#004DFF] text-white font-bold flex items-center gap-2 hover:brightness-110 transition-all">
          Como eliminar essa perda de tempo?
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
        </Link>

      </div>
    </section>
  );
}