import useGenres from "../hooks/useGenres";

const GenreList = () => {
  var { error, genres, isloading } = useGenres();

  return (
    <>
      <ul>
        {genres.map((x) => (
          <li key={x.id}>{x.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
