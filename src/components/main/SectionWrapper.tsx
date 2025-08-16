import Image from "next/image";
import sectionImage from "../../../public/images/main/sectionImage.png";

const SectionWrapper = () => {
    return (

        <section className="">
            <div className="flex flex-col   lg:flex-row items-start justify-between ">

                {/* Left Content */}
                <div className="relative flex -top-[70px]  flex-col z-20">
                    {/* Heading */}
                    <div className="flex flex-col z-10">
                        {["Get In Touch With", "Tweak Professionals"].map(
                            (line, index) => (
                                <span
                                    key={index}
                                    className="p-6 bg-background shadow-md text-6xl lg:text-8xl w-fit font-extrabold text-primary tracking-widest"
                                >
                                    {line}
                                </span>
                            )
                        )}
                    </div>

                    {/* Paragraph */}
                    <div className="text-primary mt-8 max-w-[60rem]">
                        <p className="text-2xl lg:text-3xl ">
                            {/*<span className="text-accent-foreground font-semibold">*/}
                            {/*    Tweak Professional:*/}
                            {/*</span>{" "}*/}
                            With over 5 years of excellence, Tweak Professional is dedicated to empowering businesses through strategic Human Capital Management, Recruitment, Learning & Development, and General Business Solutions. Our mission is to deliver tailored, impactful solutions that drive sustainable growth and foster organizational success. We pride ourselves on integrity, client-centricity, and a passion for excellence.
                            Our team brings together diverse expertise to provide a holistic approach to your business challenges, ensuring you achieve your strategic objectives. We believe in building long-term partnerships based on trust, transparency, and a shared commitment to achieving your business goals.
                        </p>


                    </div>
                </div>

            </div>
        </section>

    );
};

export default SectionWrapper;
