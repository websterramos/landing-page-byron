import React from "react";
import Carrossel from "../components/Carrossel";
import Homx from "../components/Homx";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";

export default function Home() {
  return (
    <main>
      <section id="home"></section>
      <Homx />

      <About />

      <section id="servicos" className="pt-[75px]">
        <Carrossel />
      </section>

      <Contact />

      <Faq />
    </main>
  );
}
