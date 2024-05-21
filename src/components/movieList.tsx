"use client";

import Movie from "@/components/movie";
import useObserver from "@/hooks/useObserver";
import { MovieType } from "@/types/movie";
import Button from "./primitives/button";

type Props = {
  movies: MovieType[];
  autoload: boolean;
  loadMore: () => void;
};

export default function MovieList({ movies, autoload, loadMore }: Props) {
  let moviesLimit = 500;

  const loadMoreRef = useObserver({ enter: loadMore, condition: autoload });

  return (
    <div className="flex flex-col mb-8">
      <div className="grid gap-7 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {movies.map((movie, index) => (
          <Movie key={index} {...movie} />
        ))}
      </div>

      {movies.length < (moviesLimit * 20) && (
        <Button className="mt-8" onPress={loadMore} ref={loadMoreRef}>
          Load More
        </Button>
      )}
    </div>
  );
}
