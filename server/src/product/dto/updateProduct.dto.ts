import { IsArray, IsInt, IsNumber, IsOptional, IsString, Min } from 'class-validator';


export class UpdateProductDto {

    id: number;

    @IsOptional()
    @IsString({ message: 'The product name must be a string.' })
    name: string;

    @IsOptional()
    @IsString({ message: 'The description must be a string.' })
    description?: string;

    @IsOptional()
    @IsNumber({}, { message: 'The price must be a number.' })
    @Min(0, { message: 'The price cannot be negative.' })
    price: number;

    @IsOptional()
    @IsNumber({}, { message: 'The discount price must be a number.' })
    @Min(0, { message: 'The discount price cannot be negative.' })
    discountPrice?: number;

    @IsOptional()
    @IsString({ message: 'The currency must be a string.' })
    currency: string;

    @IsOptional()
    @IsArray({ message: 'The images list must be an array.' })
    @IsString({ each: true, message: 'Each image must be a string (URL).' })
    images: string[];

    @IsOptional()
    @IsInt({ message: 'The category ID must be an integer.' })
    @Min(1, { message: 'The category ID must be a positive number.' })
    categoryId: number;

    @IsOptional()
    @IsArray({ message: 'The sizes list must be an array.' })
    @IsString({ each: true, message: 'Each size must be a string.' })
    sizes: string[];
}
