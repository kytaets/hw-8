import { CustomersService } from 'src/services/customersService';
export declare class CustomersController {
    private customersService;
    constructor(customersService: CustomersService);
    findAll(id: number): Promise<{
        orders: {
            id: number;
            employeeId: number;
            customerId: number;
            orderAddress: string;
            deliveryCost: number;
            orderDate: Date;
            totalCost: number;
        }[];
        totalCost: number;
    }>;
}
