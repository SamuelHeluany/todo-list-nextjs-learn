"use server";
import { db } from "@/app/_lib/prisma";
import { clearAllTasksStatusSchema, ClearAllTasksStatusSchema } from "./schema";
import { revalidatePath } from "next/cache";

export const clearAllTasksStatus = async ({
  done,
}: ClearAllTasksStatusSchema) => {
  clearAllTasksStatusSchema.parse({ done });
  try {
    await db.tasks.updateMany({
      data: {
        done: false,
      },
    });
  } catch (error) {
    console.error(error);
  }
  revalidatePath("/");
};
