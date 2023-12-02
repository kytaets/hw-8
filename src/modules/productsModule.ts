import { Module } from '@nestjs/common';
import { ProductsController } from 'src/controllers/productsController';
import { ProductsServise } from 'src/services/productsService';

@Module({
    controllers: [ProductsController],
    providers: [ProductsServise]
})

export class ProductsModule {}