import { IsString, IsNumber } from "class-validator";

export class CreateProductDto {
    @IsString()
    name: string;

    @IsString()
    category: string;

    @IsNumber()
    amount: number;

    @IsNumber()
    price: number;
}