import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function GET() {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { data } = await resend.emails.send({
      // from: "carlaguides96@gmail.com",
      from: "hariomarlon83@gmail.com",
      to: "hariomarlon83@gmail.com",
      subject: "Hello from Marlon Portfolio",
      html: "<h1>Hello from Marlon Portfolio</h1>",
    });
    return NextResponse.json({ hello: "world", data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
