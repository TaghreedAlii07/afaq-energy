import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

type Lang = "ar" | "en";

export default function Footer({ lang = "ar" }: { lang?: Lang }) {
  const isEnglish = lang === "en";

  return (
    <footer
      dir={isEnglish ? "ltr" : "rtl"}
      className="bg-[#1F4E8C] px-6 py-16 text-white md:px-12 lg:px-20"
    >
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div className={isEnglish ? "text-left" : "text-right"}>
          <h2 className="text-3xl font-black">
            {isEnglish ? "AFAQ ENERGY" : "آفاق الطاقة"}
          </h2>

          <p className="mt-2 tracking-[5px] text-blue-100">AFAQ ENERGY</p>

          <p className="mt-6 leading-8 text-blue-100">
            {isEnglish
              ? "Integrated MRO supply chain solutions for the energy and industrial sectors with high standards of quality and efficiency."
              : "حلول متكاملة في قطاع الطاقة والصناعة بأعلى معايير الجودة والكفاءة."}
          </p>
        </div>

        <div className={isEnglish ? "text-left" : "text-right"}>
          <h3 className="mb-5 text-xl font-bold">
            {isEnglish ? "Quick Links" : "روابط سريعة"}
          </h3>

          <ul className="space-y-3 text-blue-100">
            <li><a href="#home">{isEnglish ? "Home" : "الرئيسية"}</a></li>
            <li><a href="#about">{isEnglish ? "About" : "من نحن"}</a></li>
            <li><a href="#services">{isEnglish ? "Services" : "خدماتنا"}</a></li>
            <li><a href="#projects">{isEnglish ? "Projects" : "المشاريع"}</a></li>
            <li><a href="#contact">{isEnglish ? "Contact Us" : "تواصل معنا"}</a></li>
          </ul>
        </div>

        <div className={isEnglish ? "text-left" : "text-right"}>
          <h3 className="mb-5 text-xl font-bold">
            {isEnglish ? "Services" : "الخدمات"}
          </h3>

          <ul className="space-y-3 text-blue-100">
            <li>{isEnglish ? "Industrial Supply" : "توريد المعدات الصناعية"}</li>
            <li>{isEnglish ? "Engineering Support" : "الدعم الفني والهندسي"}</li>
            <li>{isEnglish ? "Energy Solutions" : "أنظمة التحكم والطاقة"}</li>
            <li>{isEnglish ? "Quality & Safety" : "الجودة والسلامة"}</li>
          </ul>
        </div>

        <div className={isEnglish ? "text-left" : "text-right"}>
          <h3 className="mb-5 text-xl font-bold">
            {isEnglish ? "Follow Us" : "تابعنا"}
          </h3>

          <div className="flex gap-4">
            {[FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter].map(
              (Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-xl transition hover:bg-amber-600"
                >
                  <Icon />
                </a>
              )
            )}
          </div>
        </div>
      </div>

      <div className="mt-16 border-t border-white/10 pt-6 text-center text-sm text-blue-100">
        © 2025 AFAQ ENERGY —{" "}
        {isEnglish ? "All rights reserved" : "جميع الحقوق محفوظة"}
      </div>
    </footer>
  );
}