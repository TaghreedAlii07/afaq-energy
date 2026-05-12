import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-white px-6 py-24 md:px-12 lg:px-20">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
        <div className="rounded-3xl bg-[#1F4E8C] p-8 text-white md:p-12">
          <p className="mb-4 text-sm font-black tracking-[4px] text-orange-400">
            تواصل معنا
          </p>

          <h2 className="text-3xl font-black leading-tight md:text-5xl">
            جاهزون لخدمة مشروعك
          </h2>

          <p className="mt-6 leading-8 text-blue-100">
            يسعدنا استقبال استفساراتكم وتقديم الحلول المناسبة لاحتياجاتكم في
            قطاع الطاقة والصناعة.
          </p>

          <div className="mt-10 space-y-5">
            <div className="flex items-center gap-4">
              <Phone className="text-orange-400" />
              <span>0500000000</span>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="text-orange-400" />
              <span>info@afaqenergy.com</span>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-orange-400" />
              <span>المملكة العربية السعودية</span>
            </div>
          </div>
        </div>

        <form className="rounded-3xl bg-[#f8fafc] p-8 shadow-lg md:p-12">
          <div className="grid gap-5 md:grid-cols-2">
            <input
              type="text"
              placeholder="الاسم"
              className="rounded-2xl border border-gray-200 bg-white px-5 py-4 outline-none focus:border-amber-500"
            />

            <input
              type="tel"
              placeholder="رقم الجوال"
              className="rounded-2xl border border-gray-200 bg-white px-5 py-4 outline-none focus:border-amber-500"
            />
          </div>

          <input
            type="email"
            placeholder="البريد الإلكتروني"
            className="mt-5 w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 outline-none focus:border-amber-500"
          />

          <textarea
            placeholder="رسالتك"
            rows={6}
            className="mt-5 w-full resize-none rounded-2xl border border-gray-200 bg-white px-5 py-4 outline-none focus:border-amber-500"
          />

          <button
            type="submit"
            className="mt-6 rounded-full bg-amber-500 px-10 py-4 font-bold text-white transition hover:bg-amber-600"
          >
            إرسال الرسالة
          </button>
        </form>
      </div>
    </section>
  );
}