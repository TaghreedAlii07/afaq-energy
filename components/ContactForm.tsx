"use client";

import { useState } from "react";

type Lang = "ar" | "en";

export default function ContactForm({ lang = "ar" }: { lang?: Lang }) {
  const isEnglish = lang === "en";

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus(
          isEnglish
            ? "Message sent successfully ✅"
            : "تم إرسال الرسالة بنجاح ✅"
        );

        setForm({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      } else {
        setStatus(
          isEnglish ? "Failed to send message ❌" : "فشل إرسال الرسالة ❌"
        );
      }
    } catch {
      setStatus(
        isEnglish
          ? "Something went wrong ❌"
          : "حدث خطأ أثناء الإرسال ❌"
      );
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      dir={isEnglish ? "ltr" : "rtl"}
      className="rounded-3xl bg-[#f8fafc] p-8 shadow-lg md:p-12"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder={isEnglish ? "Name" : "الاسم"}
          className="rounded-2xl border border-gray-200 bg-white px-5 py-4 outline-none focus:border-amber-500"
          required
        />

        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder={isEnglish ? "Phone Number" : "رقم الجوال"}
          className="rounded-2xl border border-gray-200 bg-white px-5 py-4 outline-none focus:border-amber-500"
          required
        />
      </div>

      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder={isEnglish ? "Email" : "البريد الإلكتروني"}
        className="mt-5 w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 outline-none focus:border-amber-500"
        required
      />

      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder={isEnglish ? "Your Message" : "رسالتك"}
        rows={6}
        className="mt-5 w-full resize-none rounded-2xl border border-gray-200 bg-white px-5 py-4 outline-none focus:border-amber-500"
        required
      />

      <button
        type="submit"
        disabled={loading}
        className="mt-6 rounded-full bg-amber-500 px-10 py-4 font-bold text-white transition hover:bg-amber-600 disabled:opacity-50"
      >
        {loading
          ? isEnglish
            ? "Sending..."
            : "جاري الإرسال..."
          : isEnglish
          ? "Send Message"
          : "إرسال الرسالة"}
      </button>

      {status && (
        <p className="mt-4 text-center font-medium text-blue-700">{status}</p>
      )}
    </form>
  );
}