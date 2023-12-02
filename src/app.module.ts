import { Module } from '@nestjs/common';
import { ProductsModule } from './modules/productsModule';
import { EmployeesModule } from './modules/employeesModule';
import { OrdersModule } from './modules/ordersModule';
import { CustomersModule } from './modules/customersModule';

@Module({
  imports: [ProductsModule, EmployeesModule, OrdersModule, CustomersModule]
})
export class AppModule {}
