import { Module } from '@nestjs/common';
import { EmployeeModule } from './employee/employee.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { ContactsModule } from './contacts/contacts.module';

@Module({
  imports: [EmployeeModule, PrismaModule, ConfigModule.forRoot({
    isGlobal: true
  }), ContactsModule]
})
export class AppModule {}
