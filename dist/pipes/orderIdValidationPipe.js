"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderIdValidationPipe = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("../../node_modules/.prisma/client/index.js");
const OrderIdException_1 = require("../exceptions/OrderIdException");
const prisma = new client_1.PrismaClient();
let OrderIdValidationPipe = class OrderIdValidationPipe {
    async transform(value) {
        if (!await prisma.orders.findUnique({ where: { id: value } }))
            throw new OrderIdException_1.OrderIdException();
        return value;
    }
};
exports.OrderIdValidationPipe = OrderIdValidationPipe;
exports.OrderIdValidationPipe = OrderIdValidationPipe = __decorate([
    (0, common_1.Injectable)()
], OrderIdValidationPipe);
//# sourceMappingURL=orderIdValidationPipe.js.map