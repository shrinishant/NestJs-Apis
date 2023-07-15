import { Body, Controller, Post } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeDto } from './dto';

@Controller('employee')
export class EmployeeController {
    constructor(private employeeService: EmployeeService){}

    @Post('create')
    create(@Body() dto: EmployeeDto){
        console.log({
            dto
        })
        return this.employeeService.create(dto)
    }
}
