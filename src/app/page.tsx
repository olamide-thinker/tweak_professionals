import Image from "next/image";
import Hero from "@/components/Hero";
import SectionWrapper from "@/components/main/SectionWrapper";
import About from "@/components/main/About";
import Service   from "@/components/main/Service";
import Why from "@/components/main/Why";
import dot from "../../public/images/main/dot.png"
import CallToAction from "@/components/CallToAction";
import Quote from "@/components/main/Quote"
import sectionImage from '../../public/images/main/sectionImage.png'
// import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="">
      <main className="m-0 p-0">
          <Hero/>
          <SectionWrapper
              headingLines={["STRATEGIC", "SOLUTIONS", "FOR BUSINESS", "GROWTH"]}
              highlight="Tweak Professional:"
              description="Your Partner in Human Capital Development, Recruitment, and Strategic Business Excellence."
              buttonText="REQUEST A PROPOSAL"
              buttonHref="/contact"
              image={sectionImage}
              imageAlt="Business Growth"
              />
          <div className={" mt-52 relative "} data-slot="">

              <Image
                  src={dot}
                  alt="dot"
                  fill // makes image cover container
                  priority
                  className=" absolute  h-[100%] object-cover object-center"
              />
              <About/>
              <Service/>
              <Why/>
              <Quote/>

          </div>


          {/*<Footer/>*/}

      </main>

    </div>
  );
}
