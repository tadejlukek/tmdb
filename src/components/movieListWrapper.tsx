"use client";

import { useState } from "react";

import Filters from "@/components/filters";
import MovieList from "@/components/movieList";
import getPopularMovies from "@/actions/getPopularMovies";
import { MovieType } from "@/types/movie";
import { GenreType } from "@/types/genre";
import { TMDBQueryParameters } from "@/types/query";

type Props = {
  initialPage: number;
  initialMovies: MovieType[];
  initialGenres: GenreType[];
};

export default function MovieListWrapper({
  initialPage,
  initialMovies,
  initialGenres,
}: Props) {
  const [movies, setMovies] = useState<MovieType[]>(initialMovies);
  const [genres, setGenres] = useState<GenreType[]>(initialGenres);

  const [page, setPage] = useState<number>(initialPage);
  const [filters, setFilters] = useState<TMDBQueryParameters>({
    with_genres: "",
  });
  const [autoload, setAutoload] = useState<boolean>(false);

  const applyFilters = async (localFilters: TMDBQueryParameters) => {
    setFilters(localFilters);

    const newMovies = await getPopularMovies(1, localFilters);

    setMovies(newMovies);
    setPage(1);
    setAutoload(false);
  };

  const loadMore = async () => {
    const newMovies = await getPopularMovies(page + 1, filters);

    setMovies([...movies, ...newMovies]);
    setPage(page + 1);
    setAutoload(true);
  };

  return (
    <div className="flex gap-7">
      <Filters
        filters={filters}
        setFilters={setFilters}
        applyFilters={applyFilters}
        genres={genres}
      />
      <MovieList movies={movies} autoload={autoload} loadMore={loadMore} />
    </div>
  );
}
