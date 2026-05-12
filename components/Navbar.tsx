"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 z-50 w-full bg-white shadow-md">
        <nav className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-12">
          <a href="#home" className="block">
  <img
    src="/images/logo.png"
    alt="آفاق الطاقة - AFAQ ENERGY"
    className="h-20 w-auto object-contain"
  />
</a>

          <div className="hidden items-center gap-10 text-lg font-bold text-[#1F4E8C] lg:flex">
            <a href="#home" className="hover:text-amber-500">الرئيسية</a>
            <a href="#about" className="hover:text-amber-500">من نحن</a>
            <a href="#services" className="hover:text-amber-500">خدماتنا</a>
            <a href="#projects" className="hover:text-amber-500">المشاريع</a>
            <a href="#contact" className="hover:text-amber-500">تواصل</a>
          </div>

          <a
            href="#contact"
            className="hidden rounded-full bg-amber-500 px-8 py-3 font-bold text-white transition hover:bg-amber-600 lg:block"
          >
            تواصل معنا
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="flex flex-col gap-1 lg:hidden"
          >
            <span className="h-1 w-9 rounded bg-[#1F4E8C]" />
            <span className="h-1 w-9 rounded bg-[#1F4E8C]" />
            <span className="h-1 w-9 rounded bg-[#1F4E8C]" />
          </button>
        </nav>

        {open && (
          <div className="absolute left-4 top-28 w-[280px] rounded-3xl border border-gray-200 bg-white p-6 shadow-2xl lg:hidden">
            <div className="flex flex-col gap-5 text-right text-xl font-bold text-[#1F4E8C]">
              <a href="#home" onClick={() => setOpen(false)}>الرئيسية</a>
              <a href="#about" onClick={() => setOpen(false)}>من نحن</a>
              <a href="#services" onClick={() => setOpen(false)}>خدماتنا</a>
              <a href="#projects" onClick={() => setOpen(false)}>المشاريع</a>
              <a href="#contact" onClick={() => setOpen(false)}>تواصل معنا</a>

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-amber-500 py-3 text-center text-base font-bold text-white"
              >
                تواصل معنا
              </a>
            </div>
          </div>
        )}
      </header>

      <div className="h-24" />
    </>
  );
}