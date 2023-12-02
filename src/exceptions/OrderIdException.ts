import { HttpException, HttpStatus } from "@nestjs/common";

export class OrderIdException extends HttpException {
    constructor() {
      super('Order with such id not found', HttpStatus.NOT_FOUND);
    }
  }