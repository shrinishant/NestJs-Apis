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

    @IsString()
    @IsOptional()
    fullName?: string

    @IsString()
    @IsOptional()
    jobTitle?: string

    @IsMobilePhone()
    @IsOptional()
    phoneNumber?: string

    @IsEmail()
    @IsOptional()
    email?: string

    @IsString()
    @IsOptional()
    address?: string

    @IsString()
    @IsOptional()
    city?: string

    @IsString()
    @IsOptional()
    state?: string

    @IsOptional()
    contacts?: Contacts[];
}