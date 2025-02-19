import { Module } from '@nestjs/common';

import { PrismaService } from './prisma.service';
import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';


@Module({
  imports: [
    AuthModule,
    UserModule,
    ProductModule,
  ],
  controllers: [],
  providers: [PrismaService],
})

export class AppModule {}