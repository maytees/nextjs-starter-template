import Image from "next/image";
import Hero from "~/components/Hero";
import Specifications from "@/components/Specs";
import Features from "@/components/Features";

export default function Home() {
  return (
    <>
      <Hero />
      <Specifications />
      <Features />
    </>
  );
}
