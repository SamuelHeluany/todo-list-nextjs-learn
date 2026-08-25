"use server";

import { db } from "@/app/_lib/prisma";
import { DeleteTaskSchema, deleteTaskSchema } from "./schema";
import { revalidatePath } from "next/cache";

export const deleteTask = async ({ id }: DeleteTaskSchema) => {
  try {
    deleteTaskSchema.parse({ id });
    await db.tasks.delete({
      where: {
        id,
      },
    });
  } catch (error) {
    console.error(error);
  }
  revalidatePath("/");
};
