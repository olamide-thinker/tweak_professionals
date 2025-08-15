import Link from "next/link";
import Nav from "@/components/Nav";

const Header = () => {
    return (
        <header className="w-full shadow-md">
            <section className="flex bf-red-500 flex-row justify-between  px-4 py-3">

                {/* Logo / Brand */}
                <Link href="/" className="text-primary leading-tight">
                    <span className="block text-4xl font-bold">Tweak</span>
                    <span className="block text-4xl font-bold">Professionals</span>
                    <span className="block text-3xl font-normal">Consult</span>
                </Link>

                {/* Navigation */}
                <Nav />
            </section>
        </header>
    );
};

export default Header;
