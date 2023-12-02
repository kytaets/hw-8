import { PrismaClient } from 'node_modules/.prisma/client'
import { Injectable } from "@nestjs/common";
import { Employee } from 'src/interfaces/updateEmployee';

const prisma = new PrismaClient();

@Injectable()
export class EmployeesService {
    async updateEmployee(employeeid: number, employee: Employee) {

        const updatedEmployee = await prisma.employees.update({
            where: {id: employeeid},
            data : employee
        });
        
        return updatedEmployee;
        
    }
}
