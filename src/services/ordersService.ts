import { PrismaClient } from 'node_modules/.prisma/client'
import { Injectable } from "@nestjs/common";
import { OrderIdException } from 'src/exceptions/OrderIdException';

const prisma = new PrismaClient();

@Injectable()
export class OrdersService {
    async deleteOrder(orderid: number) {

        await prisma.ordersOfProducts.deleteMany({
            where: {orderId: orderid}
        });

        const deletedOrder = await prisma.orders.delete({
            where: {id: orderid}
        });

        return deletedOrder;
    }
}