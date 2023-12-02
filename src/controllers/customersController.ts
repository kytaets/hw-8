import { Controller, Param, Get, ParseIntPipe } from '@nestjs/common';
import { CustomerIdValidationPipe } from 'src/pipes/customerIdValidationPipe';
import { CustomersService } from 'src/services/customersService';

@Controller('customers')
export class CustomersController {
    constructor(private customersService: CustomersService) {}

    @Get(':id/orders')
    findAll(@Param('id', ParseIntPipe, CustomerIdValidationPipe ) id: number) {
        const customerId = this.customersService.getOrders(id)
        return customerId
    }
}