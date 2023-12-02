import { PipeTransform } from "@nestjs/common";
export declare class EmployeesIdValidationPipe implements PipeTransform {
    transform(value: any): Promise<any>;
}
