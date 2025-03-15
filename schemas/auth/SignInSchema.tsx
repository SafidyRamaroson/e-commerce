import { z } from "@/configs/zod.config";

export const SignInSchema = z.object({
    password: z
    .string()
    .min(8),
    email:z
    .string()
    .email()
})

export type SignInSchemaType = z.infer<typeof SignInSchema> 