import Image from "next/image";
import hero from "../../public/images/hero/heroBg.png";
import overLay from "../../public/images/hero/overLay.png";
import CallToAction from "@/components/CallToAction";
import NoAction from "@/components/NoAction";

const Hero = () => {
    return (
        <div className="relative w-full h-[clamp(120vh,0vh+10vw,150vh)] transition duration-500 ease-in-out">
            {/* Background Image */}
            <Image
                src={hero}
                alt="Tweek Professionals"
                fill
                priority
                className="object-cover object-center"
            />

            {/* Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={overLay}
                    alt="Overlay"
                    fill
                    priority
                    className="object-cover object-center"
                />
            </div>

            {/* Foreground content */}
            <section className="absolute inset-0 flex flex-col justify-around  z-10 px-4 sm:px-6 lg:px-12">
                {/* Call to Action */}
                <div className={'mt-[10rem]'}>
                <CallToAction
                    className="w-full  "
                    header="Ready to Optimize Your Business?"
                    content="Partner with Tweak Professional to unlock your organization's potential and achieve strategic objectives."
                    action="Request A Proposal"
                    link={'/contact_us'}
                />
                </div>

                {/* NoAction under CallToAction */}
                <div className="mt-8 w-full max-w-5xl">
                    <NoAction
                        content={[
                            "Connecting top talent with forward-thinking organizations.",
                            "Transforming human capital into a driver of business growth.",
                            "Recruitment solutions tailored for your industry and culture.",
                            "Empowering businesses with strategic workforce excellence.",
                        ]}
                    />

                </div>
            </section>
        </div>
    );
};

export default Hero;
