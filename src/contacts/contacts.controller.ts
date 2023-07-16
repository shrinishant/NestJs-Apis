import { Body, Controller, Post } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { ContactsDto } from './dto';

@Controller('contacts')
export class ContactsController {
    constructor(private contactService: ContactsService){}

    @Post('create')
    create(@Body() dto: ContactsDto){
        console.log({
            dto
        })
        return this.contactService.create(dto)
    }
}
