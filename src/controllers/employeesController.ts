import { Controller, Param, Body, Patch, ParseIntPipe } from '@nestjs/common';
import { UpdateEmployeeDto } from 'src/dto/updateEmloyeeDto';
import { EmployeesIdValidationPipe } from 'src/pipes/EmployeesIdValidationPipe';
import { EmployeesService } from 'src/services/employeesService';

@Controller('employees')
export class EmployeesController {
    constructor(private employeesService: EmployeesService) {}

    @Patch(':id')
    async update(@Param('id', ParseIntPipe, EmployeesIdValidationPipe) id: number, @Body()  body: UpdateEmployeeDto) {
        const updatedEmployee = this.employeesService.updateEmployee(id, body)
        return updatedEmployee
    }
}