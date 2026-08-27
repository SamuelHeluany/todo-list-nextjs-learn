"use server";

import { db } from "@/app/_lib/prisma";
import { upsertTaskSchema, UpsertTaskSchema } from "./schema";
import { revalidatePath } from "next/cache";

export const upsertTask = async (data: UpsertTaskSchema) => {
  try {
    // Valida e aplica os valores default do Zod (ex: done = false)
    const validatedData = upsertTaskSchema.parse(data);

    if (data.id) {
      await db.tasks.update({
        where: { id: validatedData.id },
        data: { task: validatedData.task },
      });
    } else {
      // Insere no banco
      await db.tasks.create({
        data: validatedData,
      });
    }
  } catch (error) {
    // Exibe qualquer erro de validação do Zod ou erro do Prisma no terminal
    console.error("ERRO ao tentar criar tarefa:", error);
  }
  revalidatePath("/");
};
