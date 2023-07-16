import { ForbiddenException, Injectable, ParseIntPipe, Query } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ContactsDto } from './dto';

@Injectable()
export class ContactsService {
    constructor(private prisma: PrismaService){}

    async create(dto: ContactsDto){
        try {
            const employeeId = Number(dto.employeeId)
            const contact = await this.prisma.contact.create({
                data: {
                    isPrimary: dto.isPrimary,
                    emergencyContact: dto.emergencyContact,
                    phoneNumber: dto.phoneNumber,
                    relationship: dto.relationship,
                    employee: {
                        connect: {
                            id: employeeId
                        }
                    }
                }
            })

            return contact
        } catch (error) {
            throw error
        }
    }
}
