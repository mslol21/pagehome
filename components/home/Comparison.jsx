import Link from 'next/link';
import ScrollAnimation from '../ui/ScrollAnimation';

export default function Comparison() {
  return (
    <section className="flex justify-center w-full bg-[#F8F8FE] py-[60px]" id="comparativo">
      <div className="max-w-[1244px] w-full px-[48px] flex flex-col items-center min-h-[932px]">
        
        {/* Badge & Title */}
        <ScrollAnimation className="text-center mb-[60px]">
          <div className="inline-flex items-center gap-2 text-[#0066FF] mb-5 font-semibold text-sm">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z" fill="currentColor"/>
            </svg>
            O impacto do seu tempo
          </div>
          <h2 className="text-[40px] md:text-[52px] font-bold mb-[20px] text-[#1a1a1a] leading-tight tracking-tight">
            O verdadeiro valor do seu tempo
          </h2>
          <p className="text-[#4a5568] text-lg max-w-[650px] mx-auto leading-relaxed">
            Veja quanto tempo sua equipe de RH está desperdiçando com a distribuição manual de holerites.
          </p>
        </ScrollAnimation>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 w-full mb-12">
          
          {/* Left Side: Time Calculator Cards */}
          <ScrollAnimation delay={0.2} className="bg-[#FFE5E5] rounded-[32px] p-8 flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
               {/* 250 Funcionários */}
               <div className="bg-white rounded-[20px] p-6 border border-red-100 shadow-sm">
                  <div className="text-[11px] font-bold text-red-500 uppercase leading-tight mb-4">Total de<br/>colaboradores</div>
                  <div className="text-4xl font-extrabold text-[#1a1a1a]">250</div>
                  <div className="text-xs font-bold text-gray-400 mt-1 uppercase">Funcionários</div>
               </div>
               {/* 5 Minutos */}
               <div className="bg-white rounded-[20px] p-6 border border-red-100 shadow-sm">
                  <div className="text-[11px] font-bold text-red-500 uppercase leading-tight mb-4">Tempo médio por<br/>holerite</div>
                  <div className="text-4xl font-extrabold text-[#1a1a1a]">5</div>
                  <div className="text-xs font-bold text-gray-400 mt-1 uppercase">Minutos por<br/>funcionário</div>
               </div>
               {/* 1.250 Minutos */}
               <div className="bg-white rounded-[20px] p-6 border border-red-100 shadow-sm">
                  <div className="text-[11px] font-bold text-red-500 uppercase leading-tight mb-4">Equivalente a 3 dias<br/>de trabalho</div>
                  <div className="text-4xl font-extrabold text-[#1a1a1a]">1.250</div>
                  <div className="text-xs font-bold text-gray-400 mt-1 uppercase">Minutos totais</div>
               </div>
            </div>

            {/* Tempo Desperdiçado Card */}
            <div className="bg-white rounded-[20px] p-10 border border-red-100 shadow-sm flex flex-col justify-center">
               <div className="text-[12px] font-bold text-gray-500 uppercase mb-6 tracking-wider">Tempo desperdiçado</div>
               <div className="text-6xl font-black text-red-500 mb-2">+21</div>
               <div className="text-2xl font-bold text-[#1a1a1a]">Horas por mês</div>
            </div>

            <p className="text-gray-600 text-[15px] leading-relaxed mt-4 font-medium px-2">
              Para uma empresa com 250 funcionários, o processo manual de distribuição de holerites consome mais de 21 horas por mês da sua equipe de RH.
            </p>
          </ScrollAnimation>

          {/* Right Side: Pain Points List */}
          <ScrollAnimation delay={0.4} className="bg-[#FFE5E5] rounded-[32px] p-8 flex flex-col gap-4">
             {[
                { title: 'Deslocamento entre filiais', desc: 'Horas adicionais para entregar holerites em diferentes locais' },
                { title: 'Funcionários ausentes', desc: 'Tentativas repetidas de entrega para quem está de férias ou afastado' },
                { title: 'Reimpressões e correções', desc: 'Holerites perdidos, danificados ou com erros que precisam ser refeitos' },
                { title: 'Arquivamento e organização', desc: 'Tempo gasto para organizar, arquivar e recuperar documentos físicos' },
             ].map((item, i) => (
                <div key={i} className="bg-white rounded-[24px] p-6 border border-red-50 shadow-sm flex items-center gap-5 transition-all hover:translate-x-1">
                   <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-red-500"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                   </div>
                   <div>
                      <h4 className="font-bold text-[#1a1a1a] text-xl leading-tight mb-1">{item.title}</h4>
                      <p className="text-[13px] text-gray-500 font-medium leading-tight">{item.desc}</p>
                   </div>
                </div>
             ))}
             <div className="bg-white rounded-[24px] p-8 border border-red-50 shadow-sm mt-auto">
                <p className="text-[#1a1a1a] font-bold text-xl leading-snug">
                   Na prática, o processo pode facilmente se estender por dias ou até semanas.
                </p>
             </div>
          </ScrollAnimation>

        </div>

        {/* Bottom Button */}
        <ScrollAnimation delay={0.6} className="mt-8">
           <Link
             href="#cta"
             className="bg-[#0055FF] text-white px-10 py-5 rounded-full font-bold text-lg flex items-center gap-3 hover:bg-[#0044CC] transition-all group shadow-xl shadow-blue-200"
           >
             Como eliminar essa perda de tempo?
             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"><path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
           </Link>
        </ScrollAnimation>
        
      </div>
    </section>
  );
}
