import z from "zod";

export const upsertTaskSchema = z.object({
  id: z.uuid().optional(),
  task: z
    .string()
    .trim()
    .min(1, { message: "O nome da tarefa é obrigatório!" }),
  done: z.boolean(),
});

export type UpsertTaskSchema = z.infer<typeof upsertTaskSchema>;
