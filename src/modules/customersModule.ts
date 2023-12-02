import { Module } from '@nestjs/common';
import { CustomersController } from 'src/controllers/customersController';
import { CustomersService } from 'src/services/customersService';

@Module({
    controllers: [CustomersController],
    providers: [CustomersService]
})

export class CustomersModule {}