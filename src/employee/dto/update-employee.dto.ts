import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsMobilePhone, IsNotEmpty, IsOptional, IsString } from "class-validator"

export class Contacts {

    @IsOptional()
    isPrimary?: string

    @IsString()
    @IsOptional()
    emergencyContact?: string

    @IsMobilePhone()
    @IsOptional()
    phoneNumber?: string

    @IsString()
    @IsOptional()
    relationship?: string

    // @IsNotEmpty()
    contactId: string
}

export class UpdateEmployeeDto {

    @ApiProperty({ description: 'Full name of the employee' })
    @IsString()
    @IsOptional()
    fullName?: string

    @ApiProperty({ description: 'Job title of the employee' })
    @IsString()
    @IsOptional()
    jobTitle?: string

    @ApiProperty({ description: 'Phone number of the employee', example: '+9876543210' })
    @IsMobilePhone()
    @IsOptional()
    phoneNumber?: string

    @ApiProperty({ description: 'Email address of the employee', example: 'john.doe@example.com' })
    @IsEmail()
    @IsOptional()
    email?: string

    @ApiProperty({ description: 'Address of the employee' })
    @IsString()
    @IsOptional()
    address?: string

    @ApiProperty({ description: 'City of the employee' })
    @IsString()
    @IsOptional()
    city?: string

    @ApiProperty({ description: 'State of the employee' })
    @IsString()
    @IsOptional()
    state?: string

    @ApiProperty({ description: 'Array of contacts', type: [Contacts] })
    @IsOptional()
    contacts?: Contacts[];
}