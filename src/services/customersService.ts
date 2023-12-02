import { PrismaClient } from 'node_modules/.prisma/client'
import { Injectable } from "@nestjs/common";
import { CustomerIdException } from 'src/exceptions/CustomersIdException';

const prisma = new PrismaClient();

@Injectable()
export class CustomersService {
    async getOrders(customerId: number) {

        const orders = await prisma.orders.findMany({
            where: {customerId: customerId},
            select : {
                id : true,
                deliveryCost: true,
                OrdersOfProducts: {
                    select : {
                        productId: true,
                        amount : true
                    }
                }                
            }
        })

        let totalCost = 0;

        for(let j = 0; j < orders.length; j++){

            let orderCost = 0;

            const orderId = orders[j].id;

            for(let i = 0; i < orders[j].OrdersOfProducts.length; i++){
                
                const productId = orders[j].OrdersOfProducts[i].productId;
                const amount = orders[j].OrdersOfProducts[i].amount;

                const price = (await prisma.products.findUnique({
                    where : {id: productId},
                    select: {
                        price: true
                    }
                })).price

                orderCost += amount * price ;
            }

            orderCost += orders[j].deliveryCost;
            totalCost += orderCost

            await prisma.orders.update({
                where: {id : orderId},
                data: {
                    totalCost: orderCost,
                }
            })
        }

        return {"orders" : await prisma.orders.findMany({where: {customerId: customerId}}),
        "totalCost": totalCost};
    }
}