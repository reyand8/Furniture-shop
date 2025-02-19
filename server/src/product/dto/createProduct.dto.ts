import { IsString, IsOptional, IsNumber, IsArray, IsInt, Min } from 'class-validator';


export class CreateProductDto {

    @IsNumber({}, { message: 'Product id must be a number.' })
    id: number;

    @IsString({ message: 'The product name must be a string.' })
    name: string;

    @IsOptional()
    @IsString({ message: 'The description must be a string.' })
    description?: string;

    @IsNumber({}, { message: 'The price must be a number.' })
    @Min(0, { message: 'The price cannot be negative.' })
    price: number;

    @IsOptional()
    @IsNumber({}, { message: 'The discount price must be a number.' })
    @Min(0, { message: 'The discount price cannot be negative.' })
    discountPrice?: number;

    @IsString({ message: 'The currency must be a string.' })
    currency: string;

    @IsArray({ message: 'The images list must be an array.' })
    @IsString({ each: true, message: 'Each image must be a string (URL).' })
    images: string[];

    @IsInt({ message: 'The category ID must be an integer.' })
    @Min(1, { message: 'The category ID must be a positive number.' })
    categoryId: number;

    @IsArray({ message: 'The sizes list must be an array.' })
    @IsString({ each: true, message: 'Each size must be a string.' })
    sizes: string[];
}