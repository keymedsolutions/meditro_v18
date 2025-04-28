// validations/contact.schema.ts
import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(7, "Phone number is too short"),
  inquiry_for: z.string().min(1, "Select a Inquiry"),
  message: z.string().min(1, "Message is required"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

export const ConatctDetailsSchema = z.object({
  iAmA: z.enum(["Practicing Doctor", "Student"]), // Required dropdown
  full_name: z.string().min(1, "Full Name is required"), // Required
  email: z.string().email("Invalid email address"), // Required
  phone_number: z.string().optional(), // Optional

  organiztion: z.string().optional(), // Optional

  school_name: z.string().optional(), // Optional

  Specialty: z.string().optional(), // Optional
  field_of_study: z.string().optional(), // Optional
  graduation_year: z.string().optional(), // Optional

  interested_in:z.array(z.string()).optional(), // Optional,

  estimated_monthly_claims: z.string().optional(), // Optional
  preferred_contact_method: z.string().optional(), // Optional
  comments_or_questions:z.string().optional(), // Optional
  other_interest:z.string().optional(), // Optional
  // ... other fields
});


export type ContactDetailsFormValues = z.infer<typeof ConatctDetailsSchema>;
