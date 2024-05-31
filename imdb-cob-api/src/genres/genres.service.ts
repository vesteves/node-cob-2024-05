import { Injectable } from '@nestjs/common';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Genre } from './entities/genre.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GenresService {
  constructor(
    @InjectRepository(Genre)
    private readonly genreRepository: Repository<Genre>,
  ) {}

  create(createGenreDto: CreateGenreDto): Promise<Genre> {
    return this.genreRepository.save(createGenreDto);
  }

  async findAll(): Promise<Genre[] | []> {
    return await this.genreRepository.find();
  }

  async findOne(id: number): Promise<Genre | undefined> {
    return await this.genreRepository.findOneBy({ id });
  }

  async update(id: number, updateGenreDto: UpdateGenreDto): Promise<boolean> {
    const result = await this.genreRepository.update(id, updateGenreDto);

    return result.affected === 1;
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.genreRepository.delete({ id });
    return result.affected === 1;
  }
}
