import Image from "next/image";
import Hero from "~/components/Hero";
import Specifications from "@/components/Specs";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <Specifications />
      <Features />
      <FAQ />
    </>
  );
}
