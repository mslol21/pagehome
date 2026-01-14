import Link from 'next/link';
import ScrollAnimation from '../ui/ScrollAnimation';

export default function AssinaturaFold3() {
  return (
    <section 
      className="flex justify-center w-full min-h-[697px] relative overflow-hidden py-[60px]"
      style={{
        background: 'radial-gradient(90.16% 76.4% at 50% 63.14%, #FFFFFF 0%, #B2C9FF 100%)'
      }}
    >
      <div className="max-w-[1244px] w-full px-[48px] md:px-[142px] flex flex-col items-center gap-[40px]">
        
        {/* Frame Superior (Text Container - 648x234px) */}
        <ScrollAnimation className="w-full max-w-[648px] flex flex-col items-center text-center gap-[20px] z-10">
          <div className="flex items-center gap-2 text-[#0066FF] font-bold text-sm">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            Chega de burocracia
          </div>
          <h2 className="text-[36px] md:text-[48px] font-black text-[#1a1a1a] leading-tight tracking-tight">
            Transforme seus processos hoje mesmo
          </h2>
          <p className="text-[#4a5568] text-[18px] md:text-[20px] leading-relaxed max-w-[600px]">
            Não perca mais tempo com processos manuais. Experimente grátis e veja a diferença já no primeiro envio.
          </p>
          
          <Link
            href="#contato"
            className="mt-4 bg-[#0055FF] text-white px-10 py-5 rounded-full font-bold text-lg flex items-center gap-3 hover:bg-[#0044CC] transition-all group shadow-xl shadow-blue-200"
          >
            Fale Conosco
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"><path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </ScrollAnimation>

        {/* Ativo (Smartphones Image - 590x521px) */}
        <div className="w-full max-w-[590px] h-auto aspect-[590/521] relative mt-10">
          <ScrollAnimation delay={0.2} className="w-full h-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/ativo-smartphones.png" 
              alt="Visualização do Holerite Digital em Smartphones" 
              className="w-full h-full object-contain"
            />
          </ScrollAnimation>
        </div>

      </div>
    </section>
  );
}
