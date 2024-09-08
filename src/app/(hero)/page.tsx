import homeImg from '/public/home.jpeg';
import Hero from "@/components/hero";

import type {Metadata} from 'next';

export const metadata: Metadata = {
  title: "Home",
}

export default function Home() {
  return (
    <Hero imgUrl={homeImg} altTxt="Home" content="Welcome to our website"/>
  );
}
