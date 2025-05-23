import { useEffect, useState } from "react";
import genreService, {
  type Genre,
  type FetchGenreResponse,
} from "../services/genre-service";
import { CanceledError } from "axios";

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = genreService.get<FetchGenreResponse>();
    request
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
      });
    return () => cancel();
  }, []);

  return { genres, error, isloading: isLoading };
};

export default useGenres;
