"use server";

import { db } from "@/app/_lib/prisma";
import { UpdateTaskSchema } from "./schema";
import { revalidatePath } from "next/cache";

export const updateTaskStatus = async ({ id }: UpdateTaskSchema) => {
  try {
    const task = await db.tasks.findUnique({
      where: {
        id,
      },
      select: { done: true },
    });

    if (!task) return;

    await db.tasks.update({
      where: { id },
      data: {
        done: !task.done,
      },
    });
    revalidatePath("/");
  } catch (error) {
    console.error(error);
  }
};
