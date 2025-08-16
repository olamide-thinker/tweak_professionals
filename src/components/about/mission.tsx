import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card"
import CallToAction from "@/components/CallToAction";

const mission = [
    {
        title: "Our Values",
        // description: "We build modern, responsive websites.",
        content: "To be the foremost strategic partner for human capital and business solutions, consistently delivering transformative impact for our clients across Africa and beyond."
    },
    {
        title: "Our Mission\n",
        // description: "Beautiful, user-focused design solutions.",
        content: "To empower organizations with innovative, data-driven solutions in human capital, recruitment, learning & development, and general business, fostering growth and sustained competitive advantage."
    },
    {
        title: "Core Values",
        content: [
            {
                name: "Integrity",
                description:
                    "Upholding the highest ethical standards in all our interactions.",
            },
            {
                name: "Excellence",
                description:
                    "Committing to superior quality and continuous improvement in every service.",
            },
            {
                name: "Client-Centricity",
                description:
                    "Placing our clients' success at the heart of everything we do.",
            },
            {
                name: "Innovation",
                description:
                    "Embracing creative solutions and forward-thinking approaches.",
            },
            {
                name: "Collaboration",
                description:
                    "Fostering strong partnerships with clients and within our team.",
            },
        ],
    },
]

const Mission = () => {
    return (
        <div className={"container/mission"} data-slot="mission">
            <section className={"flex flex-col gap-4"}>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                    {mission.map((service, index) => (
                        <Card key={index} className="hover:shadow-2xl h-fit rounded-none transition-shadow">
                            <CardHeader>
                                <CardTitle className="md:text-4xl text-6xl">{service.title}</CardTitle>
                                {/* <CardDescription>{service.description}</CardDescription> */}
                            </CardHeader>

                            <CardContent className="flex gap-4 ml-8">
                                <div className="block w-1 self-stretch bg-accent-foreground"></div>

                                <div className="md:text-2xl">
                                    {/* If content is a string */}
                                    {typeof service.content === "string" && <p>{service.content}</p>}

                                    {/* If content is an array (Core Values) */}
                                    {Array.isArray(service.content) && (
                                        <ul className="pl-4 space-y-2">
                                            {service.content.map((val, i) => (
                                                <li key={i}>
                                                    <strong>{val.name}:</strong> {val.description}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </CardContent>
                        </Card>

                    ))}
                </div>


            </section>
        </div>
    )
}

export default Mission
