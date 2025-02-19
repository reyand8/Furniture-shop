import { IsNumber, IsOptional, IsString } from 'class-validator';


export class UpdateCategoryDto {
    @IsNumber({}, { message: 'Category id must be a number.' })
    id: number;

    @IsOptional()
    @IsString({ message: 'The product name must be a string.' })
    name: string;
}
