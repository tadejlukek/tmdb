"use server";

import QueryTMDB from "@/utils/themoviedb/query";
import { TMDBQueryParameters } from "@/types/query";
import { MovieType, TMDBMovieResponseType, TMDBMovieType } from "@/types/movie";

export default async function getPopularMovies(
  page: number = 1,
  filters: TMDBQueryParameters = {}
): Promise<MovieType[]> {
  const data = await QueryTMDB<TMDBMovieResponseType>("discover/movie", {
    page,
    sort_by: "popularity.desc",
    include_adult: false,
    language: "en-US",
    ...filters,
  });

  if (!data.results) {
    console.error("No results found");
    return [];
  }

  return data.results.map(
    (movie: TMDBMovieType): MovieType => ({
      id: movie.id,
      title: movie.title,
      poster: "https://image.tmdb.org/t/p/w342" + movie.poster_path,
      voteAverage: Math.round(movie.vote_average * 10),
      releaseDate: movie.release_date,
    })
  );
}
