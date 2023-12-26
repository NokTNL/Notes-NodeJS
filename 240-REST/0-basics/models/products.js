import z from "zod";

/**
 * @typedef {z.infer<typeof productSchema>} Product
 */
export const productSchema = z.object({
  id: z.number(),
  title: z.string(),
  price: z.number(),
  description: z.string().nullable(),
});
