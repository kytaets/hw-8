"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCategoryException = void 0;
const common_1 = require("@nestjs/common");
class ProductCategoryException extends common_1.HttpException {
    constructor() {
        super('Invalid product category', common_1.HttpStatus.FORBIDDEN);
    }
}
exports.ProductCategoryException = ProductCategoryException;
//# sourceMappingURL=ProductCategoryException.js.map