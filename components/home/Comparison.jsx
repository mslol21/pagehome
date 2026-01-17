'use client';



export default function Comparison() {
  const recursos = [
    'Entrega dos holerites',
    'Assinatura Eletrônica',
    'Integração com sistema atual',
    'Facilidade de Implantação',
    'Custo-Benefício',
    'Segurança Jurídica',
    'Suporte'
  ];

  const holeriteDigital = [
    'Direto no WhatsApp do colaborador',
    'Inclusa, com validade jurídica',
    'Funciona com qualquer PDF, sem trocar ERP',
    'Comece a usar em 5 minutos',
    'Pagamento por funcionário, sem mensalidade',
    'Auditoria + comprovação automática de leitura',
    'Atendimento humano no WhatsApp'
  ];

  const outrasSolucoes = [
    'E-mail ou App que precisa ser instalado',
    'Sem assinatura',
    'Geralmente exige integracao complexa',
    'Implantação demorada (semanas/meses)',
    'Licenças caras e contratos longos',
    'Sem comprovação de recebimento',
    'Suporte técnico limitado ou demorado'
  ];

  return (
    // Dobra 6 - Container Mestre (Fundo Branco #F8F8FE)
    <section className="bg-[#F8F8FE] py-[60px] px-[45px] flex justify-center w-full min-h-[683px]">
      <div className="max-w-[1200px] w-full flex flex-col items-center gap-[60px]">
        
        {/* Frame 3 - Cabeçalho */}
        <div className="flex flex-col items-center gap-[20px] text-center max-w-[570px]">
          <div className="flex items-center gap-[10px] text-[#004DFF]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            <span className="text-[16px] font-medium tracking-[-0.03em]">Porque utilizar o holerite</span>
          </div>
          <h2 className="text-[40px] font-bold leading-[46px] tracking-[-0.03em] text-[#111]">
            Holerite x concorrentes
          </h2>
          <p className="text-[18px] font-semibold opacity-70 text-[#111]">
            Experimente gratuitamente por 1 mês ou assine nosso plano empresarial
          </p>
        </div>

        {/* Frame 142 - Grid de Comparação */}
        <div className="flex flex-col md:flex-row gap-[20px] w-full max-w-[1104px]">
          
          {/* Coluna 1: Recursos (Azul Claro) */}
          <div className="w-full md:w-[238px] bg-[#E0E9FE] p-[18px] rounded-[18px] flex flex-col gap-[18px]">
            <h3 className="text-[21.5px] font-semibold tracking-[-0.03em] text-[#111]">Recursos</h3>
            <div className="flex flex-col">
              {recursos.map((item, idx) => (
                <div key={idx} className="h-[42px] flex items-center border-b border-[#7CA3FD] last:border-0">
                  <span className="text-[16px] font-semibold text-[#111]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Coluna 2: Holerite Digital (Azul Claro - Principal) */}
          <div className="w-full md:w-[414px] bg-[#E0E9FE] p-[18px] rounded-[18px] flex flex-col gap-[18px] border-2 border-[#004DFF]/20">
            <h3 className="text-[21.5px] font-semibold tracking-[-0.03em] text-[#111]">Holerite Digital</h3>
            <div className="flex flex-col">
              {holeriteDigital.map((item, idx) => (
                <div key={idx} className="h-[42px] flex items-center gap-[9px]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#004DFF" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span className="text-[16px] font-semibold text-[#111] leading-tight">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Coluna 3: Outras Soluções (Opacidade 50%) */}
          <div className="w-full md:w-[410px] bg-[#E0E9FE]/50 p-[18px] rounded-[18px] flex flex-col gap-[18px]">
            <h3 className="text-[21.5px] font-semibold tracking-[-0.03em] text-[#111] opacity-70">Outras Soluções</h3>
            <div className="flex flex-col">
              {outrasSolucoes.map((item, idx) => (
                <div key={idx} className="h-[42px] flex items-center gap-[9px]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF000D" strokeWidth="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                  <span className="text-[16px] font-semibold text-[#111] opacity-60 leading-tight">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}