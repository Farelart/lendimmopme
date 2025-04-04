"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { UserButton } from "@clerk/nextjs";

// Custom NavLink component
const NavLink = ({
  href,
  children,
  isMobile = false,
}: {
  href: string;
  children: React.ReactNode;
  isMobile?: boolean;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  const baseClasses = isMobile
    ? "block text-white"
    : "text-sm lg:text-base whitespace-nowrap";

  const activeClasses = isActive
    ? "font-bold border-b-2 border-white text-white"
    : isMobile
      ? "hover:text-gray-200"
      : "text-white/90 hover:text-white";

  return (
    <Link href={href} className={`${baseClasses} ${activeClasses}`}>
      {children}
    </Link>
  );
};

export default function DashboardNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-pink-300">
      <div className="container mx-auto px-4 md:px-0">
        <nav className="flex justify-between items-center py-6">
          <Link href="/">
            <h1 className="text-white font-extrabold text-2xl">LendImmoPME</h1>
          </Link>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            <NavLink href="/levez-des-fonds">Levez des fonds</NavLink>
            <NavLink href="/investir">Investir</NavLink>
            <NavLink href="/blog/selection">Blog</NavLink>
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  userButtonPopoverCard: "!fixed",
                  userButtonPopoverActionButtonText: "!pointer-events-auto",
                  userButtonPopoverActionButtonIcon: "!pointer-events-auto",
                  userButtonPopoverActionButton: "!pointer-events-auto",
                },
              }}
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
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
                xmlns="http://www.w3.org/2000/svg"
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
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-purple-700 py-4 px-2 flex flex-col gap-4 items-center rounded">
            <NavLink href="/" isMobile={true}>
              Levez des fonds
            </NavLink>
            <NavLink href="/investir" isMobile={true}>
              Investir
            </NavLink>
            <NavLink href="/blog/selection" isMobile={true}>
              Blog
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
}
