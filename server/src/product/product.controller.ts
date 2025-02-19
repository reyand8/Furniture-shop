import {
    Body, Controller, Delete, Get, Param, Post,
    Put, Query, UsePipes, ValidationPipe
} from '@nestjs/common';
import {Category, Products} from '@prisma/client';

import { ProductService } from './product.service';
import { CreateCategoryDto } from './dto/createCategory.dto';
import { CreateProductDto } from './dto/createProduct.dto';
import { UpdateProductDto } from './dto/updateProduct.dto';
import {UpdateCategoryDto} from "./dto/updateCategory.dto";


@Controller('catalog')
export class ProductController {
    constructor(private readonly productService: ProductService ) {}

    @Get('categories')
    async getCategories(): Promise<Category[]> {
        return this.productService.getCategories();
    }

    @Post('category')
    @UsePipes(new ValidationPipe({ whitelist: true, transform: true }))
    async createCategory(@Body() data: CreateCategoryDto): Promise<Category> {
        return this.productService.createCategory(data.name);
    }

    @Delete('category/:id')
    async deleteCategory(@Param('id') id: number): Promise<Category> {
        return this.productService.deleteCategory(id);
    }

    @Put('category/:id')
    @UsePipes(new ValidationPipe({ whitelist: true, transform: true }))
    async updateCategory(@Param('id')
                                 id: number, @Body()
        updateCategoryDto: UpdateCategoryDto): Promise<Category> {
        return this.productService.updateCategory(id, updateCategoryDto);
    }

    @Get('category/:category/products')
    async getProductsByCategory(@Param() category: string ): Promise<Products[]> {
        return this.productService.getProductsByCategory(category);
    }

    @Post('product')
    @UsePipes(new ValidationPipe({ whitelist: true, transform: true }))
    async createProduct(@Body() createProductDto: CreateProductDto): Promise<Products> {
        return this.productService.createProduct(createProductDto);
    }

    @Get('product/:id')
    async getProduct(@Param('id') id: string): Promise<Products | null> {
        return this.productService.getProductById(+id);
    }

    @Put('product/:id')
    @UsePipes(new ValidationPipe({ whitelist: true, transform: true }))
    async updateProduct(@Param('id') id: number, @Body() updateProductDto: UpdateProductDto): Promise<Products> {
        return this.productService.updateProduct(id, updateProductDto);
    }

    @Delete('product/:id')
    async deleteProduct(@Param('id') id: number): Promise<Products> {
        return this.productService.deleteProduct(id);
    }

    @Get('search')
    async searchProductByName(@Query('name') name: string): Promise<Products[]> {
        return this.productService.searchProductByName(name);
    }

    @Get('top-products')
    async getProducts(): Promise<Products[]> {
        return this.productService.getTopSellerProducts();
    }

    @Get('relative-products')
    async getRelativeProducts(@Query('type') type: string): Promise<Products[]> {
        return this.productService.getRelativeProducts(type );
    }

    @Get('filtered')
    async getFilteredProducts(
        @Query('category') category?: string,
        @Query('minPrice') minPrice?: number,
        @Query('maxPrice') maxPrice?: number
    ): Promise<Products[]> {
        return this.productService.filteredProducts(category, minPrice, maxPrice);
    }
}
