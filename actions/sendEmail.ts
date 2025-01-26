"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const validateString = (value: unknown) => {
  if (!value  || typeof value !== "string") {
    return false;
  }

  return true;
}

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
    const message = formData.get("message");

    // simple server-side validation
    if (!validateString(senderEmail)) {
      return {
        error: "Invalid sender email"
      }
    }
    if (!validateString(message)) {
      return {
        error: "Invalid message"
      }
    }

    resend.emails.send({
      from: "onboarding@resend.dev",
      to: "ionion4046@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail,
      text: message,
    });
  };