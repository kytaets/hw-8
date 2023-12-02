import { CreateProductDto } from '../dto/createProductDto';
import { ProductsServise } from 'src/services/productsService';
export declare class ProductsController {
    private productsService;
    constructor(productsService: ProductsServise);
    create(body: CreateProductDto): Promise<{
        id: number;
        name: string;
        category: string;
        amount: number;
        price: number;
    }>;
}
