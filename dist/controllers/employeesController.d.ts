import { UpdateEmployeeDto } from 'src/dto/updateEmloyeeDto';
import { EmployeesService } from 'src/services/employeesService';
export declare class EmployeesController {
    private employeesService;
    constructor(employeesService: EmployeesService);
    update(id: number, body: UpdateEmployeeDto): Promise<{
        id: number;
        firstName: string;
        lastName: string;
        middleName: string;
        position: string;
    }>;
}
