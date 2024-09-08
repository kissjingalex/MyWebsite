import homeImg from '/public/home.jpeg';
import Hero from "@/components/hero";

export default function Home() {
  return (
    <Hero imgUrl={homeImg} altTxt="Home" content="Welcome to our website"/>
  );
}
