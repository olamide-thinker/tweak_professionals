import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import teamImg from "../../../public/images/about/team.png"; // fallback/example image

// Define the team members
const teams = [
    {
        name: "Olamide Ogunbade",
        role: "Lead Role",
        image: teamImg,
    },
    {
        name: "Kolawole Oke",
        role: "Frontend Engineer",
        image: teamImg,
    },
    {
        name: "Jane Doe",
        role: "Product Designer",
        image: teamImg,
    },
    {
        name: "Jane Doe",
        role: "Product Designer",
        image: teamImg,
    },
];

const Team = () => {
    return (
        <div className={'mt-32'}>
            <section className="flex flex-col gap-4">
                <p className="text-primary text-6xl lg:text-8xl font-bold mb-4">
                    The Team
                </p>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {teams.map((member, index) => (
                        <Card key={index} className="flex flex-col gap-4 p-4 ">
                            <Image
                                src={member.image}

                                className="w-full object-cover"
                                alt={member.name}
                            />
                            <CardTitle className="text-2xl">{member.name}</CardTitle>
                            <CardDescription>{member.role}</CardDescription>
                        </Card>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Team;
