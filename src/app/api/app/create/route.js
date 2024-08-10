import { NextResponse } from 'next/server';
import { getImage, uploadFile } from '@/lib/upload';
import prisma from '@/prisma';
import { slugify } from '@/lib/func';

// Mapping of category names to their IDs
const categoryMap = {
  "Productivity": 1,
  "Utilities": 2,
  "Games": 3,
  "Lifestyle": 4,
  "Education": 5,
  "Entertainment": 6,
  "Finance": 7,
  "Health & Fitness": 8,
  "Social": 9,
  "Travel": 10,
  "News": 11,
  "Shopping": 12,
  "Weather": 13,
  "Music": 14,
  "Photography": 15,
  "Books & Reference": 16,
  "Business": 17,
  "Comics": 18,
  "Medical": 19,
  "Art & Design": 20,
  "Communication": 21,
  "Personalization": 22,
  "Sports": 23,
  "Transportation": 24,
  "Tools": 25,
  "News & Magazines": 27,
  "Media & Video": 28,
  "Libraries & Demo": 29,
  "Auto & Vehicles": 30,
  "Parenting": 31,
  "Dating": 32,
  "Events": 33,
  "Food & Drink": 34,
  "House & Home": 35,
  "Maps & Navigation": 36
};


export const POST = async (req) => {
  try {
    const data = await req.formData();

    // Parse form data from the request
    const fields = {};
    const files = {};
    for (const [name, value] of data.entries()) {
      if (value instanceof File) {
        files[name] = value;
      } else {
        fields[name] = value;
      }
    }

    const { packageName, type, category, title, shortDesc, desc, policyUrl, contentRating, youtubeVideo } = fields;

    // Validation
    if (!packageName || !type || !category || !title) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Handle file uploads
    const icon = await getImage(files.icon);
    const screenshots = files.screenshots
      ? await Promise.all(
          Object.values(files).filter(file => file.name.startsWith('screenshots')).map(file => getImage(file))
        )
      : [];
    const featuredGraphic = await getImage(files.featuredGraphic);

    // Simulate uploadFile logic for appLink
    const appLink = await uploadFile(files);

    // Get category IDs from the mapping
    const categoryIds = category.split(',').map(cat => cat.trim()).map(catName => categoryMap[catName]);

    // Create the new app in the database
    const app = await prisma.app.create({
      data: {
        packageName,
        type: type.toUpperCase() === 'GAME' ? 'GAME' : 'APP',
        slug: slugify(packageName + title), // Adjust if a different slug logic is needed
        name: title,
        shortDesc,
        description: desc,
        policyUrl,
        icon,
        appLink,
        screenshots: screenshots.join(','),
        userId: 1, // For testing purposes
        storeId: 1, // For testing purposes
        categories: {
          connect: categoryIds.map(id => ({ id })),
        },
        logo: featuredGraphic,
        // contentRating : contentRating,
        // video : youtubeVideo,
      },
    });

    return NextResponse.json({ success: true, app }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error creating app' }, { status: 500 });
  }
};
