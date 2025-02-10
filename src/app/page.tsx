import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Hero from "@/components/Hero";

export default async function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="relative z-10">
        <Hero />
        <AboutUs />
        <Services />
        <Portfolio />
      </div>
    </main>
  );
}
