import { Controller, Param, Delete, ParseIntPipe} from '@nestjs/common';
import { OrderIdValidationPipe } from 'src/pipes/orderIdValidationPipe';
import { OrdersService } from 'src/services/ordersService';

@Controller('orders')
export class OrdersController {
    constructor(private ordersService: OrdersService) {}

    @Delete(':id')
    delete(@Param('id', ParseIntPipe, OrderIdValidationPipe) id: number) {

        const deletedOrder = this.ordersService.deleteOrder(id)
        return deletedOrder
    }
}