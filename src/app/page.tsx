import React from "react";
import Carrossel from "../components/Carrossel";
import Homx from "../components/Homx";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <section id="home"></section>

      <About />

      <section id="servicos" className="pt-[75px]">
        <Carrossel />
      </section>

      <Contact />
    </main>
  );
}
