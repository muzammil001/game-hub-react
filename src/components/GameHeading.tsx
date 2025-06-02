import { Heading } from "@chakra-ui/react";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";
import useGameQueryStore from "../stores/gameQueryStore";

const GameHeading = () => {
  const { gameQuery } = useGameQueryStore();
  const platform = usePlatform(gameQuery.platformId);
  const genre = useGenre(gameQuery.genreId);
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <>
      <Heading as={"h1"} fontSize={"5xl"}>
        {heading}
      </Heading>
    </>
  );
};

export default GameHeading;
