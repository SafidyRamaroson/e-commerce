import { z } from "@/configs/zod.config"

export const CreateProductMediaSchema = z.object({
    public_id: z.string().trim().max(50).min(5),
    format: z.string().trim().max(8).min(3),
    resource_type: z.string(),
    original_filename: z.string().max(250),
    type: z.string().trim().max(10).min(5),
})

export type CreateProductMediaType = z.infer<typeof CreateProductMediaSchema>