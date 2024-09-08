import bgImg from '/public/scale.png';
import Hero from "@/components/hero";

import type {Metadata} from 'next';

export const metadata: Metadata = {
  title: "scale",
}

export default function Page() {
  return (
    <Hero imgUrl={bgImg} altTxt="scale" content="scale~~"/>
  );
}
