import { IsEmail, IsMobilePhone, IsNotEmpty, IsString } from "class-validator"

export class EmployeeDto {

    @IsString()
    @IsNotEmpty()
    fullName: string

    @IsString()
    @IsNotEmpty()
    jobTitle: string

    @IsMobilePhone()
    @IsNotEmpty()
    phoneNumber: string

    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsString()
    address: string

    @IsString()
    city: string

    @IsString()
    state: string
}