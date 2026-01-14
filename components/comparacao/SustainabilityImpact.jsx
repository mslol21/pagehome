import Link from 'next/link';
import ScrollAnimation from '../ui/ScrollAnimation';

export default function SustainabilityImpact() {
  return (
    <section className="flex justify-center w-full bg-[#E0E9FE] py-[60px]" id="sustentabilidade">
      <div className="max-w-[1244px] w-full px-[48px] flex flex-col items-center">
        
        {/* Badge & Title (Frame) */}
        <ScrollAnimation className="text-center mb-[80px] w-full max-w-[620px] md:h-[158px] flex flex-col gap-[20px] items-center justify-center">
          <div className="inline-flex items-center gap-2 text-[#0066FF] font-semibold text-sm">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z" fill="currentColor"/>
            </svg>
            Sustentabilidade
          </div>
          <h2 className="text-[40px] md:text-[52px] font-bold text-[#1a1a1a] leading-tight tracking-tight">
            Impacto ambiental positivo
          </h2>
          <p className="text-[#4a5568] text-lg max-w-[600px] mx-auto leading-relaxed font-medium">
             Além de economizar tempo e dinheiro, o Holerite Digital contribui para a sustentabilidade do planeta.
          </p>
        </ScrollAnimation>

        {/* Content Box (Grupo) */}
        <div 
          className="w-full max-w-[1103px] min-h-[626px] rounded-[20px] border border-[#E0E9FE] p-10 md:p-16 shadow-sm grid lg:grid-cols-2 gap-16 mb-12"
          style={{ background: 'linear-gradient(180deg, #E1E9FE 0%, #F8F8FE 100%)' }}
        >
           
           {/* Left Column: Stats */}
           <ScrollAnimation delay={0.1} className="flex flex-col">
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-10 leading-snug">
                 Impacto Ambiental para uma<br/>Empresa com 250 Funcionários
              </h3>
              
              <div className="space-y-4">
                 {[
                    { label: 'Holerites por funcionário/ano', value: '15 folhas' },
                    { label: 'Total de folhas por ano', value: '3.750 folhas' },
                    { label: 'Árvores necessárias', value: '0,45 árvores' },
                    { label: 'Água utilizada', value: '16.875 litros' },
                    { label: 'Energia consumida', value: '1.125 kWh' },
                 ].map((stat, i) => (
                    <div key={i} className="flex items-center justify-between">
                       <div className="inline-flex items-center gap-3 bg-[#9DB9FF] px-4 py-2.5 rounded-full text-white text-sm font-semibold">
                          <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                             <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-white"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          </div>
                          {stat.label}
                       </div>
                       <span className="text-right font-bold text-[#1a1a1a] text-sm whitespace-nowrap">{stat.value}</span>
                    </div>
                 ))}
              </div>

              <p className="text-gray-400 text-sm font-bold mt-auto pt-16">
                 *Considerando holerites mensais, 13º salário,<br/>férias e eventuais complementares
              </p>
           </ScrollAnimation>

           {/* Right Column: Benefits */}
           <ScrollAnimation delay={0.3} className="flex flex-col">
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-10 leading-snug">
                 Benefícios Ambientais do Holerite Digital
              </h3>

              <div className="space-y-8">
                 {[
                    { title: 'Zero Papel', desc: 'Elimine completamente o uso de papel na distribuição de holerites.' },
                    { title: 'Redução da Pegada de Carbono', desc: 'Menos impressões significam menos energia consumida e menos emissões de CO2.' },
                    { title: 'Economia de Água', desc: 'A produção de papel consome grandes quantidades de água que podem ser economizadas.' },
                    { title: 'Conformidade com ISO 14001', desc: 'Contribua para as metas de sustentabilidade da sua empresa e para a conformidade com normas ambientais.' },
                 ].map((benefit, i) => (
                    <div key={i} className="flex flex-col gap-1">
                       <div className="flex items-center gap-2 text-[#0066FF] font-bold">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="currentColor"/>
                          </svg>
                          {benefit.title}
                       </div>
                       <p className="text-[#4a5568] text-sm leading-relaxed pl-7">
                          {benefit.desc}
                       </p>
                    </div>
                 ))}
              </div>

              {/* Box Green destaque */}
              <div className="mt-auto pt-10">
                 <div className="bg-[#E0E9FE] border border-green-500 rounded-[20px] p-6 lg:p-8">
                    <p className="text-[20px] lg:text-[24px] font-bold text-[#1a1a1a] leading-tight">
                       Em 5 anos, sua empresa pode salvar mais de <span className="text-green-500 font-black">2 árvores</span> e <span className="text-green-500 font-black">84.000 litros de água!</span>
                    </p>
                 </div>
              </div>
           </ScrollAnimation>

        </div>

        {/* CTA Button (Botão) */}
        <ScrollAnimation delay={0.5} className="mt-8">
           <Link
             href="#cta"
             className="bg-[#004DFF] text-white w-full max-w-[342px] h-[56px] flex items-center justify-center gap-[10px] px-[32px] py-[16px] rounded-[90px] font-bold text-lg hover:bg-[#0044CC] transition-all group shadow-xl shadow-blue-200"
           >
             Contribua para a sustentabilidade
             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"><path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
           </Link>
        </ScrollAnimation>

      </div>
    </section>
  );
}
