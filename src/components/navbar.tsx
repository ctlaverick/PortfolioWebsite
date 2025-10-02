"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./themeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
    { name: "Changelog", href: "/changelog" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-surface border-b border-border backdrop-blur-md shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <h1 className="text-lg sm:text-xl font-bold text-text">
            <Link href="/" className="hover:text-accent-hover transition-colors">
              Charles Laverick
              <span className="hidden sm:inline text-accent font-semibold">
                {" "}
                Portfolio
              </span>
            </Link>
          </h1>

          {/* Desktop links */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group relative px-2 py-1 text-sm font-medium transition-colors"
                >
                  <span
                    className={`transition-colors ${
                      isActive
                        ? "text-accent"
                        : "text-text-secondary group-hover:text-accent-hover"
                    }`}
                  >
                    {link.name}
                  </span>

                  {/* underline */}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-accent transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 ${
                      isActive ? "scale-x-100" : ""
                    }`}
                  />
                </Link>
              );
            })}
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="p-2 rounded-md text-text hover:bg-bg border border-border transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div id="mobile-menu" className="md:hidden border-t border-border bg-surface">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md transition-colors ${
                    isActive
                      ? "text-accent bg-bg/10 font-semibold"
                      : "text-text-secondary hover:text-accent-hover hover:bg-bg"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
