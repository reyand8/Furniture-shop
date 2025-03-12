import { IsString, IsOptional, MaxLength } from 'class-validator';

export class UpdateContactInfoDto {

    @IsString()
    @IsOptional()
    @MaxLength(100, { message: 'Company name must be at most 100 characters.' })
    companyName?: string;

    @IsString()
    @MaxLength(200, { message: 'Address must be at most 200 characters.' })
    @IsOptional()
    address?: string;

    @IsString()
    @IsOptional()
    @MaxLength(100, { message: 'Region must be at most 100 characters.' })
    region?: string;

    @IsString()
    @IsOptional()
    @MaxLength(100, { message: 'City must be at most 100 characters.' })
    city?: string;

    @IsString()
    @MaxLength(30, { message: 'Zip code must be at most 30 characters.' })
    @IsOptional()
    zipCode?: string;

    @IsString()
    @MaxLength(13, { message: 'Phone number must be at most 13 characters.' })
    @IsOptional()
    phone?: string;

    @IsString()
    @IsOptional()
    country?: string;
}

