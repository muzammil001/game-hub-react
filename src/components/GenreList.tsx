import useGenres from "../hooks/useGenres";

const GenreList = () => {
  var { data } = useGenres();

  return (
    <>
      <ul>
        {data.map((x) => (
          <li key={x.id}>{x.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
