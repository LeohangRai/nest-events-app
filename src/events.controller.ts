import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('events')
export class EventsController {
    @Get()
    findAll() {
        return 'all events';
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return id;
    }

    @Post()
    create(@Body() body) {
        return body;
    }

    @Patch(':id')
    update(@Param('id') id: string) {
        return id;
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return id;
    }
}