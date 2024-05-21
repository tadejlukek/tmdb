"use client";

import { useEffect, useState } from "react";

import ToggleButton from "@/components/primitives/toggleButton";
import Button from "@/components/primitives/button";
import useObserver from "@/hooks/useObserver";
import { TMDBQueryParameters } from "@/types/query";
import { GenreType } from "@/types/genre";
import Accordion from "./primitives/filterAccordion";

type Props = {
  filters: TMDBQueryParameters;
  setFilters: React.Dispatch<React.SetStateAction<TMDBQueryParameters>>;
  applyFilters: (localFilters: TMDBQueryParameters) => void;
  genres: GenreType[];
};

export default function Filters({
  filters,
  setFilters,
  applyFilters,
  genres,
}: Props) {
  const [localFilters, setLocalFilters] =
    useState<TMDBQueryParameters>(filters);
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);
  const [canApplyFilters, setCanApplyFilters] = useState<boolean>(false);

  const [floatingSearch, setFloatingSearch] = useState<boolean>(false);

  const searchRef = useObserver({
    enter: () => setFloatingSearch(false),
    exit: () => setFloatingSearch(true),
  });

  const updateSelectedGenres = (genre: GenreType) => {
    setSelectedGenres((prev: number[]) => {
      const newSelectedGenres = prev.includes(genre.id)
        ? prev.filter((selectedGenre) => selectedGenre !== genre.id)
        : [...prev, genre.id];

      setLocalFilters((prev: TMDBQueryParameters) => ({
        ...prev,
        with_genres: newSelectedGenres.join("|"),
      }));

      return newSelectedGenres;
    });
  };

  useEffect(() => {
    setCanApplyFilters(filters.with_genres !== selectedGenres.join("|"));
  }, [filters, selectedGenres]);

  return (
    <div className="min-w-[260px] w-[260px]">
      <Accordion title="Filters">
        <p className="mb-2 font-light">Genres</p>
        <div className="flex flex-wrap gap-2">
          {genres.map((genre, index) => (
            <ToggleButton
              size="small"
              rounding="large"
              onPress={() => updateSelectedGenres(genre)}
              isSelected={selectedGenres.includes(genre.id)}
              key={index}
            >
              {genre.name}
            </ToggleButton>
          ))}
        </div>
      </Accordion>

      <Button
        className="mt-5"
        variant="secondary"
        size="medium"
        rounding="large"
        fill
        isDisabled={!canApplyFilters}
        onPress={() => canApplyFilters && applyFilters(localFilters)}
        ref={searchRef}
      >
        Search
      </Button>

      {floatingSearch && canApplyFilters && (
        <Button
          className="fixed left-0 bottom-0 right-0 z-[999]"
          variant="secondary"
          size="medium"
          rounding="none"
          fill
          onPress={() => canApplyFilters && applyFilters(localFilters)}
        >
          Search
        </Button>
      )}
    </div>
  );
}
