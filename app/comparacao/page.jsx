import Header from "@/components/layout/Header";
import HeroComparison from "@/components/comparacao/HeroComparison";
import TimeImpact from "@/components/comparacao/TimeImpact";
import DetailedComparison from "@/components/comparacao/DetailedComparison";
import TimeBarComparison from "@/components/comparacao/TimeBarComparison";
import ExtraTimeBenefits from "@/components/comparacao/ExtraTimeBenefits";
import SustainabilityImpact from "@/components/comparacao/SustainabilityImpact";
import SecurityImpact from "@/components/comparacao/SecurityImpact";
import PricingComparison from "@/components/comparacao/PricingComparison";
import FAQComparison from "@/components/comparacao/FAQComparison";
import CTAComparison from "@/components/comparacao/CTAComparison";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Comparação | Holerite Digital",
  description: "Compare nossa solução com os métodos tradicionais e veja a diferença.",
};

export default function ComparacaoPage() {
  return (
    <main className="flex flex-col w-full min-h-screen">
      <Header />
      <HeroComparison />
      <TimeImpact />
      <DetailedComparison />
      <TimeBarComparison />
      <ExtraTimeBenefits />
      <SustainabilityImpact />
      <SecurityImpact />
      <PricingComparison />
      <FAQComparison />
      <CTAComparison />
      <Footer />
    </main>
  );
}
