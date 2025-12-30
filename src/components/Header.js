'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const links = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/services', label: 'Services' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <header className="z-50 bg-[#160640] text-white shadow-md sticky top-0">
            <div className="max-w-7xl mx-auto py-2 px-6 flex justify-between items-center">
                {/* Logo */}
                <Link href={"/"} className="flex items-center rounded-md">
                    <Image
                        src="/logo.jpeg"
                        alt="JP INFOTECH Logo"
                        width={250}
                        height={250}

                    />

                </Link>
                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-2">
                    {links.map((l) => {
                        const isActive = pathname === l.href || (l.href === '/' && pathname === '/');
                        return (
                            <Link
                                key={l.href}
                                href={l.href}
                                className={`px-4 py-2 shadow-xl transition-colors font-medium text-sm ${isActive ? 'bg-[#37119f] text-white  shadow' : 'text-blue-100 hover:text-white hover:bg-white/10'}`}
                            >
                                {l.label}
                            </Link>
                        );
                    })}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <nav className="md:hidden mt-2 pb-4 bg-[#160640]/95">
                    <div className="flex flex-col space-y-2 px-4">
                        {links.map((l) => (
                            <Link
                                key={l.href}
                                href={l.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={`block px-4 py-2 rounded-md ${pathname === l.href ? 'bg-[#160740] text-white' : 'text-blue-100 hover:bg-[#160740]/10'}`}
                            >
                                {l.label}
                            </Link>
                        ))}
                    </div>
                </nav>
            )}
        </header>
    );
};

export default Header;