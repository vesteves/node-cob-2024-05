'use client';

import { getMovies, storeMovie } from '@/services';
import { useEffect, useState } from 'react';

export const IntegrationAPI = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const result = await getMovies();
    setMovies(result);
  };

  const submitMovie = () => {
    const data = {
      adult: false,
      backdrop_path: '/xRd1eJIDe7JHO5u4gtEYwGn5wtf.jpg',
      original_language: 'en',
      original_title: 'A Origem',
      overview:
        'Following their explosive showdown, Godzilla and Kong must reunite against a colossal undiscovered threat hidden within our world, challenging their very existence – and our own.',
      popularity: 5236,
      poster_path: '/z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg',
      release_date: '2024-03-27',
      title: 'Godzilla x Kong: The New Empire',
      video: false,
      vote_average: 7284,
      vote_count: 123,
    };

    storeMovie(data);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <ul>
        {movies &&
          movies.map((movie: any) => {
            return <li key={movie.id}>- {movie.original_title}</li>;
          })}
      </ul>

      <button onClick={() => submitMovie()}>Vai!</button>
    </div>
  );
};
