import bgImg from '/public/performance.jpeg';
import Hero from "@/components/hero";

import type {Metadata} from 'next';

export const metadata: Metadata = {
  title: "performance",
}

export default function Page() {
  return (
    <Hero imgUrl={bgImg} altTxt="performance" content="performance~~ perfect!"/>
  );
}
