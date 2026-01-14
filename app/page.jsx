import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import Institutional from "@/components/home/Institutional";
import Services from "@/components/home/Services";
import Differentials from "@/components/home/Differentials";
import Features from "@/components/home/Features";
import Comparison from "@/components/home/Comparison";
import Pricing from "@/components/home/Pricing";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Differentials />
      <Services />
      <Institutional />
      <Comparison />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
