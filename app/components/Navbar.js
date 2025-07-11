"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';

export const FloatingNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Detect scroll to change background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSubMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: '/', name: 'Home' },
    { href: '/classes', name: 'Classes' },
    { 
      name: 'Pages',
      submenu: [
        { href: '/gallery', name: 'Gallery' },
        { href: '/performance', name: 'Our Performance' },
        { href: '/press-review', name: 'Press Review' }
      ]
    },
    { href: '/about', name: 'About' },
    { href: '/contact', name: 'Contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
          scrolled ? 'bg-white shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="block">
                <Image
                  src="/logobg.png"
                  alt="Krondoshi Logo"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div
                className="ml-10 flex items-center space-x-4"
                style={{ fontFamily: 'var(--font-quintessential)' }}
              >
                {navLinks.map((link) => (
                  <div key={link.name || link.href} className="relative">
                    {link.submenu ? (
                      <>
                        <button
                          onClick={() => setSubMenuOpen(!subMenuOpen)}
                          className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                            pathname === link.href
                              ? 'text-pink-600'
                              : 'text-gray-700 hover:text-pink-600 hover:bg-pink-50/50'
                          }`}
                        >
                          {link.name}
                          <svg
                            className={`w-4 h-4 inline ml-1 transition-transform ${
                              subMenuOpen ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                        {subMenuOpen && (
                          <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                            {link.submenu.map((subItem) => (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                className={`block px-4 py-2 text-sm ${
                                  pathname === subItem.href
                                    ? 'text-pink-600 bg-pink-50'
                                    : 'text-gray-700 hover:text-pink-600 hover:bg-pink-50'
                                }`}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                          pathname === link.href
                            ? 'text-pink-600'
                            : 'text-gray-700 hover:text-pink-600 hover:bg-pink-50/50'
                        }`}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-pink-600 focus:outline-none p-2"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <div key={link.name || link.href}>
                  {link.submenu ? (
                    <>
                      <button
                        onClick={() => setSubMenuOpen(!subMenuOpen)}
                        className="flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50"
                      >
                        {link.name}
                        <svg
                          className={`w-4 h-4 ml-1 transition-transform ${
                            subMenuOpen ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {subMenuOpen && (
                        <div className="pl-4">
                          {link.submenu.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className={`block px-3 py-2 rounded-md text-base font-medium ${
                                pathname === subItem.href
                                  ? 'text-pink-600'
                                  : 'text-gray-700 hover:text-pink-600 hover:bg-pink-50'
                              }`}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className={`block px-3 py-2 rounded-md text-base font-medium ${
                        pathname === link.href
                          ? 'text-pink-600'
                          : 'text-gray-700 hover:text-pink-600 hover:bg-pink-50'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Overlay for mobile menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-[999]"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
};