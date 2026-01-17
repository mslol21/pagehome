'use client';

import Link from 'next/link';


export default function AssinaturaFold4() {
  return (
    <section 
      /* z-index baixo para não sobrepor o conteúdo da próxima seção */
      className="flex justify-center w-full min-h-[697px] relative overflow-hidden pt-[60px] z-0"
      style={{
        background: 'radial-gradient(90.16% 76.4% at 50% 63.14%, #FFFFFF 0%, #B2C9FF 100%)'
      }}
    >
      <div className="max-w-[1400px] w-full px-6 md:px-[142px] flex flex-col items-center">
        
        {/* Frame 158: Bloco de Texto */}
        <div className="max-w-[648px] w-full flex flex-col items-center text-center gap-5 z-10 mb-12">
          <div>
            <div className="flex items-center justify-center gap-2 text-[#004DFF] mb-4 font-semibold text-[16px]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              Chega de burocracia
            </div>

            <h2 className="text-[40px] font-bold text-[#111] leading-[46px] tracking-[-0.03em] mb-4">
              Transforme seus processos hoje mesmo
            </h2>
            
            <p className="text-[#111] opacity-70 text-[18px] font-semibold leading-[150%] mb-8">
              Não perca mais tempo com processos manuais. Experimente grátis e veja a diferença já no primeiro envio.
            </p>

            <Link
              href="#contato"
              className="inline-flex items-center justify-center bg-[#004DFF] text-[#F8F8FE] h-[56px] px-[32px] rounded-[90px] font-medium text-[16px] gap-[10px] hover:opacity-90 transition-all shadow-xl shadow-blue-200"
            >
              Fale Conosco
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </Link>
          </div>
        </div>

        {/* Ajuste da Imagem Ativo:
            Usamos transform translate-y para garantir que a imagem 
            toque o fundo sem ultrapassar o contêiner da seção.
        */}
        <div className="relative w-full max-w-[590px] mt-auto">
          <img 
            src="/ativo-smartphones.png" 
            alt="Visualização do Holerite Digital" 
            className="w-full h-auto object-contain block translate-y-[20px]"
          />
        </div>
      </div>
    </section>
  );
}