import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { CreateEventDto } from './create-event.dto';
import { UpdateEventDto } from './update-events.dto';

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
    create(@Body() body: CreateEventDto) {
        return body;
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() body: UpdateEventDto
    ) {
        return id;
    }

    @Delete(':id')
    @HttpCode(204)
    delete(@Param('id') id: string) {
        return id;
    }
}