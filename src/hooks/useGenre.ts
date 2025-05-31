import useGenres from "./useGenres";

const useGenre = (genreId?: number) => {
  const { data } = useGenres();
  return data.results.find((x) => x.id == genreId);
};

export default useGenre;
