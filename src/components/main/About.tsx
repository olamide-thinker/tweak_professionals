import Link from "next/link";
import Image from "next/image";
import about from "../../../public/images/main/about.png";

const About = () => {
    return (
        <section className="flex flex-col lg:flex-row items-center w-full justify-between gap-8">
            {/* Left Content */}
            <div className="flex-1 max-w-3xl">
                <h3 className="text-primary text-6xl lg:text-8xl font-bold mb-4">Who We Are</h3>

                <p className="mb-6 text-xl text-gray-700 leading-tight">
                    For over 5 years, Tweak Professional Consulting has been at the forefront of delivering bespoke human capital and business solutions. We partner with leading organizations to unlock their full potential, optimize performance, and drive sustainable growth. Our approach is rooted in deep industry insights, a commitment to excellence, and a client-centric philosophy that ensures every strategy is tailored to your unique challenges and objectives.
                </p>

                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                >
                    Discover our story
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                    </svg>
                </Link>
            </div>

            {/* Right Image */}
            <div className="flex-1 flex justify-end relative">
                {/* Layer 1 */}
                <div className="absolute w-[50%] sm:w-[65%] md:w-[50%] h-16 sm:h-20 md:h-24 -bottom-[8%] -sm:bottom-[8%] -md:bottom-[10%] -right-[5%] sm:right-[8%] md:right-[15%] bg-primary/50 rounded-md z-10"></div>

                {/* Layer 2 */}
                <div className="absolute w-[50%] sm:w-[65%] md:w-[50%] h-16 sm:h-20 md:h-24 -top-[8%] -sm:top-[8%] -md:top-[10%] left-[5%] -sm:left-[8%] -md:left-[10%] bg-accent-foreground/60 rounded-md z-20"></div>

                {/* Image */}
                <Image
                    src={about}
                    alt="Who we are"
                    className="relative w-full max-w-5xl h-auto object-cover rounded-md"
                />
            </div>
        </section>
    );
};

export default About;
