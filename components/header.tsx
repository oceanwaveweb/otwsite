"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useMobile } from "@/hooks/use-mobile";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navLinks = [
  { name: "home", href: "/" },
  { name: "services", href: "/services" },
  { name: "why choose us", href: "/whychooseus" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useMobile();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
          isScrolled ? "bg-white/20 backdrop-blur-xl py-2" : "py-4"
        }`}
      >
        <div className="container-custom z-50 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-xl font-bold">
              <Image
                src="/logo.avif"
                alt="Logo"
                width={40}
                height={40}
                className="h-20 w-20 object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="hidden bg-white z-50 rounded md:flex items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={
                    pathname === link.href ? "nav-link-active" : "nav-link"
                  }
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          )}

          <div className="flex items-center space-x-4">
            <Link
              href="/contactus"
              className="hidden md:inline-flex btn-primary rounded bg-transparent border-2 font-bold border-[#2BB32A] text-[#2BB32A]"
            >
              CONTACT
            </Link>

            {isMobile && (
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden z-[1000] p-2"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-background pt-20"
          >
            <nav className="container-custom z-50 flex flex-col space-y-6 py-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xl py-2 border-b border-gray-800 ${
                    pathname === link.href ? "text-white" : "text-gray-400"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contactus"
                className="btn-primary rounded self-start mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                CONTACT
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
