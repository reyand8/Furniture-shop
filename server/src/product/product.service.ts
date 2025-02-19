import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma.service';
import { Products, Category } from '@prisma/client';


@Injectable()
export class ProductService {
    constructor(private prisma: PrismaService) {}

    async getCategories(): Promise<Category[]> {
        return this.prisma.category.findMany();
    }

    async createCategory(name: string): Promise<Category> {
        return this.prisma.category.create({ data: { name } });
    }

    async deleteCategory(id: number): Promise<Category> {
        return this.prisma.category.delete({ where: { id } });
    }

    async updateCategory(id: number, data: any): Promise<Category> {
        return this.prisma.category.update({ where: { id }, data });
    }

    async getProductsByCategory(category: string): Promise<Products[]> {
        return this.prisma.products.findMany({
            where: { category: { name: category } },
            include: { category: true },
        });
    }

    async searchProductByName(name: string): Promise<Products[]> {
        return this.prisma.products.findMany({
            where: { name: { contains: name, mode: 'insensitive' } },
        });
    }

    async getTopSellerProducts(): Promise<Products[]> {
        return this.prisma.products.findMany({
            where: { isBestSeller: true },
            orderBy: { createdAt: 'desc' },
        });
    }

    async getRelativeProducts(type: any): Promise<Products[]> {
        console.log(type)
        return this.prisma.products.findMany({
            where: { type: type },
            orderBy: { createdAt: 'desc' },
        });
    }

    async filteredProducts(category?: string, minPrice?: number, maxPrice?: number): Promise<Products[]> {
        return this.prisma.products.findMany({
            where: {
                ...(category ? { category: { name: category } } : {}),
                ...(minPrice !== undefined ? { price: { gte: minPrice } } : {}),
                ...(maxPrice !== undefined ? { price: { lte: maxPrice } } : {}),
            },
        });
    }

    async getProductById(productId: number): Promise<Products | null> {
        return this.prisma.products.findFirst({ where: {id: productId}});
    }

    async createProduct(data: any): Promise<Products> {
        return this.prisma.products.create({ data });
    }

    async updateProduct(id: number, data: any): Promise<Products> {
        return this.prisma.products.update({ where: { id }, data });
    }

    async deleteProduct(id: number): Promise<Products> {
        return this.prisma.products.delete({ where: { id } });
    }
}
