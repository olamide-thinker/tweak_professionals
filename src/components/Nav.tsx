import Link from "next/link";

const Nav = () => {
    const navLinks = [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Industries", href: "/industries" },
        { label: "Case Studies", href: "/case-studies" },
        { label: "Contact Us", href: "/contact_us" },

    ];

    return (
        <nav className="flex justify-between items-center p-4">
            {/* Links */}
            <ul className="hidden space-x-6 md:flex gap-6 text-gray-700">
                {navLinks.map((link, index) => (
                    <li key={index}>
                        <Link href={link.href} className="font-bold hover:text-accent-foreground">
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Mobile Menu Icon */}
            <div className="md:hidden text-primary cursor-pointer">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
        </nav>
    );
};

export default Nav;
