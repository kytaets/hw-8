import { OrdersService } from 'src/services/ordersService';
export declare class OrdersController {
    private ordersService;
    constructor(ordersService: OrdersService);
    delete(id: number): Promise<{
        id: number;
        employeeId: number;
        customerId: number;
        orderAddress: string;
        deliveryCost: number;
        orderDate: Date;
        totalCost: number;
    }>;
}
