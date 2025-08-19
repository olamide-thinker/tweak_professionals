import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";

interface LinkItem {
    title: string;
    icon: string | StaticImport | React.ReactNode;
    link: string;
}
interface CardProps {
    header: string;
    content: string | LinkItem[];
    action?: string;
    className?: string;
    moreSocials?: LinkItem[];
    link:string
}

// const socials =
const CallToAction = ({ header, link, moreSocials, className, content, action }: CardProps) => {
    return (
        <div className={`bg-primary ${className} max-w-5xl text-accent-foreground  p-8 rounded-lg flex flex-col gap-6 `}>
            {/* Header */}
            <h1 className=" max-w-xl text-6xl font-bold leading-snug ">
                {header}
            </h1>

            {/* Content + Button */}
            {}
            <div className="flex relative flex-col lg:items-end   md:flex-row md:items-center md:justify-between gap-6">
                {typeof content === "string" && (
                <div className="flex gap-2 max-w-[28rem] ">
                    <div className="block w-1.5 self-stretch bg-accent-foreground"></div>
                    <p className="text-2xl font-light leading-relaxed">{content}</p>
                </div>
                )}
                <div className="absolute bg-primary/20 rounded-lg -top-5 right-0 w-fit p-4">
                    {Array.isArray(moreSocials) && (
                        <div className="grid bg-[#2B2B2B] p-4 rounded-lg grid-cols-2 gap-4">
                            {moreSocials.map((z, index) => (
                                <div
                                    key={index}
                                    className="flex  flex-col items-center justify-center gap-2"
                                >
                                    <Image
                                        src={z.icon as string | StaticImport}
                                        alt={z.title}
                                        width={64}
                                        height={64}
                                        className="w-16 h-16"
                                    />

                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {Array.isArray(content) && (
                    <div className={'flex w-full m-0  gap-4 flex-col'}>
                        {content.map((z, index) => (
                            <div key={index} className="flex items-center justify-baseline gap-4 max-w-[20rem]">
                                <Image
                                src={z.icon as string | StaticImport}
                                  alt={z.title} width={24} height={24} className="w-8 h-8 "/>
                                <p className="text-2xl font-light leading-relaxed">{z.link}</p>
                            </div>
                        ))}
                    </div>
                )}

                {action && (
                    <Link
                        href={`${link}`}
                        className="flex w-fit items-center gap-2 text-3xl
                  bg-transparent border border-accent-foreground
                  text-accent-foreground px-6 py-3 rounded-md
                  font-semibold hover:bg-accent-foreground hover:text-black transition-colors  "
                    >
                        {action}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default CallToAction;
