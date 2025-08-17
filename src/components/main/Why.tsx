import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card"
import Image from "next/image";
import whyImage from "../../../public/images/main/why.png";
import hero from "../../../public/images/hero/heroBg.png";

import Quote from "@/components/main/Quote";


const why = [
    {
        title: "Human Capital management",
        // description: "We build modern, responsive websites.",
        content: "Strategic HR policy development,\n" +
            "performance optimization, and\n" +
            " talent retention strategies."
    },
    {
        title: "Recruitment & Talent\n" +
            " Acquisition",
        // description: "Beautiful, user-focused design solutions.",
        content: "End-to-end recruitment solutions\n" +
            " to find and secure the best talent\n" +
            " for your organization."
    },
    {
        title: "Learning &\n" +
            "Development",
        // description: "Boost your visibility in search engines.",
        content: "Customized training programs and\n" +
            " workshops for skill enhancement\n" +
            " and leadership development."
    }
]

const Why = () => {
    return (
        <div className={"container/service mt-52 relative "} data-slot="service">

            <section className={"flex flex-col gap-4"}>
                <p className="text-primary text-6xl max-w-5xl  lg:text-8xl font-bold mb-4">
                    Why Choose<br/>
                    Tweak Professional?
                </p>

                <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
                    {why.map((service, index) => (
                        <Card
                            key={index}
                            className="hover:shadow-2xl items-center justify-center  p-4 rounded-none transition-shadow flex flex-row "
                        >
                            <div className="relative w-full h-[20rem]">
                                <Image
                                    src={whyImage}
                                    alt="why"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className={"flex justify-center gap-2 flex-col "} style={{ height: "100%"}}>
                                <CardHeader>
                                    <CardTitle className=" text-4xl lg:text-6xl">
                                        {service.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="flex gap-4">
                                    <div className="w-1 self-stretch bg-primary"></div>
                                    <p className="text-2xl lg:text-3xl">{service.content}</p>
                                </CardContent>
                            </div>
                        </Card>
                    ))}
                </div>


            </section>
        </div>
    )
}

export default Why