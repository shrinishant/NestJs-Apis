import { ForbiddenException, Injectable, NotFoundException, ParseIntPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/prisma/prisma.service';
import { Contacts, EmployeeDto, UpdateEmployeeDto } from './dto';

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
                    state: dto.state,
                    contacts: {
                        createMany: {
                            data: dto.contacts
                        }
                    }
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

    async update(id: number, dto: UpdateEmployeeDto){
        try {

            const existingEmployee = await this.prisma.employee.findUnique({
                where: { id },
                include: { contacts: true },
            })
        
            if (!existingEmployee) {
            throw new NotFoundException('Employee not found');
            }

            const employee = await this.prisma.employee.update({
                where: {id},
                data: {
                    fullName: dto.fullName,
                    jobTitle: dto.jobTitle,
                    phoneNumber: dto.phoneNumber,
                    email: dto.email,
                    address: dto.address,
                    city: dto.city,
                    state: dto.state,
                    contacts: {
                        updateMany: dto.contacts?.map((contactDto) => ({
                            where: { id: parseInt(contactDto.contactId, 10) },
                            data: {
                              isPrimary: contactDto.isPrimary,
                              emergencyContact: contactDto.emergencyContact,
                              phoneNumber: contactDto.phoneNumber,
                              relationship: contactDto.relationship,
                            },
                          })),
                    }
                },
                include: {
                    contacts: true
                }
            })

            return employee
        } catch (error) {
            throw error
        }
    }
}
