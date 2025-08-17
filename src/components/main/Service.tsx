import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card"
import CallToAction from "@/components/CallToAction";
import Link from "next/link";

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
        title: "Learning \n" +
            "& Development",
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
                            <CardTitle className={" text-4xl lg:text-6xl"}>{service.title}</CardTitle>
                            {/*<CardDescription>{service.description}</CardDescription>*/}
                        </CardHeader>
                        <CardContent  className={" flex gap-4 ml-8 max-w-md"}>
                            <div className="block w-1 self-stretch bg-primary"></div>
                            <p className={"text-2xl lg:text-3xl"}>{service.content}</p>
                        </CardContent>
                    </Card>
                ))}
                <Link
                    href="/"
                    className="inline-flex w-fit font-bold bg-accent-foreground p-2 items-center gap-2 text-primary  hover:underline"
                >
                    View All Services
                    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 6V8H12V10H14V8H16V6H14V4H12V6H0ZM10 2H12V4H10V2ZM10 2H8V0H10V2ZM10 12H12V10H10V12ZM10 12H8V14H10V12Z" fill="black"/>
                    </svg>
                </Link>
            </div>

              <div className={"flex flex-col lg:flex-row w-full mt-32 gap-4"}>
                  <CallToAction

                      className={"flex-1 justify-between w-[40rem]"}
                      header="Ready to Optimize Your Business?"
                      content="Partner with Tweak Professional to unlock your organization's potential and achieve strategic objectives."
                      action="Get A Free Consultation"
                  />
                  <CallToAction
                      className={"w-fit justify-around"}

                      header={`Have a \n question?`}
                      content="Partner with Tweak Professional to unlock your organization's potential and achieve strategic objectives."
                      action="Contact Us"
                  />
              </div>
            </section>
        </div>
    )
}

export default Service
