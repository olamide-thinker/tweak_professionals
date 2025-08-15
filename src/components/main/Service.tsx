import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card"

const services = [
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
    },
    {
        title: "Background Check & Verification",
        // description: "Boost your visibility in search engines.",
        content: "Customized training programs and\n" +
            " workshops for skill enhancement\n" +
            " and leadership development."
    }
]

const Service = () => {
    return (
        <div className={"container/service mt-52"} data-slot="service">
            <section className={"flex flex-col gap-4"}>
                <p className="text-primary text-6xl lg:text-8xl font-bold mb-4">
                    Our Core Expertise
                </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {services.map((service, index) => (
                    <Card key={index} className="hover:shadow-2xl rounded-none transition-shadow">
                        <CardHeader>
                            <CardTitle className={" md:text-4xl text-5xl"}>{service.title}</CardTitle>
                            {/*<CardDescription>{service.description}</CardDescription>*/}
                        </CardHeader>
                        <CardContent  className={" flex gap-4 ml-8 max-w-md"}>
                            <div className="block w-1 self-stretch bg-accent-foreground"></div>
                            <p className={"md:text-2xl"}>{service.content}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
            </section>
        </div>
    )
}

export default Service
