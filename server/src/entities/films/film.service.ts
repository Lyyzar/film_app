import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Film } from './film.entity';

@Injectable()
export class FilmService {
  constructor(
    @InjectRepository(Film)
    private readonly filmRepository: Repository<Film>,
  ) {}

  findAll(): Promise<Film[]> {
    return this.filmRepository.find();
  }

  findOne(id: number): Promise<Film> {
    return this.filmRepository.findOne({ where: { id } });
  }

  create(film: Film): Promise<Film> {
    return this.filmRepository.save(film);
  }

  async remove(id: number): Promise<void> {
    await this.filmRepository.delete(id);
  }
}
