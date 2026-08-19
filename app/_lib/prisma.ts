import { PrismaClient } from "@/app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

import { Pool } from "pg";

declare global {
  var cachedPrisma: ReturnType<typeof createPrismaClient> | undefined;
}

const createPrismaClient = () => {
  // 1. Cria a conexão usando a biblioteca nativa pg
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });

  // 2. Passa o pool para o Adapter
  const adapter = new PrismaPg(pool);

  // 3. Instancia o PrismaClient com o adapter
  return new PrismaClient({ adapter });
};

let prisma: ReturnType<typeof createPrismaClient>;

if (process.env.NODE_ENV === "production") {
  prisma = createPrismaClient();
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = createPrismaClient();
  }

  prisma = global.cachedPrisma;
}

export const db = prisma;
