"use client";
import Link from "next/link";
import { useState } from "react";
import {navLinks} from "@/lib/utils";

const Nav = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const handleLinkClick = () => {
        setMenuOpen(false); // close menu after click
    };

    return (
        <nav className="flex justify-between items-center p-4">
            {/* Desktop Nav */}
            <ul className="hidden md:flex gap-6 text-gray-700">
                {navLinks.map((link, index) => (
                    <li key={index}>
                        <Link
                            href={link.href}
                            className="font-bold text-3xl hover:text-accent"
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>

        </nav>
    );
};

export default Nav;
