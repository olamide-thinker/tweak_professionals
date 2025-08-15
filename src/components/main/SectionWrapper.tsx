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
                        {["STRATEGIC", "SOLUTIONS", "FOR BUSINESS", "GROWTH"].map(
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
                        <p className="text-2xl lg:text-3xl font-bold">
                            <span className="text-accent-foreground font-semibold">
                                Tweak Professional:
                            </span>{" "}
                            Your Partner in Human Capital Development, Recruitment, and
                            Strategic Business Excellence.
                        </p>

                        {/* Layered Button */}
                        <div className="relative w-fit mt-8 group">
                            {/* Background blocks */}
                            <div className="absolute top-1 -left-2 w-full h-full bg-primary/50 rounded-md -z-10"></div>
                            <div className="absolute -top-2 left-2 w-full h-full bg-accent-foreground rounded-md -z-20"></div>

                            {/* Button */}
                            <button className="relative w-fit bg-black text-accent-foreground px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition flex items-center gap-2">
                                REQUEST A PROPOSAL <span className="inline-block">→</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Image */}
                <div className="relative self-start lg:self-start lg:ml-auto lg:mt-[2rem] lg:mr-[10rem]">
                    <Image
                        src={sectionImage}
                        alt="Business Growth"
                        className="max-w-xs lg:max-w-sm h-auto object-contain"
                    />
                </div>
            </div>
        </section>

    );
};

export default SectionWrapper;
