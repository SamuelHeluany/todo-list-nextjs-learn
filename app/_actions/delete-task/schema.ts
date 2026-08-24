import z from "zod";

export const deleteTaskSchema = z.object({
  id: z.uuid(),
});

export type DeleteTaskSchema = z.infer<typeof deleteTaskSchema>;
