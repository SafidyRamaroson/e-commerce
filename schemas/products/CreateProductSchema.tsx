import { z } from "@/configs/zod.config";
import { CreateProductMediaSchema } from "./productMedia/CreateProductMedia";


export const CreateProductSchema = z.object({
    name: z
        .string()
        .trim()
        .max(100)
        .min(3),
    description: z
        .string()
        .trim()
        .max(1000)
        .min(5),
    price: z
        .number()
        .positive(),
    stock: z
        .number()
        .int()
        .nonnegative(),
    minimumThreshold: z
        .number()
        .int()
        .nonnegative(),
    categoryId: z
        .number()
        .int()
        .nonnegative(),
    medias: z.array(CreateProductMediaSchema)
});

export type CreateProductSchemaType = z.infer<typeof CreateProductSchema>;
