"use server";

import QueryTMDB from "@/utils/themoviedb/query";

import { GenreType, TMDBGenreResponseType } from "@/types/genre";

export default async function getMovieFilters(): Promise<GenreType[]> {
  const data = await QueryTMDB<TMDBGenreResponseType>("genre/movie/list", {
    language: "en",
  });

  if (!data.genres) {
    console.error("No genres found");
    return [];
  }

  return data.genres.map(
    (genre: GenreType): GenreType => ({
      id: genre.id,
      name: genre.name,
    })
  );
}
