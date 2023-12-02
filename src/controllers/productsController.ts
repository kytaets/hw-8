import { Controller, Post, Body} from '@nestjs/common';
import { CreateProductDto } from '../dto/createProductDto'
import { ProductsServise } from 'src/services/productsService';
import { ProductCategoryException } from 'src/exceptions/ProductCategoryException';


@Controller('products')
export class ProductsController {
    constructor(private productsService : ProductsServise) {}

    @Post() 
    async create(@Body() body: CreateProductDto) {

        if(!body.category)
            throw new ProductCategoryException();

        const newProd = this.productsService.createProduct(body);
        return newProd
    }
}
