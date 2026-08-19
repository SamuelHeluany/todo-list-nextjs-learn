"use server";

import { db } from "@/app/_lib/prisma";

export const getTasks = async () => {
  const tasks = await db.tasks.findMany({});

  if (!tasks) return;
  console.log(tasks);
  return tasks;
};
