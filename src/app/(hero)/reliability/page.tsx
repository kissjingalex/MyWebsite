import bgImg from '/public/reliability.jpg';
import Hero from "@/components/hero";

import type {Metadata} from 'next';

export const metadata: Metadata = {
  title: "reliability",
}

export default function Page() {
  return (
    <Hero imgUrl={bgImg} altTxt="reliability" content="reliability~~"/>
  );
}
