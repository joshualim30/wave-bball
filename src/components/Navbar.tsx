// Navbar.tsx - Navigation Bar Component
// 10/22/2024 - Joshua Lim

import React from 'react';
import Logo from '../assets/logo.jpg';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import Countdown from 'react-countdown';

const SiteNavbar = () => {
    const renderer = ({ days, hours, minutes, seconds, completed }: { days: number, hours: number, minutes: number, seconds: number, completed: boolean }) => {
        if (completed) {
            // Render a completed state (Registation Closed)
            return <span>Registration Closed</span>;
        } else {
            // Render a countdown
            if (days > 0) return <span>{days}d, {hours}h, {minutes}m, and {seconds}s left to register!</span>;
            else if (hours > 0) return <span>{hours}h, {minutes}m, and {seconds}s left to register!</span>;
            else if (minutes > 0) return <span>{minutes}m and {seconds}s left to register!</span>;
            else if (seconds > 0) return <span>{seconds}s left to register!</span>;
            else return <span>Registration Closed!</span>;
        }
    };

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const menuItems = {
        "Home": "/",
        "Roster": "/roster",
        "Schedule": "/schedule",
        "Our Story": "/our-story",
        "Contact": "/contact",
        // "Log In": "/login"
    };

    return (
        <div>
            {/* Temporary Countdown Banner */}
            <div className="bg-primary text-white text-center p-2">
                <p className="font-bold text-sm"><Countdown date={new Date(2024, 10, 3)} renderer={renderer} /></p>
            </div>

            {/* NavBar */}
            <Navbar onMenuOpenChange={setIsMenuOpen} isBordered isBlurred>
                <NavbarContent>
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="sm:hidden"
                    />
                    <NavbarBrand>
                        <img src={Logo} alt="Team Wave Logo" className="h-10 w-10 rounded-full mr-4" />
                        <a href="/" className="font-bold text-inherit">Team Wave</a>
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent className="hidden sm:flex gap-10" justify="center">
                    <NavbarItem>
                        <Link href="/roster">Roster</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="/schedule">Schedule</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="/our-story">Our Story</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="/contact">Contact</Link>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify="end" className='hidden'> {/* md:flex'> */}
                    <NavbarItem>
                        <Button as={Link} color="primary" href="#" variant="flat">
                            Log In
                        </Button>
                    </NavbarItem>
                </NavbarContent>
                <NavbarMenu>
                    {
                        Object.entries(menuItems).map(([text, href], index) => (
                            <NavbarMenuItem key={index}>
                                <Link href={href}>{
                                    text
                                }</Link>
                            </NavbarMenuItem>
                        ))
                    }
                </NavbarMenu>
            </Navbar>
        </div>
    );
};

export default SiteNavbar;