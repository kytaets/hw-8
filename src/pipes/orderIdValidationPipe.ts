import {Injectable, PipeTransform } from "@nestjs/common";
import { PrismaClient } from 'node_modules/.prisma/client'
import { OrderIdException } from "src/exceptions/OrderIdException";

const prisma = new PrismaClient();

@Injectable()
export class OrderIdValidationPipe implements PipeTransform{
    async transform(value: any) {
        
        if(!await prisma.orders.findUnique({where: {id: value}}))
            throw new OrderIdException();

        return value;
    }
}