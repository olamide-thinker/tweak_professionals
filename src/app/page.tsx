import Image from "next/image";
import Hero from "@/components/Hero";
import SectionWrapper from "@/components/main/SectionWrapper";
import About from "@/components/main/About";
import Service   from "@/components/main/Service";
import Why from "@/components/main/Why";

export default function Home() {
  return (
    <div className="">
      <main className="m-0 p-0">
        <Hero/>

          <SectionWrapper/>
          <About/>
          <Service/>
          <Why/>

      </main>

    </div>
  );
}
