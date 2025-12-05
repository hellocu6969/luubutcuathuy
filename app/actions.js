"use server";

export async function sendEmail(data) {
  const serviceId = process.env.EMAILJS_SERVICE_ID;
  const templateId = process.env.EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.EMAILJS_PUBLIC_KEY;
  const privateKey = process.env.EMAILJS_PRIVATE_KEY; // Optional, for added security if enabled in EmailJS

  if (!serviceId || !templateId || !publicKey) {
    return { success: false, error: "Missing EmailJS configuration" };
  }

  try {
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        accessToken: privateKey,
        template_params: data,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("EmailJS Error:", errorText);
      return { success: false, error: "Failed to send email" };
    }

    return { success: true };
  } catch (error) {
    console.error("Server Action Error:", error);
    return { success: false, error: "Internal server error" };
  }
}
