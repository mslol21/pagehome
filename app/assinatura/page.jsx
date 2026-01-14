import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroAssinatura from "@/components/assinatura/HeroAssinatura";
import AssinaturaFold1 from "@/components/assinatura/AssinaturaFold1";
import AssinaturaFold2 from "@/components/assinatura/AssinaturaFold2";
import AssinaturaFold3 from "@/components/assinatura/AssinaturaFold3";
import AssinaturaFold4 from "@/components/assinatura/AssinaturaFold4";
import AssinaturaFold5 from "@/components/assinatura/AssinaturaFold5";
import AssinaturaFold6 from "@/components/assinatura/AssinaturaFold6";
import AssinaturaFold7 from "@/components/assinatura/AssinaturaFold7";

export const metadata = {
  title: "Assinatura Digital | Holerite Digital",
  description: "Assine seus holerites de forma rápida, segura e com validade jurídica.",
};

export default function AssinaturaPage() {
  return (
    <main className="flex flex-col w-full min-h-screen">
      <Header />
      <HeroAssinatura />
      <AssinaturaFold1 />
      <AssinaturaFold2 />
      <AssinaturaFold3 />
      <AssinaturaFold4 />
      <AssinaturaFold5 />
      <AssinaturaFold6 />
      <AssinaturaFold7 />
      <Footer />
    </main>
  );
}
