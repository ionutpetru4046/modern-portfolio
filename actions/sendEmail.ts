"use server";

const sendEmail = async (formData: FormData) => {
    console.log("Running on the server");
    console.log(formData.get("senderEmail"));
    console.log(formData.get("message"));
  }