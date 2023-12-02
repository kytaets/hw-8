import { HttpException, HttpStatus } from "@nestjs/common";

export class EmployeeIdException extends HttpException {
    constructor() {
      super('Employee with such id not found', HttpStatus.NOT_FOUND);
    }
  }