import MovieListWrapper from "@/components/movieListWrapper";
import getPopularMovies from "@/actions/getPopularMovies";
import getMovieFilters from "@/actions/getMovieFilters";

export default async function PopularMovies({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page = searchParams.page ? parseInt(searchParams.page as string) : 1;

  const movies = await getPopularMovies(page);
  const genres = await getMovieFilters();

  return (
    <>
      <h1 className="mb-4 text-2xl font-semibold">Popular Movies</h1>
      
      <MovieListWrapper
        initialPage={page}
        initialMovies={movies}
        initialGenres={genres}
      />
    </>
  );
}
