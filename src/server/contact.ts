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

  // Safe server-side processing handler
  // Logs safely on server without exposing credentials or making false delivery claims
  console.log(`[Contact Submission] From: ${sanitizedName} <${sanitizedEmail}>`);
  console.log(`[Message Content]: ${sanitizedMessage.substring(0, 100)}...`);

  return {
    success: true,
    message: "Thank you for reaching out! Your message has been safely received.",
  };
}
