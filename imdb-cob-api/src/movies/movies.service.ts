import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class MoviesService {
  create(createMovieDto: CreateMovieDto): CreateMovieDto {
    return createMovieDto;
  }

  findAll() {
    return `This action returns all movies`;
  }

  findOne(id: number) {
    return `This action returns a #${id} movie`;
  }

  update(id: number, updateMovieDto: UpdateMovieDto) {
    return {
      id,
      data: updateMovieDto,
    };
  }

  remove(id: number) {
    return `This action removes a #${id} movie`;
  }
}