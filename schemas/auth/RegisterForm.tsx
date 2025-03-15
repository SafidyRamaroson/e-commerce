import { z } from "@/configs/zod.config";

export const RegisterSchema = z.object({
    code: z
        .string()
        .length(6)
        .regex(/^\d{6}$/),
    password: z
        .string()
        .min(8),
    email: z
        .string()
        .email(),
    firstName: z
        .string()
        .min(3)
        .max(20),
    lastName: z
        .string()
        .min(3)
        .max(20)
})

export type RegisterSchemaType = z.infer<typeof RegisterSchema> 