import { PrismaClient } from 'node_modules/.prisma/client'
const prisma = new PrismaClient()

import { Injectable } from "@nestjs/common";
import { Product } from "src/interfaces/createProduct";

@Injectable()
export class ProductsServise {        
    
    async createProduct(product : Product) {
        const newProduct =  await prisma.products.create({
            data: product     
        });

        return newProduct
    }    
}
