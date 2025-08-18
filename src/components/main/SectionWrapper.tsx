import Image, { StaticImageData } from "next/image";

type SectionWrapperProps = {
    headingLines: string[]; // ["STRATEGIC", "SOLUTIONS", ...]
    description?: string; // Paragraph text
    highlight?: string; // e.g., "Tweak Professional:"
    buttonText?: string; // e.g., "REQUEST A PROPOSAL"
    buttonHref?: string; // optional link
    image?: StaticImageData; // Next.js static image import
    imageAlt?: string; // accessibility alt
};

const SectionWrapper = ({
                            headingLines,
                            description,
                            highlight,
                            buttonText,
                            buttonHref = "#",
                            image,
                            imageAlt = "Section Image",
                        }: SectionWrapperProps) => {
    return (
        <section>
            <div className="flex flex-col lg:flex-row items-start justify-between">
                {/* Left Content */}
                <div className="relative flex -top-[55px] lg:-top-[70px] flex-col z-20">
                    {/* Heading */}
                    <div className="flex flex-col z-10">
                        {headingLines.map((line, index) => (
                            <span
                                key={index}
                                className="p-6 bg-background shadow-md text-7xl lg:text-8xl w-fit font-extrabold text-primary tracking-tight"
                            >
                {line}
              </span>
                        ))}
                    </div>

                    {/* Paragraph */}
                    <div className="text-primary mt-8 max-w-[60rem]">
                        <p className="text-2xl lg:text-3xl ">
                            {highlight && (
                                <span className="text-accent font-semibold">
                                    {highlight} {" "}
                                  </span>
                            )}
                            {description}
                        </p>
                        {/* Layered Button */}
                        {buttonText && (

                            <div className="relative w-fit mt-8 group">
                        {/* Background blocks */}
                        <div className="absolute top-1 -left-2 w-full h-full bg-primary/50 rounded-md -z-10"></div>
                        <div className="absolute -top-2 left-2 w-full h-full bg-accent rounded-md -z-20"></div>

                        {/* Button */}
                        <a
                            href={buttonHref}
                            className="relative w-fit text-3xl bg-primary text-accent-foreground px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition flex items-center gap-2"
                        >
                            {buttonText} <span className="inline-block">→</span>
                        </a>
                    </div>
                        )}
                    </div>
                </div>

                {/* Right Image */}
                {image && (
                    <div className="relative justify-center  mx-auto self-start lg:self-start lg:ml-auto lg:mt-[2rem] lg:mr-[10rem]">
                        <Image
                            src={image}
                            alt={imageAlt}
                            className="max-w-xs lg:max-w-sm h-auto object-contain"
                        />
                    </div>
                )}
            </div>
        </section>
    );
};

export default SectionWrapper;
