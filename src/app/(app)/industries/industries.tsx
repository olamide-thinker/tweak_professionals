import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const industries = [
    {
        title: "Financial Services",
        description:
            "Specialized recruitment, regulatory training, and performance strategies designed to meet the complex demands of the financial sector. We support banks, investment firms, insurance companies, and fintech innovators in navigating compliance, attracting niche talent, and driving operational excellence.",
        content: [
            { name: "Compliance & Risk Management Training (incl. HR & Customer Service Excellence)"},
            { name: "Talent Acquisition for Specialized Roles (e.g., Compliance, Risk, Fintech)"},
            { name: "Branch Network Optimization & Performance Management in Regulated Environments"},

        ],
    },
    {
        title: "FMCG",
        description:
            "Driving agile talent solutions, sales force development, and operational efficiency in a fast-paced, consumer-driven market. We help FMCG companies build high-performing teams that adapt quickly.",
        content: [
            { name: "Sales Force Optimization & Training"},
            { name: "Supply Chain Talent Management"},
            { name: "Agile Workforce Planning"},
        ],
    },
    {
        title: "Multinational Corporations",
        description:
            "Providing integrated HR strategies, cross-cultural training, and global talent management solutions for complex international operations.",
        content: [
            { name: "Global Talent Mobility & Immigration Advisory"},
            { name: "Cross-Cultural Leadership Development"},
            { name: "Standardization of HR Policies Across Regions"},
            { name: "Oil and Gas Sector"},

        ],
    },
    {
        title: "Banking Institutions",
        description:
            "Specialized recruitment, regulatory training, and employee engagement strategies tailored for the unique demands of the banking sector.",
        content: [
            { name: "Compliance Training Programs"},
            { name: "Customer Service Excellence Training"},
            { name: "Branch Network Talent Optimization"},

        ],
    },
    {
        title: "Oil and Gas ",
        description:
            "Specialized recruitment, regulatory training, and employee engagement strategies tailored for the unique demands of the banking sector.",
        content: [
            { name: "Compliance Training Programs"},
            { name: "Customer Service Excellence Training"},
            { name: "Branch Network Talent Optimization"},
        ],
    },
    {
        title: "Conglomerates & Telecommunications ",
        description:
            "Comprehensive solutions for diverse business units, leadership development, and strategic operational support for large, complex organizations.",
        content: [
            { name: "Leadership Succession Planning"},
            { name: "Inter-departmental Collaboration & Efficiency"},
            { name: "Strategic Workforce Planning for Diversified Portfolios"},
        ],
    },
    {
        title: "Technology & IT",
        description:
            "Supporting rapid growth, talent acquisition for niche tech roles, and fostering innovation within dynamic tech companies.",
        content: [
            { name: "Tech Talent Sourcing & Retention"},
            { name: "Agile HR for Startups & Scale-ups"},
            { name: "Innovation Culture Development"},
        ],
    },
];

const IndustrySection = () => {
    return (
        <div className="container/mission" data-slot="mission">
            <section className="flex flex-col gap-8">
                <div className="grid gap-8 md:grid-cols-2">
                    {industries.map((item, index) => (
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

                                <div className="flex flex-col gap-4 text-3xl md:text-xl">
                                    {/* description */}
                                    <p className={'text-3xl'}>{item.description}</p>

                                    {/* bullet list */}
                                    <ul className="list-disc text-3xl  list-inside space-y-2">
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

export default IndustrySection;
