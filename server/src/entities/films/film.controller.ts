import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { FilmService } from './film.service';
import { Film } from './film.entity';

@Controller('films')
export class FilmController {
  constructor(private readonly filmService: FilmService) {}

  @Get()
  findAll(): Promise<Film[]> {
    return this.filmService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Film> {
    return this.filmService.findOne(+id);
  }

  @Post()
  create(@Body() film: Film): Promise<Film> {
    return this.filmService.create(film);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.filmService.remove(+id);
  }
}
