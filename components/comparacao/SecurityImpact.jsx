import Link from 'next/link';
import ScrollAnimation from '../ui/ScrollAnimation';

export default function SecurityImpact() {
  return (
    <section className="flex justify-center w-full bg-[#F8F8FE] py-[60px]" id="seguranca">
      <div className="max-w-[1200px] w-full px-[48px] flex flex-col items-center min-h-[928px]">
        
        {/* Badge & Title */}
        <ScrollAnimation className="text-center mb-[80px]">
          <div className="inline-flex items-center gap-2 text-[#0066FF] mb-5 font-semibold text-sm">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z" fill="currentColor"/>
            </svg>
            Sustentabilidade
          </div>
          <h2 className="text-[40px] md:text-[52px] font-bold mb-[20px] text-[#1a1a1a] leading-tight tracking-tight">
            Proteção de dados em conformidade com a LGPD
          </h2>
          <p className="text-[#4a5568] text-lg max-w-[700px] mx-auto leading-relaxed">
            O Holerite Digital garante a segurança das informações sensíveis dos seus colaboradores.
          </p>
        </ScrollAnimation>

        {/* 3 Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 w-full mb-12">
          {/* Card 1 */}
          <ScrollAnimation delay={0.1} className="bg-[#EBF2FF] rounded-[24px] p-8 border border-blue-50">
             <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-[#0066FF] shadow-sm mb-6">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
             </div>
             <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6 leading-tight">Criptografia de Ponta a Ponta</h3>
             <p className="text-[#4a5568] text-sm leading-relaxed">
                Todos os dados são criptografados durante a transmissão e armazenamento, garantindo que apenas pessoas autorizadas tenham acesso.
             </p>
          </ScrollAnimation>

          {/* Card 2 */}
          <ScrollAnimation delay={0.2} className="bg-[#EFF6FF] rounded-[24px] p-8 border border-blue-50">
             <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-[#0066FF] shadow-sm mb-6">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
             </div>
             <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6 leading-tight">Conformidade com LGPD</h3>
             <p className="text-[#4a5568] text-sm leading-relaxed">
                Nossa plataforma foi desenvolvida seguindo todos os princípios e requisitos da Lei Geral de Proteção de Dados, garantindo a privacidade dos colaboradores.
             </p>
          </ScrollAnimation>

          {/* Card 3 */}
          <ScrollAnimation delay={0.3} className="bg-[#EFF6FF] rounded-[24px] p-8 border border-blue-50">
             <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-[#0066FF] shadow-sm mb-6">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
             </div>
             <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6 leading-tight">Controle de Acesso</h3>
             <p className="text-[#4a5568] text-sm leading-relaxed">
                Links protegidos por senha que expiram automaticamente, garantindo que somente o funcionário correto consiga acessar seu holerite, mesmo se o link for compartilhado acidentalmente.
             </p>
          </ScrollAnimation>
        </div>

        {/* Priority Banner */}
        <ScrollAnimation delay={0.4} className="w-full mb-12">
           <div className="bg-[#0055FF] rounded-[24px] p-10 md:p-12 text-white relative overflow-hidden">
              <div className="relative z-10 flex flex-col gap-6">
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                       <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
                    </div>
                    <h4 className="text-[28px] md:text-[32px] font-bold">Segurança é nossa prioridade</h4>
                 </div>
                 <div className="space-y-4">
                    <p className="text-white/80 text-lg leading-relaxed max-w-[900px]">
                       O Holerite Digital utiliza as mais avançadas tecnologias de segurança para proteger os dados sensíveis dos seus colaboradores. Nossa plataforma é regularmente auditada e atualizada para garantir os mais altos padrões de segurança e conformidade com a legislação.
                    </p>
                    <p className="text-white/80 text-lg leading-relaxed max-w-[900px]">
                       Todos os detalhes sobre nossa infraestrutura de segurança podem ser discutidos em uma demonstração personalizada.
                    </p>
                 </div>
              </div>
           </div>
        </ScrollAnimation>

        {/* Action Button */}
        <ScrollAnimation delay={0.5}>
           <Link
             href="#cta"
             className="bg-[#0a0a0a] text-white px-10 py-5 rounded-full font-bold text-lg flex items-center gap-3 hover:bg-black transition-all group shadow-xl"
           >
             Saiba mais sobre nossa segurança
             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"><path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
           </Link>
        </ScrollAnimation>

      </div>
    </section>
  );
}
