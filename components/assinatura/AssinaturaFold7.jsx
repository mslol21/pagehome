import Link from 'next/link';
import ScrollAnimation from '../ui/ScrollAnimation';

export default function AssinaturaFold7() {
  return (
    <section className="bg-[#F8F8FE] py-[80px] pb-[60px] flex justify-center w-full min-h-[579px] overflow-hidden" id="cta-final">
      <div className="max-w-[1244px] w-full px-5 flex justify-center">
        
        {/* Frame Principal (1104x439px) */}
        <ScrollAnimation className="w-full max-w-[1104px] h-auto md:h-[439px] rounded-[20px] relative overflow-hidden flex items-center shadow-xl shadow-blue-100"
          style={{
            background: 'linear-gradient(180deg, #E1E9FE 0%, #F8F8FE 100%)'
          }}
        >
          
          <div className="flex flex-col md:flex-row items-center w-full h-full">
            
            {/* Text Content */}
            <div className="flex-1 p-8 md:p-16 z-10">
              <div className="flex items-center gap-2 text-[#0066FF] font-bold text-sm mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Recursos
              </div>
              
              <h2 className="text-[36px] md:text-[48px] font-black text-[#1a1a1a] leading-tight tracking-tight mb-6">
                Pronto para transformar o RH da sua empresa?
              </h2>
              
              <p className="text-[#4a5568] text-[18px] md:text-[20px] leading-relaxed max-w-[480px] mb-10">
                Agende uma demonstração gratuita e veja como o Holerite Digital pode revolucionar seus processos.
              </p>
              
              <Link
                href="#contato"
                className="inline-flex items-center gap-3 bg-[#0055FF] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-[#0044CC] transition-all group shadow-xl shadow-blue-200"
              >
                Agendar demonstração
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>

            {/* Visual Element (Camada - 1046x837px) */}
            <div className="relative w-full md:w-1/2 h-full min-h-[300px] flex items-end justify-center">
              <div className="absolute bottom-[-10%] right-[-10%] w-[120%] h-[120%] flex items-end justify-end pointer-events-none">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/mao-smartphone-assinatura.png" 
                  alt="Mão segurando smartphone" 
                  className="w-full h-full object-contain object-right-bottom z-0 drop-shadow-2xl"
                />
              </div>
            </div>

          </div>

        </ScrollAnimation>

      </div>
    </section>
  );
}
