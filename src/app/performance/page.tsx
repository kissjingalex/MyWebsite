import bgImg from '/public/performance.jpeg';
import Hero from "@/components/hero";

export default function Page() {
  return (
    <Hero imgUrl={bgImg} altTxt="performance" content="performance~~"/>
  );
}
