import { ApiProperty } from "@nestjs/swagger"
import { ArrayMaxSize, ArrayMinSize, IsEmail, IsMobilePhone, IsNotEmpty, IsString } from "class-validator"


class Contacts {

    @ApiProperty({ description: 'Is this contact the primary contact?', default: false })
    @IsNotEmpty()
    isPrimary: string

    @ApiProperty({ description: 'Emergency contact name' })
    @IsString()
    @IsNotEmpty()
    emergencyContact: string

    @ApiProperty({ description: 'Phone number', example: '+1234567890' })
    @IsMobilePhone()
    @IsNotEmpty()
    phoneNumber: string

    @ApiProperty({ description: 'Relationship with the employee', example: 'Friend' })
    @IsString()
    @IsNotEmpty()
    relationship: string
}
export class EmployeeDto {

    @ApiProperty({ description: 'Full name of the employee' })
    @IsString()
    @IsNotEmpty()
    fullName: string

    @ApiProperty({ description: 'Job title of the employee' })
    @IsString()
    @IsNotEmpty()
    jobTitle: string

    @ApiProperty({ description: 'Phone number of the employee', example: '+9876543210' })
    @IsMobilePhone()
    @IsNotEmpty()
    phoneNumber: string

    @ApiProperty({ description: 'Email address of the employee', example: 'john.doe@example.com' })
    @IsEmail()
    @IsNotEmpty()
    email: string

    @ApiProperty({ description: 'Address of the employee' })
    @IsString()
    address: string

    @ApiProperty({ description: 'City of the employee' })
    @IsString()
    city: string

    @ApiProperty({ description: 'State of the employee' })
    @IsString()
    state: string

    @ApiProperty({ description: 'Array of contacts', type: [Contacts] })
    @IsNotEmpty()
    @ArrayMaxSize(2)
    @ArrayMinSize(2)
    contacts: Contacts[]
}