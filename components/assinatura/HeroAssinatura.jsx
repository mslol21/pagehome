import Link from 'next/link';
import ScrollAnimation from '../ui/ScrollAnimation';

export default function HeroAssinatura() {
  return (
    <section className="bg-[#F8F8FE] pt-[120px] pb-[60px] flex justify-center w-full" id="hero-assinatura">
      <div className="max-w-[1244px] w-full px-[48px] h-[613px] flex items-center relative overflow-hidden">
        
        {/* Left Side: Text Content (frame3) */}
        <div className="w-full max-w-[584px] min-h-[298px] flex flex-col gap-[20px] z-10">
          <ScrollAnimation>
            <div className="inline-flex items-center gap-2 text-[#0066FF] mb-2 font-semibold text-sm">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z" fill="currentColor"/>
                </svg>
                Assinatura Eletrônica
            </div>
            <h1 className="text-[48px] md:text-[60px] font-black text-[#1a1a1a] leading-[1.05] tracking-tight mb-4">
              Assine eletronicamente seus documentos pelo Whatsapp
            </h1>
            <p className="text-[#4a5568] text-lg max-w-[480px] leading-relaxed mb-10">
              Elimine processos manuais do RH. Envie holerites diretamente para o WhatsApp dos colaboradores em minutos.
            </p>

            <div className="flex items-center gap-4">
               <Link
                 href="#contato"
                 className="bg-[#0055FF] text-white px-10 py-5 rounded-full font-bold text-lg flex items-center gap-3 hover:bg-[#0044CC] transition-all group shadow-xl shadow-blue-200"
               >
                 Fale Conosco
                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"><path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
               </Link>
               <Link
                 href="#demo"
                 className="bg-[#0a0a0a] text-white px-10 py-5 rounded-full font-bold text-lg flex items-center gap-3 hover:bg-black transition-all group"
               >
                 Agendar Demo
                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"><path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
               </Link>
            </div>
          </ScrollAnimation>
        </div>

        {/* Right Side: Visual Group (agrupar12) */}
        <div className="hidden lg:block absolute right-0 top-0 w-[580px] h-[613px] z-0">
           {/* Background Gradient Frame (frame6) */}
           <div 
             className="absolute inset-0" 
             style={{ 
               background: 'linear-gradient(178.2deg, #F4F4FD 1.53%, #E0E9FE 160%)',
               borderRadius: '0 0 0 100px'
             }} 
           />

           {/* Person & Integrated Shape Image */}
           <div className="absolute bottom-0 right-0 w-full h-[120%] flex items-end justify-end pointer-events-none">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/hero-assinatura.png" 
                alt="Colaborador e formas geométricas" 
                className="w-full h-full object-contain object-right-bottom z-10"
              />
           </div>

           {/* Notification Modal (group70) */}
           <ScrollAnimation delay={0.4} className="absolute top-[45%] left-0 z-20 w-[187px] h-[95px] bg-white rounded-2xl shadow-2xl p-4 flex flex-col justify-between border border-gray-50 scale-110">
              <div className="text-[10px] font-medium text-[#1a1a1a] leading-tight">
                Olá MATHEUS COSTA, você recebeu um documento...
              </div>
              <div className="h-[1px] bg-gray-100 my-1 w-full" />
              <div className="flex items-center gap-2 text-green-600 font-bold text-[10px]">
                 <div className="w-5 h-5 bg-green-50 rounded flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                 </div>
                 Acessar Documento
              </div>
           </ScrollAnimation>

           {/* Small logo/badge icon */}
           <div className="absolute bottom-[35%] left-[15%] w-10 h-10 bg-[#7EAAFF] rounded-full flex items-center justify-center shadow-lg transform -rotate-12 z-20">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><rect x="4" y="4" width="7" height="7" rx="1"/><rect x="13" y="4" width="7" height="7" rx="1"/><rect x="4" y="13" width="7" height="7" rx="1"/><rect x="13" y="13" width="7" height="7" rx="1"/></svg>
           </div>
        </div>

      </div>
    </section>
  );
}
