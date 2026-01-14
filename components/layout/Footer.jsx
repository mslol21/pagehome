import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#050505] text-white overflow-hidden relative" style={{ height: '603px' }}>
      {/* Top transition mask */}
      <div className="absolute top-0 left-0 right-0 h-[150px] bg-gradient-to-b from-white to-transparent pointer-events-none z-0 opacity-20" />

      <div className="w-full h-full max-w-[1200px] mx-auto relative hidden md:block">
        
        {/* Logo - Top: 57px, Left: 48px */}
        <div className="absolute top-[57px] left-[48px] w-[234px] h-[42px] z-20">
            <Link href="/" className="flex items-center gap-[10.65px] h-full text-white no-underline">
              <div className="w-[42px] h-[42px] bg-[#0066FF] flex items-center justify-center rounded-lg flex-shrink-0">
                <div className="grid grid-cols-2 gap-[3px]">
                  <div className="w-2 h-2 bg-white rounded-[2px]" />
                  <div className="w-2 h-2 bg-white rounded-[2px]" />
                  <div className="w-2 h-2 bg-white rounded-[2px]" />
                  <div className="w-2 h-2 bg-white rounded-[2px]" />
                </div>
              </div>
              <span className="text-[24px] tracking-tight font-semibold whitespace-nowrap">
                <strong>Holerite</strong> digital
              </span>
            </Link>
        </div>

        {/* Columns 1, 2, 3 Group - Top: 157px, Left: 48px, Width: 466px, Height: 184px, Gap: 42px */}
        {/* Columns 1, 2, 3 Group - Top: 157px, Left: 48px, Width: 466px, Height: 184px, Gap: 42px */}
        <div className="absolute top-[157px] left-[48px] w-[466px] h-[184px] flex gap-[42px] z-20">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-4">
            {[
              { label: 'Home', href: '#home' },
              { label: 'Como Funciona', href: '#como-funciona' },
              { label: 'Benefícios', href: '#beneficios' },
              { label: 'Preços', href: '#precos' },
              { label: 'FAQ', href: '#faq' }
            ].map((item) => (
               <Link key={item.label} href={item.href} className="text-[#a0a0a0] hover:text-white transition-colors text-[15px] whitespace-nowrap">
                 {item.label}
               </Link>
            ))}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-white mb-2 whitespace-nowrap">Recursos</h4>
            <Link href="#comparativo" className="text-[#a0a0a0] hover:text-white transition-colors text-[15px] whitespace-nowrap">
              Comparação de custo
            </Link>
            <Link href="#como-funciona" className="text-[#a0a0a0] hover:text-white transition-colors text-[15px] whitespace-nowrap">
              Processo de envio
            </Link>
            <Link href="#beneficios" className="text-[#a0a0a0] hover:text-white transition-colors text-[15px] whitespace-nowrap">
              Vantagens
            </Link>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-white mb-2 whitespace-nowrap">Légal</h4>
             <Link href="#" className="text-[#a0a0a0] hover:text-white transition-colors text-[15px] whitespace-nowrap">
               Termos de Uso
             </Link>
             <Link href="#" className="text-[#a0a0a0] hover:text-white transition-colors text-[15px] whitespace-nowrap">
               Política de Privacidade
             </Link>
          </div>
        </div>

        {/* Column 4 - Top: 157px, Left: 968px, Width: 182px, Gap: 20px */}
        <div className="absolute top-[157px] left-[968px] w-[182px] flex flex-col gap-[20px] text-right items-end z-20">
            <div className="flex flex-col items-end">
              <p className="text-white mb-1 whitespace-nowrap font-medium">Nos mande uma mensagem:</p>
              <p className="text-[#a0a0a0] text-[15px] whitespace-nowrap">Whatsapp : (48) 3199-6818</p>
            </div>
            <div className="flex flex-col items-end">
               <p className="text-white mb-1 whitespace-nowrap font-medium">Visite nosso instagram:</p>
               <p className="text-[#a0a0a0] text-[15px] whitespace-nowrap">@holerite.digital</p>
            </div>
        </div>

        {/* Copyright - Top: 403px, Left: 819px, Width: 332px */}
        <div className="absolute top-[403px] left-[819px] w-[332px] text-right z-20">
           <p className="text-[#F8F8FE] text-[16px] font-semibold tracking-[-0.03em] leading-none">
             © 2025 Holerite Digital. Todos os direitos reservados.
           </p>
        </div>

        {/* Watermark - Top: 443px, Left: 16px, Width: 1168px */}
        <div className="absolute top-[443px] left-[16px] w-[1168px] h-[160px] pointer-events-none select-none z-10 flex items-center justify-center">
          <span className="text-[170px] font-bold text-[#1F1F1F] leading-none tracking-tighter">
            Holerite digital
          </span>
        </div>
      </div>

      {/* Mobile Fallback (Hidden on Desktop) */}
      <div className="md:hidden flex flex-col p-10 gap-10">
         {/* Simple stacked layout for mobile */}
         <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#0066FF] rounded-lg" />
            <span className="font-bold text-xl">Holerite digital</span>
         </div>
         <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
               <span className="font-bold">Menu</span>
               {['Home', 'Benefícios', 'Preços'].map(i => <span key={i} className="text-gray-400">{i}</span>)}
            </div>
            <div className="flex flex-col gap-2">
               <span className="font-bold">Legal</span>
               {['Termos', 'Privacidade'].map(i => <span key={i} className="text-gray-400">{i}</span>)}
            </div>
            <div className="flex flex-col gap-4 col-span-2">
               <div>
                  <p className="font-bold">Whatsapp</p>
                  <p className="text-gray-400">(48) 3199-6818</p>
               </div>
            </div>
         </div>
         <p className="text-sm text-gray-500 mt-10">© 2025 Holerite Digital.</p>
      </div>
    </footer>
  );
}
