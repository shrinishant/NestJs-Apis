import { IsEmail, IsMobilePhone, IsOptional, IsString } from "class-validator"

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
    address?: string

    @IsString()
    city?: string

    @IsString()
    state?: string
}