import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const services = [
    {
        title: "Human Capital Management",
        description:
            "We help organizations optimize their most valuable asset – their people. Our HCM services cover the entire employee lifecycle, ensuring compliance, efficiency, and peak performance.",
        content: [
            { name: "Personnel Outsourcing "},
            { name: "HR Policy Development & Implementation"},
            { name: "Performance Management Systems"},
            { name: "Compensation & Benefits Structuring"},
            { name: "Employee Relations & Engagement"},
            { name: "HR Audits & Compliance"}
        ],
    },
    {
        title: "Recruitment & Talent Acquisition",
        description:
            "Finding the right talent is crucial for success. We provide comprehensive recruitment solutions, from executive search to mass hiring, ensuring you attract and retain top-tier professionals.",
        content: [
            { name: "Executive Search & Headhunting"},
            { name: "Volume Recruitment Solutions"},
            { name: "Talent Mapping & Pipeline Development"},
            { name: "Candidate Assessment & Vetting"},
            { name: "Onboarding Support"},
            { name: "Specialized Industry Placements"},
        ],
    },
    {
        title: "Learning & Development",
        description:
            "Invest in your people's growth to secure your organization's future. Our L&D programs are customized to build essential skills, foster leadership, and drive innovation.",
        content: [
            { name: "Customized Training Programs"},
            { name: "Leadership Development Workshops"},
            { name: "Soft Skills & Technical Skills Training"},
            { name: "Performance Coaching & Mentoring"},
            { name: "Organizational Development Intervention"},

        ],
    },
    {
        title: "General Contracting",
        description:
            "Beyond human capital, we offer general contracting services to support your operational and strategic projects, ensuring seamless execution and timely delivery.",
        content: [
            { name: "Project Management Support"},
            { name: "Vendor Sourcing & Management"},
            { name: "Logistics & Operational Coordination"},
            { name: "Facility Management Consulting"},
        ],
    },
    {
        title: "Media Consultancy",
        description:
            "Navigate the complex media landscape with confidence. Our media consultancy services help you craft compelling narratives, manage your public image, and maximize your outreach",
        content: [
            { name: "Brand Positioning & Messaging"},
            { name: "Public Relations Strategy"},
            { name: "Crisis Communication Management"},
            { name: "Media Training & Spokesperson Coaching"},
            { name: "Digital Content Strategy"},
        ],
    },
];

const ServiceSection = () => {
    return (
        <div className="container/mission" data-slot="mission">
            <section className="flex flex-col gap-8">
                <div className="grid gap-8 md:grid-cols-2">
                    {services.map((item, index) => (
                        <Card
                            key={index}
                            className="hover:shadow-2xl h-fit rounded-none transition-shadow"
                        >
                            <CardHeader className="flex flex-col gap-4">
                                <CardTitle className="text-4xl lg:text-6xl">
                                    {item.title}
                                </CardTitle>
                                {/*<CardDescription className="text-lg md:text-xl">*/}
                                {/*    {item.description}*/}
                                {/*</CardDescription>*/}
                            </CardHeader>

                            {/* Line + Content wrapper */}
                            <CardContent className="flex gap-4 ml-6">
                                {/* vertical line that stretches full height */}
                                <div className="w-1 bg-primary"></div>

                                <div className="flex flex-col gap-4 md:text-3xl">
                                    {/* description */}
                                    <p>{item.description}</p>

                                    {/* bullet list */}
                                    <ul className="list-disc list-inside space-y-2">
                                        {item.content.map((val, i) => (
                                            <li key={i}>{val.name}</li>
                                        ))}
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ServiceSection;
