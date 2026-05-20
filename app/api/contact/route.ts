import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, phone, email, message } = body;

    if (!name || !phone || !email || !message) {
      return NextResponse.json(
        { error: "جميع الحقول مطلوبة" },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "AFAQ ENERGY <onboarding@resend.dev>",
      to: [
        "info@afaqenergy.com",
        "sales@afaqenergy.com"
      ],
      subject: `رسالة جديدة من موقع AFAQ ENERGY - ${name}`,
      html: `
        <div dir="rtl" style="font-family: Arial; line-height: 1.8;">
          <h2>رسالة جديدة من الموقع</h2>
          <p><strong>الاسم:</strong> ${name}</p>
          <p><strong>الهاتف:</strong> ${phone}</p>
          <p><strong>الإيميل:</strong> ${email}</p>
          <p><strong>الرسالة:</strong></p>
          <p>${message}</p>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      data,
    });

  } catch {
    return NextResponse.json(
      { error: "حدث خطأ أثناء الإرسال" },
      { status: 500 }
    );
  }
}