import { z } from "@/lib/zod/fr-zod";


export const ResetPasswordSchema = z
    .object({
        email: z
        .string()
        .email(),
        code: z
            .string()
            .trim()
            .max(6)
            .min(6),
        password: z
            .string()
            .min(6, "Le mot de passe doit contenir au moins 6 caractères.")
            .max(30, {
                message: "Le mot de passe doit contenir au plus 30 caractères"
            }),
        confirmPassword: z
            .string()
            .min(6, "Le mot de passe doit contenir au moins 6 caractères.")
            .max(30, {
                message: "Le mot de passe doit contenir au plus 30 caractères"
            }),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Les mots de passe ne correspondent pas",
        path: ["confirmPassword"],
    });

export type ResetPasswordType  = z.infer<typeof ResetPasswordSchema>;