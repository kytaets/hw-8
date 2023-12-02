import { Module } from '@nestjs/common';
import { EmployeesController } from 'src/controllers/employeesController';
import { EmployeesService } from 'src/services/employeesService';

@Module({
    controllers: [EmployeesController],
    providers: [EmployeesService]
})

export class EmployeesModule {}