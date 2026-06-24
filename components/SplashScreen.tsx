"use client";

import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setVisible(false);
    }, 1600);

    const removeTimer = setTimeout(() => {
      setMounted(false);
    }, 2400);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-all duration-700 ease-in-out ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <img
        src="/images/logo.png"
        alt="AFAQ ENERGY"
        className={`h-32 w-auto transition-all duration-700 ease-in-out md:h-44 ${
          visible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      />
    </div>
  );
}