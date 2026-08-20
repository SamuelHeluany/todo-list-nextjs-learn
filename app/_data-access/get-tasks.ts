import { db } from "@/app/_lib/prisma";
import { Tasks } from "../generated/prisma";
import "server-only";

export const getTasks = async (): Promise<Tasks[]> => {
  try {
    const tasks = await db.tasks.findMany({});
    return tasks;
  } catch (error) {
    console.error("Erro ao buscar Tarefas", error);
    return [];
  }
};
