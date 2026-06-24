"use client";

import { useState } from "react";

type Lang = "ar" | "en";

export default function Navbar({ lang = "ar" }: { lang?: Lang }) {
  const [open, setOpen] = useState(false);
  const isEnglish = lang === "en";

  const links = isEnglish
    ? [
        { href: "#home", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#services", label: "Services" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" },
      ]
    : [
        { href: "#home", label: "الرئيسية" },
        { href: "#about", label: "من نحن" },
        { href: "#services", label: "خدماتنا" },
        { href: "#projects", label: "المشاريع" },
        { href: "#contact", label: "تواصل" },
      ];

  return (
    <>
      <header className="fixed top-0 z-50 w-full bg-white shadow-md">
        <nav
  className={`mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-12 ${
    isEnglish ? "flex-row" : "flex-row-reverse"
  }`}
>
          <a href={isEnglish ? "/en#home" : "/#home"} className="block">
            <img
              src="/images/logo.png"
              alt="AFAQ ENERGY"
              className="h-20 w-auto object-contain"
            />
          </a>

          <div
  className={`hidden items-center gap-8 text-lg font-bold text-[#1F4E8C] lg:flex ${
    isEnglish ? "flex-row" : "flex-row-reverse"
  }`}
>
            {links.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-amber-500">
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={isEnglish ? "/#home" : "/en#home"}
              className="whitespace-nowrap rounded-full border border-[#1F4E8C]/30 px-5 py-3 font-bold text-[#1F4E8C] transition hover:border-amber-500 hover:text-amber-500"
            >
              {isEnglish ? "العربية" : "English"}
            </a>

            <a
              href="#contact"
              className="whitespace-nowrap rounded-full bg-amber-500 px-7 py-3 font-bold text-white transition hover:bg-amber-600"
            >
              {isEnglish ? "Contact Us" : "تواصل معنا"}
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="flex flex-col gap-1 lg:hidden"
            aria-label="Open menu"
          >
            <span className="h-1 w-9 rounded bg-[#1F4E8C]" />
            <span className="h-1 w-9 rounded bg-[#1F4E8C]" />
            <span className="h-1 w-9 rounded bg-[#1F4E8C]" />
          </button>
        </nav>

        {open && (
          <div className="absolute left-4 top-28 w-[280px] rounded-3xl border border-gray-200 bg-white p-6 shadow-2xl lg:hidden">
            <div
              className={`flex flex-col gap-5 text-xl font-bold text-[#1F4E8C] ${
                isEnglish ? "text-left" : "text-right"
              }`}
            >
              {links.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              ))}

              <a
                href={isEnglish ? "/#home" : "/en#home"}
                onClick={() => setOpen(false)}
                className="rounded-full border border-[#1F4E8C]/30 py-3 text-center text-base font-bold"
              >
                {isEnglish ? "العربية" : "English"}
              </a>

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="rounded-full bg-amber-500 py-3 text-center text-base font-bold text-white"
              >
                {isEnglish ? "Contact Us" : "تواصل معنا"}
              </a>
            </div>
          </div>
        )}
      </header>

      <div className="h-24" />
    </>
  );
}