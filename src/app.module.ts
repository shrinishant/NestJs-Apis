import { Module } from '@nestjs/common';
import { EmployeeModule } from './employee/employee.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [EmployeeModule, PrismaModule, ConfigModule.forRoot({
    isGlobal: true
  })]
})
export class AppModule {}
