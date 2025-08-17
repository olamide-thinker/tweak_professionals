import Image from "next/image";
import hero from "../../public/images/hero/heroBg.png";
import overLay from "../../public/images/hero/overLay.png";
import CallToAction from "@/components/CallToAction";
import NoAction from "@/components/NoAction";

const Hero = () => {
    return (
        <div className="relative  w-full h-[150vh]">
            {/* Background Image */}
            <Image
                src={hero}
                alt="Tweek Professionals"
                fill // makes image cover container
                priority
                className="object-cover object-center"
            />

            {/* Content on top */}
            <section>
            <div
                className="absolute z-10  top-[10rem]   text-primary"

            >
                <CallToAction
                    header="Ready to Optimize Your Business?"
                    content="Partner with Tweak Professional to unlock your organization's potential and achieve strategic objectives."
                    action="Request A Proposal"
                />
            </div>



            <div
                className="absolute z-10 -bottom-[90rem] text-primary"

            >
                <NoAction
                    content={[
                        "Your Partner in Human Capital, Recruitment, and Strategic Business Excellence.",
                        "Your Partner in Human Capital, Recruitment, and Strategic Business Excellence.",
                        "Your Partner in Human Capital, Recruitment, and Strategic Business Excellence.",
                        "Your Partner in Human Capital, Recruitment, and Strategic Business Excellence.",
                    ]}
                />
            </div>

            </section>




            {/* Optional dark overlay for readability */}
            <div className="absolute inset-0  z-0">
                <Image
                    src={overLay}
                    alt="Tweek Professionals"
                    fill // makes image cover container
                    priority
                    className="object-cover object-center"
                />
            </div>
        </div>
    );
};

export default Hero;
