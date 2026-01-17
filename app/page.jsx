import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import TransformFeatures from "@/components/home/TransformFeatures";
import Institutional from "@/components/home/Institutional";
import Services from "@/components/home/Services";
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
      <TransformFeatures />
      <Features />
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
