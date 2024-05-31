import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private readonly movieRepository: Repository<Movie>,
  ) {}

  async create(createMovieDto: CreateMovieDto): Promise<Movie> {
    const movie = await this.movieRepository.save(createMovieDto);
    return movie;
  }

  async findAll(): Promise<Movie[] | []> {
    return await this.movieRepository.find();
  }

  async findOne(id: number): Promise<Movie | undefined> {
    return await this.movieRepository.findOneBy({ id });
  }

  async update(id: number, updateMovieDto: UpdateMovieDto): Promise<boolean> {
    const result = await this.movieRepository.update(id, {
      ...updateMovieDto,
    });

    return result.affected === 1;
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.movieRepository.delete(id);
    if (result.affected === 1) {
      return true;
    }
    return false;
  }
}
