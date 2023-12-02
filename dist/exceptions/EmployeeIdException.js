"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeIdException = void 0;
const common_1 = require("@nestjs/common");
class EmployeeIdException extends common_1.HttpException {
    constructor() {
        super('Employee with such id not found', common_1.HttpStatus.NOT_FOUND);
    }
}
exports.EmployeeIdException = EmployeeIdException;
//# sourceMappingURL=EmployeeIdException.js.map