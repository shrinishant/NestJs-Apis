import { ArrayMaxSize, ArrayMinSize, IsEmail, IsMobilePhone, IsNotEmpty, IsString } from "class-validator"


class Contacts {

    @IsNotEmpty()
    isPrimary: string

    @IsString()
    @IsNotEmpty()
    emergencyContact: string

    @IsMobilePhone()
    @IsNotEmpty()
    phoneNumber: string

    @IsString()
    @IsNotEmpty()
    relationship: string
}
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

    @IsNotEmpty()
    @ArrayMaxSize(2)
    @ArrayMinSize(2)
    contacts: Contacts[]
}