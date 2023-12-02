import { Employee } from 'src/interfaces/updateEmployee';
export declare class EmployeesService {
    updateEmployee(employeeid: number, employee: Employee): Promise<{
        id: number;
        firstName: string;
        lastName: string;
        middleName: string;
        position: string;
    }>;
}
