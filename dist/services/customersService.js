"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersService = void 0;
const client_1 = require("../../node_modules/.prisma/client/index.js");
const common_1 = require("@nestjs/common");
const prisma = new client_1.PrismaClient();
let CustomersService = class CustomersService {
    async getOrders(customerId) {
        const orders = await prisma.orders.findMany({
            where: { customerId: customerId },
            select: {
                id: true,
                deliveryCost: true,
                OrdersOfProducts: {
                    select: {
                        productId: true,
                        amount: true
                    }
                }
            }
        });
        let totalCost = 0;
        for (let j = 0; j < orders.length; j++) {
            let orderCost = 0;
            const orderId = orders[j].id;
            for (let i = 0; i < orders[j].OrdersOfProducts.length; i++) {
                const productId = orders[j].OrdersOfProducts[i].productId;
                const amount = orders[j].OrdersOfProducts[i].amount;
                const price = (await prisma.products.findUnique({
                    where: { id: productId },
                    select: {
                        price: true
                    }
                })).price;
                orderCost += amount * price;
            }
            orderCost += orders[j].deliveryCost;
            totalCost += orderCost;
            await prisma.orders.update({
                where: { id: orderId },
                data: {
                    totalCost: orderCost,
                }
            });
        }
        return { "orders": await prisma.orders.findMany({ where: { customerId: customerId } }),
            "totalCost": totalCost };
    }
};
exports.CustomersService = CustomersService;
exports.CustomersService = CustomersService = __decorate([
    (0, common_1.Injectable)()
], CustomersService);
//# sourceMappingURL=customersService.js.map