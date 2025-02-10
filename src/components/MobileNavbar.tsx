"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Fade as Hamburger } from "hamburger-react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { menuItems } from "@/data/nav";

export default function MobileNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const socialLinks = [
    {
      label: "Instagram",
      href: "https://www.instagram.com/",
      icon: <FaInstagram className="w-5 h-5" />,
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/",
      icon: <FaFacebook className="w-5 h-5" />,
    },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isMenuOpen ? "bg-transparent" : "bg-transparent"
      }`}
    >
      {/* Navigation Header */}
      <div
        className={`flex justify-between items-center p-4 ${
          isMenuOpen ? "bg-white/80 backdrop-blur-[20px]" : "bg-transparent"
        }`}
      >
        <Link href="/">
          <Image
            src="/logo.png"
            alt="AAB Logo"
            width={100}
            height={100}
            className="w-auto h-[60px]"
            priority
          />
        </Link>
        <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} />
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 top-[76px] bg-white/80 backdrop-blur-[20px] z-[90] transition-all duration-500 ease-in-out overflow-y-auto ${
          isMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col justify-between h-[calc(100vh-76px)] max-w-[800px] mx-auto">
          {/* Menu Items Section */}
          <div className="pl-5 pt-[129px]">
            <ul className="grid grid-cols-2 gap-x-[10px] gap-y-5">
              {menuItems
                .sort((a, b) => a.order - b.order)
                .map((item, index) => (
                  <li
                    key={item.href}
                    className={`order-${item.order} hover:opacity-30`}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block"
                      style={{
                        transitionDelay: `${index * 50}ms`,
                        opacity: isMenuOpen ? 1 : 0,
                        transition: "opacity 0.3s ease",
                      }}
                    >
                      <div className="text-[22px] font-semibold leading-[120%] tracking-[-2%]">
                        {item.title}
                      </div>
                      <div className="text-xs md:text-[9px] tracking-[5%] font-medium">
                        {item.subtitle}
                      </div>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* Social Links Section */}
          <div className="pl-5 pb-[30px] w-fit">
            {socialLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-4 text-base font-semibold mb-6 last:mb-0 hover:opacity-30"
                style={{
                  transitionDelay: `${(menuItems.length + index) * 50}ms`,
                  opacity: isMenuOpen ? 1 : 0,
                  transition: "opacity 0.3s ease",
                }}
              >
                {link.icon}
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
