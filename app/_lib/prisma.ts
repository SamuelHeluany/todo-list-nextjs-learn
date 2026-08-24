import { PrismaClient } from "@/app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

import { Pool } from "pg";

declare global {
  var cachedPrisma: ReturnType<typeof createPrismaClient> | undefined;
}

const createPrismaClient = () => {
  // 1. Cria a conexão configurando o SSL no Pool da biblioteca pg
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: true, // Garante o comportamento 'verify-full' sem emitir o warning
    },
  });

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
