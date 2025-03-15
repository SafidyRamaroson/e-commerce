import { z } from "@/lib/zod/fr-zod";

enum CategoryEnum {
    MI = 1,
    MBB = 2,
    AUTRES = 3,
}

export const UpdateProductSchema = z.object({
    name: z
        .string()
        .trim()
        .max(60)
        .min(3)
        .optional(),
    description: z
        .string()
        .trim()
        .max(1000)
        .min(5)
        .optional(),
    price: z
        .number()
        .positive()
        .optional(),
    image: z
        .string()
        .url()
        .optional(),
    stock: z
        .number()
        .int()
        .nonnegative()
        .optional(),
    minimumThreshold: z
        .number()
        .int()
        .nonnegative()
        .optional(),
    categoryId: z
        .nativeEnum(CategoryEnum)
        .optional(),
});

export type UpdateProductSchemaType = z.infer<typeof UpdateProductSchema>;
