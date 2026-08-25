import z from "zod";

export const updateTaskSchema = z.object({
  id: z.uuid(),
});

export type UpdateTaskSchema = z.infer<typeof updateTaskSchema>;
