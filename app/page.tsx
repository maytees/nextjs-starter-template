import Image from "next/image";
import Hero from "~/components/Hero";
import Specifications from "@/components/Specs";

export default function Home() {
  return (
    <>
      <Hero />
      <Specifications />
    </>
  );
}
