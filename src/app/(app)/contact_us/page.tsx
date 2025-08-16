import Image from "next/image";
import hero from "../../../../public/images/hero/heroBg.png";
import SectionWrapper from "@/components/main/SectionWrapper";
import Mission from "@/components/about/mission";
import Team from "@/components/about/team";
import CallToAction from "@/components/CallToAction";
import dot from "../../../../public/images/about/dot.png";
import ContactForm from "@/app/(app)/contact_us/contact_form";


const Page = () => {

    return (
        <div>
        <div className="relative  w-full h-[40rem]">
            {/* Background Image */}
            <Image
                src={hero}
                alt="Tweek Professionals"
                fill // makes image cover container
                priority
                className="object-cover object-center"
            />
        </div>


            <div className={" relative "} data-slot="">
                <SectionWrapper
                    headingLines={["Get in Touch with", "Tweak Professional"]}
                    description="Ready to discuss your business needs? Fill out the form below or contact us directly. We are eager to understand your challenges and propose strategic solutions tailored for your success."
                />
                <Image
                    src={dot}
                    alt="dot"
                    fill // makes image cover container
                    priority
                    className=" absolute  h-[100%] object-cover object-center"
                />
                <ContactForm/>

            <div className={"flex mx-auto mt-32 gap-4"}>
                <section>

                    <CallToAction
                        header="Ready to Optimize Your Business?"
                        content="Partner with Tweak Professional to unlock your organization's potential and achieve strategic objectives."
                        action="Request A Proposal"
                    />
                </section>
            </div>
        </div>


        </div>

    )
}

export default Page