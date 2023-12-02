"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderIdException = void 0;
const common_1 = require("@nestjs/common");
class OrderIdException extends common_1.HttpException {
    constructor() {
        super('Order with such id not found', common_1.HttpStatus.NOT_FOUND);
    }
}
exports.OrderIdException = OrderIdException;
//# sourceMappingURL=OrderIdException.js.map