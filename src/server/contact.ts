import { ContactFormData, validateContactForm } from "@/lib/validation";

export interface ContactResponse {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
}

export async function processContactSubmission(data: ContactFormData): Promise<ContactResponse> {
  const validation = validateContactForm(data);

  if (!validation.isValid) {
    return {
      success: false,
      message: "Please correct the highlighted errors in the form.",
      errors: validation.errors as Record<string, string>,
    };
  }

  // Sanitize text inputs
  const sanitizedName = data.name.trim().replace(/[<>]/g, "");
  const sanitizedEmail = data.email.trim().toLowerCase();
  const sanitizedMessage = data.message.trim().replace(/[<>]/g, "");

  // No email provider or persistent message store is configured yet.
  // Do not claim delivery when the message is only processed by this server.
  console.info(`[Contact form received but not delivered] ${sanitizedName} <${sanitizedEmail}> (${sanitizedMessage.length} characters)`);

  return {
    success: false,
    message: "The contact form is not connected to email delivery yet. Please contact me directly at ndrav...@gmail.com.",
  };
}
