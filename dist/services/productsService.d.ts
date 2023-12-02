import { Product } from "src/interfaces/createProduct";
export declare class ProductsServise {
    createProduct(product: Product): Promise<{
        id: number;
        name: string;
        category: string;
        amount: number;
        price: number;
    }>;
}
