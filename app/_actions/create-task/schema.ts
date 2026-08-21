import z from "zod";

export const createTaskSchema = z.object({
  id: z.uuid().optional(),
  task: z
    .string()
    .trim()
    .min(0.01, { message: "O nome da tarefa é obrigatório!" }),
  done: z.boolean().default(false),
});

export type CreateTaskSchema = z.infer<typeof createTaskSchema>;
