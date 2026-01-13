import ScrollAnimation from '../ui/ScrollAnimation';

export default function Services() {
  return (
    <section className="bg-gradient-to-b from-[#F0F4FF] to-[#F5F3FF] py-[100px] flex justify-center w-full" id="beneficios">
      <div className="max-w-[1200px] w-full px-[49px]">
        
        {/* Main Card Container */}
        <ScrollAnimation className="bg-[#E8F0FF] rounded-[40px] p-[60px] grid md:grid-cols-2 gap-[60px] items-center relative overflow-hidden shadow-sm transition-shadow hover:shadow-lg duration-500">
          
          {/* Left Content */}
          <div className="z-10">
            <div className="inline-flex items-center gap-2 text-[#0066FF] mb-5 font-semibold">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7.75 12L10.58 14.83L16.25 9.17004" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Benefícios</span>
            </div>
            
            <h2 className="text-[40px] md:text-[48px] font-bold mb-6 text-[#1a1a1a] leading-[1.1] tracking-tight">
              Elimine a burocracia do<br/>
              seu departamento de<br/>
              RH.
            </h2>
            
            <p className="text-[#4a5568] text-lg mb-[40px] leading-relaxed max-w-[400px]">
              Transforme processos manuais demorados em tarefas automatizadas que levam minutos.
            </p>
            
            <div className="flex flex-wrap gap-3 max-w-[500px]">
              {[
                'Economize tempo', 
                'Elimine os erros', 
                'Sem integrações complexas', 
                'Segurança avançada', 
                'Satisfação dos funcionários'
              ].map((item, index) => (
                <ScrollAnimation key={item} delay={0.1 * index} className="inline-block">
                  <div className="inline-flex items-center gap-2 bg-[#0055FF] px-5 py-3 rounded-full text-white font-medium text-sm transition-transform hover:scale-105 cursor-default">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" fill="white" fillOpacity="0.2" stroke="white" strokeWidth="1.5"/>
                      <path d="M7.75 12L10.58 14.83L16.25 9.17004" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {item}
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>

          {/* Right Image Content */}
          <div className="relative h-[500px] flex items-center justify-center">
             {/* Using SVG to mimic the Dashboard UI */}
             {/* The blue background box behind image is part of the SVG layout logic or CSS */}
             <div className="absolute right-[-60px] top-[-20px] bottom-[-60px] w-[130%] h-[120%] bg-[#7FAAFF] opacity-10 rounded-[30px] hidden" /> {/* Optional decorative bg */}
             
             <img 
               src="data:image/svg+xml,%3Csvg width='700' height='550' viewBox='0 0 700 550' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='50' y='50' width='600' height='450' rx='24' fill='%235E81FF'/%3E%3Crect x='70' y='70' width='560' height='410' rx='16' fill='%231a1a1a'/%3E%3C!-- Sidebar --%3E%3Crect x='70' y='70' width='140' height='410' rx='16' fill='%232551CC'/%3E%3Crect x='85' y='130' width='110' height='30' rx='6' fill='%234D82FF'/%3E%3Crect x='85' y='170' width='110' height='8' rx='4' fill='rgba(255,255,255,0.2)'/%3E%3Crect x='85' y='190' width='110' height='8' rx='4' fill='rgba(255,255,255,0.2)'/%3E%3C!-- Main Content --%3E%3Crect x='210' y='70' width='420' height='410' rx='0' fill='%23F8F9FC'/%3E%3C!-- Dashboard Header --%3E%3Ctext x='230' y='110' font-family='Arial' font-weight='bold' font-size='14' fill='%23333'%3EDashboard%3C/text%3E%3C!-- Stats Cards --%3E%3Crect x='230' y='130' width='180' height='80' rx='10' fill='white'/%3E%3Crect x='245' y='145' width='30' height='30' rx='8' fill='%23E8F0FF'/%3E%3Ctext x='290' y='155' font-family='Arial' font-size='10' fill='%23666'%3EEmpresa%3C/text%3E%3Ctext x='290' y='170' font-family='Arial' font-weight='bold' font-size='12' fill='%23333'%3EKraft Works%3C/text%3E%3Crect x='430' y='130' width='180' height='80' rx='10' fill='white'/%3E%3Crect x='445' y='145' width='30' height='30' rx='8' fill='%23E8F0FF'/%3E%3Ctext x='490' y='155' font-family='Arial' font-size='10' fill='%23666'%3EFuncionários%3C/text%3E%3Ctext x='490' y='180' font-family='Arial' font-weight='bold' font-size='24' fill='%23333'%3E76%3C/text%3E%3C!-- Chart Area --%3E%3Crect x='230' y='230' width='380' height='220' rx='10' fill='white'/%3E%3C!-- Floating Modal Stats --%3E%3Cg filter='url(%23shadow)'%3E%3Crect x='300' y='280' width='320' height='240' rx='16' fill='white'/%3E%3Ctext x='340' y='320' font-family='Arial' font-weight='bold' font-size='14' fill='%23333'%3EEngajamento com Documentos%3C/text%3E%3Ctext x='340' y='360' font-family='Arial' font-size='12' fill='%23333'%3ETaxa de visualização%3C/text%3E%3Ctext x='580' y='360' font-family='Arial' font-weight='bold' font-size='12' fill='%230066FF'%3E76%25%3C/text%3E%3Crect x='340' y='375' width='260' height='6' rx='3' fill='%23E8F0FF'/%3E%3Crect x='340' y='375' width='200' height='6' rx='3' fill='%230066FF'/%3E%3Ctext x='340' y='420' font-family='Arial' font-size='12' fill='%23333'%3ETaxa de assinatura%3C/text%3E%3Ctext x='580' y='420' font-family='Arial' font-weight='bold' font-size='12' fill='%2322C55E'%3E60%25%3C/text%3E%3Crect x='340' y='435' width='260' height='6' rx='3' fill='%23E8F0FF'/%3E%3Crect x='340' y='435' width='160' height='6' rx='3' fill='%2322C55E'/%3E%3C/g%3E%3Cdefs%3E%3Cfilter id='shadow' x='280' y='270' width='360' height='270' filterUnits='userSpaceOnUse'%3E%3CfeDropShadow dx='0' dy='10' stdDeviation='15' flood-opacity='0.1'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E" 
               alt="Dashboard Mockup" 
               className="w-full h-auto object-contain scale-[1.35] translate-x-[15%] translate-y-[5%] transition-transform hover:scale-[1.38] duration-700"
             />
          </div>
          
        </ScrollAnimation>
      </div>
    </section>
  );
}
