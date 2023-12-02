"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerIdException = void 0;
const common_1 = require("@nestjs/common");
class CustomerIdException extends common_1.HttpException {
    constructor() {
        super('Customer with such id not found', common_1.HttpStatus.NOT_FOUND);
    }
}
exports.CustomerIdException = CustomerIdException;
//# sourceMappingURL=CustomersIdException.js.map