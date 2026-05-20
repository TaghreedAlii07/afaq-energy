"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden bg-cover bg-center px-6 pt-20 text-white md:px-12 lg:px-20"
      style={{
        backgroundImage: "url('/images/Hero.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-l from-[#071527]/95 via-[#071527]/75 to-[#071527]/35" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl text-right"
        >
          <p className="mb-5 text-sm font-bold uppercase tracking-[6px] text-amber-500">
            MRO SUPPLY CHAIN SOLUTIONS
          </p>

          <h1 className="text-4xl font-black leading-[1.25] md:text-6xl lg:text-7xl">
            حلول سلاسل الإمداد
            <br />
            <span className="text-amber-500">
              للصيانة والإصلاح والتشغيل
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-9 text-gray-200 md:text-xl">
            نقدم حلول MRO متكاملة لإدارة سلاسل الإمداد وتوريد المعدات والمواد
            الصناعية لضمان استمرارية التشغيل بأعلى مستويات الجودة والكفاءة.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#services"
              className="rounded-full bg-amber-500 px-8 py-4 text-center font-bold text-white shadow-lg transition hover:bg-amber-600"
            >
              اكتشف خدماتنا
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/70 px-8 py-4 text-center font-bold text-white transition hover:bg-white hover:text-[#1F4E8C]"
            >
              تواصل معنا
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}