import Link from 'next/link';
import ScrollAnimation from '../ui/ScrollAnimation';

export default function HeroComparison() {
  return (
    <section className="flex justify-center px-5 py-[40px] bg-[#F8F8FE]" id="hero-comparacao">
      <ScrollAnimation className="max-w-[1244px] w-full bg-[#0055FF] rounded-[40px] px-[24px] md:px-[48px] pt-[60px] pb-0 flex flex-col items-center text-center relative overflow-hidden h-[672px]">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 text-white/90 font-medium mb-8 text-sm md:text-base">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="white"/>
          </svg>
          Sem integrações - Pronto para uso - Seguro
        </div>

        {/* Hero Text */}
        <h1 className="text-[36px] md:text-[64px] font-bold leading-[1.1] text-white mb-6 tracking-tight max-w-[900px]">
          Recupere 20 horas de produtividade por mês
        </h1>
        
        <p className="text-white/80 text-lg md:text-xl mb-10 max-w-[800px] leading-relaxed">
          O tempo que sua equipe de RH perde com a entrega manual de holerites pode (e deve!) ser investido em atividades estratégicas. Descubra como automatizar esse processo.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 z-10">
          <Link
            href="#contato"
            className="h-[56px] px-8 rounded-full bg-[#1a1a1a] text-white font-bold flex items-center gap-2 hover:bg-black transition-all group"
          >
            Falar com Especialista
            <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"><path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
          <Link
            href="#como-funciona"
            className="h-[56px] px-8 rounded-full bg-transparent border-2 border-white text-white font-bold flex items-center gap-2 hover:bg-white/10 transition-all group"
          >
            Como Funciona
            <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"><path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>

        {/* Platform Mockup */}
        <div className="w-full max-w-[1000px] mt-auto relative">
          {/* Main Dashboard Window */}
          <div className="bg-white rounded-t-3xl shadow-2xl border-x border-t border-gray-200 overflow-hidden mx-4 md:mx-auto">
             {/* Brower/Platform Header */}
             <div className="bg-gray-50 border-b border-gray-200 p-4 flex items-center justify-between">
                <div className="flex items-center gap-6">
                   <div className="text-[10px] font-bold text-gray-400">Detalhes da competência</div>
                </div>
                <div className="flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-gray-300" />
                   <div className="w-2 h-2 rounded-full bg-gray-300" />
                   <div className="w-8 h-2 rounded-full bg-gray-300" />
                </div>
             </div>
             
             {/* Platform Content */}
             <div className="p-6 md:p-10 text-left">
                <div className="flex justify-between items-start mb-8">
                   <div>
                      <h4 className="text-xl font-bold text-[#1a1a1a] mb-2">Detalhes da competência</h4>
                      <div className="flex gap-8 text-[11px] text-gray-500 uppercase font-bold">
                         <div>Competência: <span className="text-gray-900">2025-11</span></div>
                         <div>Data de Importação: <span className="text-gray-900">16/08/2025</span></div>
                      </div>
                   </div>
                   <div className="flex gap-8 text-[11px] text-gray-500 uppercase font-bold text-right">
                      <div>Tipo de Documento: <span className="text-gray-900">Folha Mensal</span></div>
                      <div className="flex items-center gap-2">Status: <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded-full text-[9px]">ENVIADO</span></div>
                   </div>
                </div>

                {/* Table Mockup */}
                <div className="border-t border-gray-100 pt-6">
                   <div className="flex items-center justify-between mb-4">
                      <h5 className="font-bold text-gray-900 text-sm">Holerites</h5>
                   </div>
                   <div className="space-y-4">
                      {/* Table Header */}
                      <div className="grid grid-cols-5 text-[10px] font-bold text-gray-400 uppercase pb-2 border-b border-gray-50">
                         <span>Código</span>
                         <span>Colaborador</span>
                         <span>Status</span>
                         <span>Visualizado em</span>
                         <span>Assinado</span>
                      </div>
                      {/* Table Rows */}
                      {[
                        { id: '13', name: 'RITA FELISBINA', status: 'Enviado', date: '-', sign: true },
                        { id: '21', name: 'ROGERIA DA SILVA', status: 'Enviado', date: '13/08/2025 às 09:52', sign: true },
                        { id: '22', name: 'MATHEUS DA COSTA', status: 'Enviado', date: '13/08/2025 às 09:46', sign: true },
                      ].map((row, i) => (
                        <div key={i} className="grid grid-cols-5 text-[11px] py-1 items-center border-b border-gray-50 last:border-0">
                           <span className="text-gray-500 font-medium">0{row.id}</span>
                           <span className="text-gray-900 font-bold">{row.name}</span>
                           <span><span className="bg-green-100 text-green-600 px-2 py-0.5 rounded-full text-[9px]">Enviado</span></span>
                           <span className="text-gray-500">{row.date}</span>
                           <span className="text-green-500 font-bold">✓</span>
                        </div>
                      ))}
                   </div>
                </div>
             </div>
          </div>

          {/* Left Floating Modal - Signature */}
          <div className="absolute top-[10%] -left-4 md:-left-12 w-[180px] md:w-[260px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 z-20 hidden sm:block transform -rotate-1">
             <div className="flex items-center gap-2 mb-4">
                <div className="w-5 h-5 bg-blue-100 rounded flex items-center justify-center">
                   <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-blue-600"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <span className="text-[10px] font-bold text-gray-900">Assinar Documento</span>
             </div>
             <div className="h-24 bg-gray-50 rounded-xl border border-dashed border-gray-200 flex items-center justify-center mb-4 relative">
                <svg width="100" height="40" viewBox="0 0 100 40" className="text-gray-900 opacity-80">
                   <path d="M10 25 C 20 15, 30 35, 45 20 S 70 15, 85 25" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
             </div>
             <div className="grid grid-cols-2 gap-2">
                <div className="bg-blue-50 text-blue-600 text-[10px] font-bold py-2 rounded-lg text-center cursor-pointer">Limpar</div>
                <div className="bg-blue-600 text-white text-[10px] font-bold py-2 rounded-lg text-center cursor-pointer">Assinar</div>
             </div>
          </div>

          {/* Right Floating Card - Engagement */}
          <div className="absolute top-[40%] -right-4 md:-right-12 w-[220px] md:w-[300px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 z-20 hidden sm:block transform rotate-1">
             <div className="text-[11px] font-bold text-gray-900 mb-6 flex items-center gap-2">
                <div className="w-5 h-5 bg-blue-50 rounded-full flex items-center justify-center">
                   <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-[#0055FF]"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                Engajamento com Documentos
             </div>
             <div className="space-y-6">
                <div>
                   <div className="flex justify-between text-[10px] font-bold mb-2">
                      <span className="text-gray-500 uppercase">Taxa de visualização</span>
                      <span className="text-[#0055FF]">76%</span>
                   </div>
                   <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#0055FF] w-[76%]" />
                   </div>
                   <div className="text-[9px] text-gray-400 mt-1">60 de 78 funcionários visualizaram</div>
                </div>
                <div>
                   <div className="flex justify-between text-[10px] font-bold mb-2">
                      <span className="text-gray-500 uppercase">Taxa de assinatura</span>
                      <span className="text-green-500">60%</span>
                   </div>
                   <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 w-[60%]" />
                   </div>
                   <div className="text-[9px] text-gray-400 mt-1">48 de 78 funcionários assinaram</div>
                </div>
             </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-black/10 rounded-full blur-3xl pointer-events-none" />
      </ScrollAnimation>
    </section>
  );
}
