"use client";

import Image from "next/image";

import Rating from "@/components/rating";
import formatDate from "@/utils/formatDate";
import { MovieType } from "@/types/movie";

export default function Movie(movie: MovieType) {
  const movieLink = `https://www.themoviedb.org/movie/${movie.id}`;

  return (
    <div className="rounded-lg border border-tmdb-lightgray shadow-tmdb overflow-hidden">
      <a href={movieLink}>
        <Image className="w-full" src={movie.poster} alt={movie.title} width={342} height={513} />
      </a>

      <div className="relative pt-[26px] px-[10px] pb-[12px]">
        <Rating value={movie.voteAverage} />

        <a className="font-bold text-black hover:text-tmdb-lightblue" href={movieLink}>
          <h2>{movie.title}</h2>
        </a>

        <p className="text-base text-tmdb-darkgray">
          {formatDate(movie.releaseDate)}
        </p>
      </div>
    </div>
  );
}
