// validations/contact.schema.ts
import { z } from "zod";

export const contactSchema = z.object({
	name: z.string().min(1, "Name is required"),
	email: z.string().email("Invalid email"),
	phone: z.string().min(7, "Phone number is too short"),
	department: z.string().min(1, "Select a department"),
	message: z.string().min(1, "Message is required"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
