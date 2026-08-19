"use server";

import { db } from "@/app/_lib/prisma";

export const getTasks = async () => {
  try {
    const tasks = await db.tasks.findMany({});
    return tasks;
  } catch (error) {
    console.error("Erro ao buscar Tarefas", error);
    return [];
  }
};
