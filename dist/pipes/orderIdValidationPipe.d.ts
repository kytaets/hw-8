import { PipeTransform } from "@nestjs/common";
export declare class OrderIdValidationPipe implements PipeTransform {
    transform(value: any): Promise<any>;
}
