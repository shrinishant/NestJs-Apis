import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
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

    @Get('/all')
    getEmployees(
        @Query('page', new ParseIntPipe({optional: true})) page: number = 1,
        @Query('pageSize', new ParseIntPipe({optional: true})) pageSize: number = 10
    ){
        return this.employeeService.getEmployees(page, pageSize)
    }

    @Put('/update/:id')
    update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateEmployeeDto){
        return this.employeeService.update(id, dto)
    }

    @Get(':id')
    getEmployeeById(@Param('id', ParseIntPipe) id: number){
        return this.employeeService.getEmployeeById(id)
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number){
        return this.employeeService.delete(id)
    }
}