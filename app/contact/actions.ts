"use server";

import ContactThankYouEmail from "@/components/emails/contact-template";
import { EmailReceived } from "@/components/emails/email-recived-template";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

export type FormState = {
  success?: boolean;
  error?: string;
  message?: string;
};
export async function submitContactForm(
  _prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  try {
    const formSchema = z.object({
      firstname: z.string().min(1, "First name is required"),
      lastname: z.string().min(1, "Last name is required"),
      email: z.string().email("Invalid email"),
      phone: z.string().optional(),
      service: z.string().min(1, "Service is required"),
      message: z.string().min(1, "Message is required"),
    });

    const { data, success } = formSchema.safeParse(
      Object.fromEntries(formData.entries()),
    );

    console.log({ data });

    if (!success)
      return {
        success: false,
        error: "Please enter a valid email address",
      };

    // const reactRes = await resend.emails.send({
    //   from: "onboarding@resend.dev",
    //   to: [data.email],
    //   subject: "Thank you for contacting me",
    //   react: ContactThankYouEmail(),
    // });

    const { error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["hariomarlon83@gmail.com"],
      subject: "Thank you for contacting me",
      react: EmailReceived(data),
    });

    if (error) {
      return {
        success: false,
        error: "Failed to send email. Please try again.",
      };
    }

    return {
      success: true,
      message: "Success! I'll get back to you as soon as possible.",
    };
  } catch (error) {
    console.error("Server action error:", error);
    return {
      success: false,
      error: "Something went wrong. Please try again.",
    };
  }
}
