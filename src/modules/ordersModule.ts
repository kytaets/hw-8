import { Module } from '@nestjs/common';
import { OrdersController } from 'src/controllers/ordersController';
import { OrdersService } from 'src/services/ordersService';

@Module({
    controllers: [OrdersController],
    providers: [OrdersService]
})

export class OrdersModule {}