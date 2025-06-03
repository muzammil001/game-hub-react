import { useParams } from "react-router-dom";

const GameDetailPage = () => {
  const params = useParams();

  return (
    <>
      <p>Game Id : {params.id}</p>
    </>
  );
};
export default GameDetailPage;
