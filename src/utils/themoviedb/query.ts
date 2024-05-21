import "server-only";

import { TMDBQueryParameters } from "@/types/query";

export default async function QueryTMDB<T>(
  route: string,
  parameters: TMDBQueryParameters
): Promise<T> {
  const response = await fetch(
    `${process.env.TMDB_API_URL}/${route}?api_key=${
      process.env.TMDB_API_KEY
    }&${new URLSearchParams(
      Object.entries(parameters).map(([key, value]) => [key, value.toString()])
    )}`
  );

  if (!response.ok)
    throw new Error(`QueryTMDB Failed - ${response.statusText}`);

  return await response.json();
}
