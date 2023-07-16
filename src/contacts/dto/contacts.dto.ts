import { IsBoolean, IsInt, IsMobilePhone, IsNotEmpty, IsNumber, IsString, isBoolean } from "class-validator"

export class ContactsDto {

    @IsNotEmpty()
    isPrimary?: string

    @IsString()
    @IsNotEmpty()
    emergencyContact: string

    @IsMobilePhone()
    @IsNotEmpty()
    phoneNumber: string

    @IsString()
    @IsNotEmpty()
    relationship: string

    @IsNotEmpty()
    employeeId: number
}