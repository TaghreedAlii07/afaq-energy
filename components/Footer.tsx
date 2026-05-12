import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#1F4E8C] px-6 py-16 text-white md:px-12 lg:px-20">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 lg:grid-cols-4">
        
        {/* Logo */}
        <div>
          <h2 className="text-3xl font-black">آفاق الطاقة</h2>

          <p className="mt-2 tracking-[5px] text-blue-100">
            AFAQ ENERGY
          </p>

          <p className="mt-6 leading-8 text-blue-100">
            حلول متكاملة في قطاع الطاقة والصناعة بأعلى معايير الجودة والكفاءة.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="mb-5 text-xl font-bold">روابط سريعة</h3>

          <ul className="space-y-3 text-blue-100">
            <li>
              <a href="#">الرئيسية</a>
            </li>

            <li>
              <a href="#about">من نحن</a>
            </li>

            <li>
              <a href="#services">خدماتنا</a>
            </li>

            <li>
              <a href="#projects">المشاريع</a>
            </li>

            <li>
              <a href="#contact">تواصل معنا</a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="mb-5 text-xl font-bold">الخدمات</h3>

          <ul className="space-y-3 text-blue-100">
            <li>توريد المعدات الصناعية</li>
            <li>الدعم الفني والهندسي</li>
            <li>أنظمة التحكم والطاقة</li>
            <li>الجودة والسلامة</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="mb-5 text-xl font-bold">تابعنا</h3>

          <div className="flex gap-4">
            <a
              href="#"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-xl transition hover:bg-amber-600"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-xl transition hover:bg-amber-600"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-xl transition hover:bg-amber-600"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="#"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-xl transition hover:bg-amber-600"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-16 border-t border-white/10 pt-6 text-center text-sm text-blue-100">
        © 2025 AFAQ ENERGY — جميع الحقوق محفوظة
      </div>
    </footer>
  );
}