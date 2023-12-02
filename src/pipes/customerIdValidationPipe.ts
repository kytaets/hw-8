import {Injectable, PipeTransform } from "@nestjs/common";
import { PrismaClient } from 'node_modules/.prisma/client'
import { CustomerIdException } from "src/exceptions/CustomersIdException";

const prisma = new PrismaClient();

@Injectable()
export class CustomerIdValidationPipe implements PipeTransform{
    async transform(value: any) {
        
        if(!await prisma.customers.findUnique({where: {id:value}}))
            throw new CustomerIdException();

        return value;
    }
}