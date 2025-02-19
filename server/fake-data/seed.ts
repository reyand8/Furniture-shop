import * as dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

import { products } from './products.data';
import { users } from './users.data';
import { categories } from './categories.data';


const prisma = new PrismaClient();

dotenv.config();


async function main(): Promise<void> {
    console.log('Database seeding started...');

    for (const category of categories) {
        await prisma.category.create({
            data: category,
        })
    }

    for (const product of products) {
        await prisma.products.create({
            data: product,
        })
    }

    console.log('Table product was seeded successfully...');


    for (const user of users) {
        const createdUser = await prisma.user.create({
            data: {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                password: user.password,
            },
        });

        await prisma.contactInfo.create({
            data: {
                phone: user.phone,
                address: user.address,
                zipCode: user.zipCode,
                city: user.city,
                region: user.region,
                country: user.country,
                userId: createdUser.id,
            },
        });
    }
    console.log('Table users was seeded successfully...');
}



main()
    .catch((e): void => {
        console.error('Error seeding the database:', e);
    })
    .finally(async (): Promise<void> => {
        await prisma.$disconnect();
    });