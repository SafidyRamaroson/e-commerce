import  { z } from "@/configs/zod.config";

export const CreateCollectionSchema = z.object({
    name: z
    .string()
    .trim()
    .max(60)
    .min(5),
    description: z
    .string()
    .trim()
    .max(255)
});

export type CreateCollectionType = z.infer<typeof CreateCollectionSchema>;
