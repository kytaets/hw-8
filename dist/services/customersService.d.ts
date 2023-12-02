export declare class CustomersService {
    getOrders(customerId: number): Promise<{
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
