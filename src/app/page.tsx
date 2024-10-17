import HeroCard from "@/components/card/herocard/HeroCard";
import ServiceCard from "@/components/card/servicecard/ServiceCard";
import Hero from "@/components/hero/Hero";
import About from "@/pages/home/About";
import Query from "@/pages/home/Query";
import TechStack from "@/pages/home/TechStack";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="pt-20">
        <HeroCard />
      </div>
      <div className="pt-20">
        <About />
      </div>
      <div className="pt-20">
        <ServiceCard />
      </div>
      <TechStack />
      <div className="py-20">
        <Query />
      </div>
    </>
  );
}
