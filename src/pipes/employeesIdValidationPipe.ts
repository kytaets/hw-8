import {Injectable, PipeTransform } from "@nestjs/common";
import { PrismaClient } from 'node_modules/.prisma/client'
import { EmployeeIdException } from "src/exceptions/EmployeeIdException";

const prisma = new PrismaClient();

@Injectable()
export class EmployeesIdValidationPipe implements PipeTransform{
    async transform(value: any) {
        
        if(!await prisma.employees.findUnique({where: {id: value}}))
            throw new EmployeeIdException();

        return value;
    }
}