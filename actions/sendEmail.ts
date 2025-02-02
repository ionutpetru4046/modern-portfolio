"use server";

import { Resend } from "resend";
import { validateString } from "@/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof Error) {        
    message = error.message;
  } else if  (error && typeof error ==='object' && 'message' in error){
    message = String(error.message);
  } else if(typeof error === 'string') {
    message = error;
  } else {
    message = "Unknown error";
  }

  return message;
};

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
    const message = formData.get("message");

    // simple server-side validation
    if (!validateString(senderEmail, 500)) {
      return {
        error: "Invalid sender email"
      }
    }
    if (!validateString(message, 5000)) {
      return {
        error: "Invalid message"
      }
    }

    try {
      await resend.emails.send({
        from: "Contact Form <onboarding@resend.dev>",
        to: "ionion4046@gmail.com",
        subject: "Message from contact form",
        reply_to: senderEmail as string,
        text: message as string,
      });
      
    } catch (error: unknown) {
      return {
        error: getErrorMessage(error),
      }
    }
  };