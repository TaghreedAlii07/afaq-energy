"use client";

import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
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
        setStatus("Message sent successfully!");
        setForm({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      setStatus("Something went wrong.");
    }

    setLoading(false);
  };

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
              <span> 00966597791713</span>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="text-orange-400" />
              <span>info@afaqenergy.com</span>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="text-orange-400" />
              <span>sales@afaqenergy.com</span>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-orange-400" />
              <span>Saudi Arabia</span>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl bg-[#f8fafc] p-8 shadow-lg md:p-12"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              className="rounded-2xl border border-gray-200 bg-white px-5 py-4 outline-none focus:border-amber-500"
              required
            />

            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="rounded-2xl border border-gray-200 bg-white px-5 py-4 outline-none focus:border-amber-500"
              required
            />
          </div>

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="mt-5 w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 outline-none focus:border-amber-500"
            required
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={6}
            className="mt-5 w-full resize-none rounded-2xl border border-gray-200 bg-white px-5 py-4 outline-none focus:border-amber-500"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="mt-6 rounded-full bg-amber-500 px-10 py-4 font-bold text-white transition hover:bg-amber-600"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <p className="mt-4 text-center font-medium text-blue-700">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}