import Link from 'next/link';
import ScrollAnimation from '../ui/ScrollAnimation';

const extraActivities = [
  {
    title: 'Recrutamento e Seleção',
    desc: 'Dedique mais tempo para encontrar os melhores talentos para sua empresa, melhorando o processo de entrevistas e avaliação de candidatos.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10 9 9 9 8 9"></polyline>
      </svg>
    )
  },
  {
    title: 'Desenvolvimento de Pessoas',
    desc: 'Invista tempo em programas de treinamento, mentoria e desenvolvimento de carreira para seus colaboradores.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 00-3-3.87"></path>
        <path d="M16 3.13a4 4 0 010 7.75"></path>
      </svg>
    )
  },
  {
    title: 'Clima Organizacional',
    desc: 'Crie e implemente pesquisas de clima, programas de bem-estar e ações para melhorar a satisfação dos funcionários.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
      </svg>
    )
  },
  {
    title: 'Análise de Dados',
    desc: 'Analise métricas de RH para tomar decisões estratégicas baseadas em dados sobre rotatividade, desempenho e engajamento.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18"></path>
        <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"></path>
      </svg>
    )
  },
  {
    title: 'Planejamento Estratégico',
    desc: 'Participe ativamente do planejamento estratégico da empresa, alinhando as iniciativas de RH aos objetivos do negócio.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
      </svg>
    )
  },
  {
    title: 'Inovação em RH',
    desc: 'Pesquise e implemente novas tecnologias e metodologias para modernizar outros processos do departamento de RH.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14H12V22L22 10H13V2Z"></path>
      </svg>
    )
  }
];

export default function ExtraTimeBenefits() {
  return (
    <section className="bg-[#F8F8FE] py-[60px] flex justify-center w-full" id="produtividade">
      <div className="max-w-[1200px] w-full px-[48px] flex flex-col items-center min-h-[1196px]">
        
        {/* Badge & Title */}
        <ScrollAnimation className="text-center mb-[60px]">
          <div className="inline-flex items-center gap-2 text-[#0066FF] mb-5 font-semibold text-sm">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z" fill="currentColor"/>
            </svg>
            Produtividade
          </div>
          <h2 className="text-[40px] md:text-[54px] font-bold mb-[24px] text-[#1a1a1a] leading-tight tracking-tight max-w-[800px]">
            O que você pode fazer com 20 horas extras por mês?
          </h2>
          <p className="text-[#4a5568] text-lg max-w-[700px] mx-auto leading-relaxed">
            Imagine o impacto na produtividade da sua equipe de RH ao liberar mais de 20 horas mensais.
          </p>
        </ScrollAnimation>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-6 w-full mb-12">
          {extraActivities.map((item, index) => (
            <ScrollAnimation key={index} delay={index * 0.1} className="bg-[#EBF2FF] rounded-[24px] p-8 hover:bg-white hover:shadow-xl hover:shadow-blue-50 transition-all duration-300 border border-transparent hover:border-blue-100 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-[#0066FF] shadow-sm group-hover:bg-[#0066FF] group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#1a1a1a] group-hover:text-[#0066FF] transition-colors">{item.title}</h3>
              </div>
              <p className="text-[#4a5568] text-base leading-relaxed">
                {item.desc}
              </p>
            </ScrollAnimation>
          ))}
        </div>

        {/* Impact Message Card */}
        <ScrollAnimation delay={0.6} className="w-full">
           <div className="bg-[#0055FF] rounded-[24px] p-10 md:p-12 text-white relative overflow-hidden">
              <div className="relative z-10">
                 <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                       <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14H12V22L22 10H13V2Z" fill="currentColor"/></svg>
                    </div>
                    <h4 className="text-[28px] md:text-[32px] font-bold">Em um ano, são mais de 240 horas economizadas</h4>
                 </div>
                 <p className="text-white/80 text-lg leading-relaxed max-w-[900px]">
                    Isso equivale a 30 dias úteis completos ou 6 semanas de trabalho que podem ser redirecionadas para atividades estratégicas que realmente agregam valor ao negócio e impulsionam o crescimento da empresa.
                 </p>
              </div>
              {/* Decorative circle */}
              <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
           </div>
        </ScrollAnimation>

        {/* Final CTA */}
        <ScrollAnimation delay={0.7} className="mt-12">
           <Link
             href="#cta"
             className="bg-[#0a0a0a] text-white px-10 py-5 rounded-full font-bold text-lg flex items-center gap-3 hover:bg-black transition-all group scale-100 hover:scale-105"
           >
             Aumente a produtividade do seu RH
             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"><path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
           </Link>
        </ScrollAnimation>
        
      </div>
    </section>
  );
}
