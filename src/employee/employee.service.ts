import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/prisma/prisma.service';
import { EmployeeDto } from './dto';

@Injectable()
export class EmployeeService {
    constructor(private prisma: PrismaService, private config: ConfigService) {}

    async create(dto: EmployeeDto){
        try {
            const employee = await this.prisma.employee.create({
                data: {
                    fullName: dto.fullName,
                    jobTitle: dto.jobTitle,
                    phoneNumber: dto.phoneNumber,
                    email: dto.email,
                    address: dto.address,
                    city: dto.city,
                    state: dto.state
                }
            })

            return employee
        } catch (error) {
            if(error.code === 'P2002') {
                throw new ForbiddenException(
                    'credentials taken'
                )
            }
            throw error
        }
    }
}
