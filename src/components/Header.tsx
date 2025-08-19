"use client";
import Link from "next/link";
import Nav from "@/components/Nav";
import { useState } from "react";
import { navLinks } from "@/lib/utils";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLinkClick = () => {
        setMenuOpen(false); // close menu after click
    };

    return (
        <header className="fixed top-0 left-0 w-full bg-background shadow-md z-50">
            <section className="flex flex-row justify-between items-center px-4 py-3">
                {/* Logo / Brand */}
                <Link href="/" className="text-primary leading-tight">
                    <span className="block text-4xl lg:text-5xl font-bold">Tweak</span>
                    <span className="block text-4xl lg:text-5xl font-bold">Professionals
          </span>
                    <span className="block text-3xl md:text-3xl font-normal">Consult</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:block">
                    <Nav />
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-primary"
                    onClick={() => setMenuOpen((prev) => !prev)}
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                >
                    {menuOpen ? (
                        // Close Icon
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-10 h-10"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        // Hamburger Icon
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-10 h-10"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </button>
            </section>

            {/* Mobile Dropdown */}
            <div
                className={`md:hidden bg-white shadow-lg border-t border-gray-200 transition-all duration-300 ease-in-out overflow-hidden ${
                    menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <ul className="flex flex-col items-center gap-6 py-6">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link
                                href={link.href}
                                className="text-3xl font-medium text-primary hover:text-accent transition-colors"
                                onClick={handleLinkClick}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link
                            href="#visit"
                            className="bg-primary text-background text-3xl  py-2 px-6 rounded-md font-semibold hover:bg-primary/90 transition-colors"
                            onClick={handleLinkClick}
                        >
                            Tell a Friend
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
