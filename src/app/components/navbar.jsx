"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';


const NavLinks = [
    { name: "الدعم", href: "/support" },
    { name: "اعمالي", href: "/myWork" },
    { name: "قائمتي", href: "/myPanel" },
    { name: "روايات", href: "/romans" },
    { name: "سوردات", href: "/sordas" }
];

export function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="bg-sorda-orange flex w-full fixed top-0 left-0 font-sorda z-50">
            <div className="flex-1 flex items-center">
                <Link href="/login" legacyBehavior>
                    <a className="mx-7 text-2xl text-sorda-white font-medium border-2 hidden border-sorda-white px-4 py-1 rounded-xl lg:block">
                        دخول
                    </a>
                </Link>
                <Link href="" legacyBehavior>
                    <a>
                        <Image 
                            src="/images/Menu.png" 
                            className="lg:hidden ml-5 mt-5 cursor-pointer" 
                            alt="Menu icon" 
                            width={70} 
                            height={70} 
                            onClick={toggleDropdown} // Toggle dropdown on click
                        />
                    </a>
                </Link>
                <Link href="/register" legacyBehavior>
                    <a className="text-2xl bg-sorda-white text-sorda-orange font-medium border-2 hidden border-sorda-white px-4 py-1 rounded-xl lg:block">
                        تسجيل
                    </a>
                </Link>
                <Link href="/profileIcon" legacyBehavior>
                    <a>
                        <Image 
                            src="/images/ProfileIcon.png" 
                            className="lg:hidden ml-5" 
                            alt="Profile icon" 
                            width={50} 
                            height={50} 
                        />
                    </a>
                </Link>
            </div>
            <div className="flex-1 flex items-center justify-end">
                <div className='hidden lg:flex mr-[60px] text-sorda-white text-2xl gap-x-10 font-medium'>
                    {NavLinks.map((item, index) => (
                        <Link key={index} href={item.href} aria-label={item.name} className="hover:text-blue-500">
                            {item.name}
                        </Link>
                    ))}
                </div>
                <Link href="/" legacyBehavior>
                    <a>
                        <Image 
                            src="/images/sorda.png" 
                            alt="Sorda logo" 
                            className="lg:w-[80px] lg:h-[80px] mr-10" 
                            width={70} 
                            height={70} 
                        />
                    </a>
                </Link>
            </div>
            {isDropdownOpen && (
                <div className='fixed top-16 left-0 w-full bg-sorda-orange lg:hidden z-50'>
                    <div className='flex flex-col items-center py-4'>
                        {NavLinks.map((item, index) => (
                            <Link key={index} href={item.href} aria-label={item.name} className='py-2 text-sorda-white text-2xl hover:text-blue-500'>
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
