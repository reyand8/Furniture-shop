import { Module } from '@nestjs/common';

import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { PrismaService } from '../prisma.service';
import {AuthModule} from "../auth/auth.module";


@Module({
    imports: [AuthModule],
    controllers: [ProductController],
    providers: [ProductService, PrismaService],
})

export class ProductModule {}