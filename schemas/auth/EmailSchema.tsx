import { z } from "@/configs/zod.config";

export const EmailSchema = z.object({
    email: z
    .string()
    .email()
});

export type EmailSchemaType = z.infer<typeof EmailSchema>;

