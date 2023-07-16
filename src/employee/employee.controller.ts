import { Body, Controller, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Contacts, EmployeeDto, UpdateEmployeeDto } from './dto';

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

    @Put('/update/:id')
    update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateEmployeeDto){
        return this.employeeService.update(id, dto)
    }
}