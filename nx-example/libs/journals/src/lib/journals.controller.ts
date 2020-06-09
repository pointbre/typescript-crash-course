import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { JournalsService } from './journals.service';
import { JournalEntry } from '@nx-example/types';


@Controller('journals')
export class JournalsController {
  constructor(private readonly jornalService: JournalsService) {}

  @Get()
  getData() {
    return this.jornalService.getData();
  }
 
  @Post()
  create(@Body() body: JournalEntry) {
    return this.jornalService.create(body);
  }
 
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.jornalService.delete(id);
  }
}


