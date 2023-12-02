export declare class OrdersService {
    deleteOrder(orderid: number): Promise<{
        id: number;
        employeeId: number;
        customerId: number;
        orderAddress: string;
        deliveryCost: number;
        orderDate: Date;
        totalCost: number;
    }>;
}
