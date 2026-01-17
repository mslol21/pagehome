'use client';

export default function HowItWorks() {
  return (
    // Dobra 3 - Container Mestre com fundo #F8F8FE
    <section className="w-full flex justify-center bg-[#F8F8FE] py-[60px] px-[20px] md:px-[142px]">
      
      {/* Frame 112 - Layout de Duas Colunas */}
      <div className="w-full max-w-[914px] flex flex-col md:flex-row items-start gap-[53px]">
        
        {/* COLUNA ESQUERDA: Frame 3 - Cabeçalho Fixo */}
        <div className="flex flex-col justify-center items-start gap-[20px] w-full md:w-[387px]">
          
          {/* Frame 6 - Badge */}
          <div className="flex items-center justify-center gap-[10px] h-[18px] text-[#004DFF]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <span className="text-[16px] font-medium leading-[18px] tracking-[-0.03em]">Processo Simples</span>
          </div>

          {/* Frame 4 - Títulos */}
          <div className="flex flex-col gap-[20px]">
            <h2 className="text-[40px] font-bold leading-[46px] tracking-[-0.03em] text-[#111]">
              Como funciona
            </h2>
            <p className="text-[18px] font-semibold leading-[150%] text-[#111] opacity-70">
              Três passos simples para revolucionar a distribuição de holerites na sua empresa.
            </p>
          </div>
        </div>

        {/* COLUNA DIREITA: Frame 126 - Linha do Tempo de Passos */}
        <div className="flex flex-col gap-[53px] w-full md:w-[474px]">
          
          {/* PASSO 01: Upload */}
          <div className="flex flex-col gap-[12px] p-[20px] bg-gradient-to-b from-[#E1E9FE] to-[#F8F8FE] rounded-[20px] border border-[#E0E9FE]">
            {/* Visual Card 01 */}
            <div className="bg-[#F8F8FE] rounded-[20px] p-[20px] h-[240px] relative flex flex-col gap-[20px]">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-[22px] h-[23px] bg-[#004DFF] rounded-sm" />
                  <span className="text-[20px] font-semibold text-[#111]">Holerites_Janeiro.pdf</span>
                </div>
                <div className="w-full h-[6px] bg-[#E0E9FE] rounded-full relative overflow-hidden">
                  <div className="absolute left-0 top-0 h-full w-[45%] bg-[#004DFF]" />
                </div>
              </div>
              <div className="flex-grow border-2 border-dashed border-[#7CA3FD] rounded-[20px] flex items-center justify-center">
                <span className="text-[20px] font-semibold text-[#111] opacity-60">Arraste seu PDF aqui</span>
              </div>
              <button className="absolute bottom-5 right-5 bg-[#004DFF] text-white px-5 py-2 rounded-lg text-[20px] font-semibold flex items-center gap-2">
                Upload <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/></svg>
              </button>
            </div>
            {/* Texto Passo 01 */}
            <div className="mt-4">
              <span className="text-[#004DFF] text-[20px] font-semibold">01.</span>
              <h3 className="text-[28px] font-semibold text-[#111] mt-1">Faça Upload dos PDFs</h3>
              <p className="text-[18px] text-[#111] opacity-70 mt-2">Carregue os arquivos PDF dos holerites na nossa plataforma segura.</p>
            </div>
          </div>

          {/* PASSO 02: Processamento */}
          <div className="flex flex-col gap-[12px] p-[20px] bg-gradient-to-b from-[#E1E9FE] to-[#F8F8FE] rounded-[20px] border border-[#E0E9FE]">
            {/* Visual Card 02 */}
            <div className="bg-[#F8F8FE] rounded-[20px] p-[20px] h-[240px] relative flex items-center justify-center">
               <img src="/passo2-processamento.png" alt="Processamento Automático" className="w-full h-auto object-contain" />
            </div>
            {/* Texto Passo 02 */}
            <div className="mt-4">
              <span className="text-[#004DFF] text-[20px] font-semibold">02.</span>
              <h3 className="text-[28px] font-semibold text-[#111] mt-1">Processamento Automático</h3>
              <p className="text-[18px] text-[#111] opacity-70 mt-2">Nossa IA processa os documentos, extraindo e organizando todas as informações.</p>
            </div>
          </div>

          {/* PASSO 03: Revisão e Envio */}
          <div className="flex flex-col gap-[12px] p-[20px] bg-gradient-to-b from-[#E1E9FE] to-[#F8F8FE] rounded-[20px] border border-[#E0E9FE]">
            {/* Visual Card 03 */}
            <div className="bg-[#F8F8FE] rounded-[20px] p-[20px] h-[240px] relative flex items-center justify-center">
               <img src="/processo-step2.png" alt="Revisão e Envio" className="w-full h-auto object-contain" />
            </div>
            {/* Texto Passo 03 */}
            <div className="mt-4">
              <span className="text-[#004DFF] text-[20px] font-semibold">03.</span>
              <h3 className="text-[28px] font-semibold text-[#111] mt-1">Revisão e Envio</h3>
              <p className="text-[18px] text-[#111] opacity-70 mt-2">Revise os dados extraídos e envie um link de acesso seguro para cada funcionário.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}