import { PipeTransform } from "@nestjs/common";
export declare class CustomerIdValidationPipe implements PipeTransform {
    transform(value: any): Promise<any>;
}
