"use server";

import { db } from "@/app/_lib/prisma";
import { createTaskSchema, CreateTaskSchema } from "./schema";
import { revalidatePath } from "next/cache";

export const CreateTask = async (data: CreateTaskSchema) => {
  try {
    // Valida e aplica os valores default do Zod (ex: done = false)
    const validatedData = createTaskSchema.parse(data);

    // Insere no banco
    const newTask = await db.tasks.create({
      data: {
        task: validatedData.task,
        done: validatedData.done,
      },
    });
    revalidatePath("/");
  } catch (error) {
    // Exibe qualquer erro de validação do Zod ou erro do Prisma no terminal
    console.error("ERRO ao tentar criar tarefa:", error);
  }
};
