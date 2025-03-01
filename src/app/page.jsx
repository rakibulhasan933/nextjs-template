import Count from "@/components/Count";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Works from "@/components/Works";

export default function Home() {
  return (
    <section className=" mx-20 my-5">
      <Navbar></Navbar>
      <Hero></Hero>
      <Count></Count>
      <Services />
      <Works></Works>
    </section>
  );
}
