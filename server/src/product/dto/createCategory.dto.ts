import { IsString } from 'class-validator';


export class CreateCategoryDto {
    @IsString({ message: 'The category name must be a string.' })
    name: string;
}
