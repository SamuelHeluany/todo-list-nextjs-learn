import z from "zod";

export const clearAllTasksStatusSchema = z.object({
  done: z.boolean(),
});

export type ClearAllTasksStatusSchema = z.infer<
  typeof clearAllTasksStatusSchema
>;
