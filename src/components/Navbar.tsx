// Navbar.tsx - Navigation Bar Component
// 10/22/2024 - Joshua Lim

import React, { useState } from 'react';
import Logo from '../assets/logo.jpg';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Dropdown, DropdownMenu, DropdownItem, DropdownTrigger, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";

const SiteNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = {
        "Home": "/",
        "Roster": "/roster",
        "Our Story": "/our-story",
        "Contact": "/contact",
        // "Log In": "/login"
    };

    return (
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
    );
};

export default SiteNavbar;