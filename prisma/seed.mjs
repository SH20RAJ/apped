import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Define categories to be seeded
  const categories = [
    'Productivity',
    'Utilities',
    'Games',
    'Lifestyle',
    'Education',
    'Entertainment',
    'Finance',
    'Health & Fitness',
    'Social',
    'Travel',
    'News',
    'Shopping'
  ];

  // Ensure each category exists in the database
  for (const categoryName of categories) {
    await prisma.category.upsert({
      where: { name: categoryName },
      update: {}, // No update action needed
      create: { name: categoryName },
    });
  }

  console.log('Categories have been seeded.');
}

main()
  .catch(e => {
    console.error('Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
