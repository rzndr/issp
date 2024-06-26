import { createActionHistory } from './seed/action-history';
import { createAgencies } from './seed/agencies';
import { createCategories } from './seed/categories';
import { createISSPs } from './seed/issps';
import { createUsers } from './seed/users';
import { deleteAllData } from './seed/delete-all';
import { PrismaClient } from '@prisma/client';
import { createUserRoles } from './seed/roles';

const prisma = new PrismaClient();

async function main() {
  await createCategories(prisma);
  await createAgencies(prisma);
  await createUserRoles(prisma);
  await createUsers(prisma);
  await createISSPs(prisma);
  await createActionHistory(prisma);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
