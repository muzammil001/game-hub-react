import { Heading } from "@chakra-ui/react";
import type { GameQuery } from "../App";
import platforms from "../data/platforms";
import genre from "../data/genre";
interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const platformName =
    platforms.find((x) => x.id == gameQuery.platformId)?.name || "";
  const genreName = genre.find((x) => x.id == gameQuery.genreId)?.name || "";
  const heading = `${platformName} ${genreName} Games`;
  return (
    <>
      <Heading as={"h1"} fontSize={"5xl"}>
        {heading}
      </Heading>
    </>
  );
};

export default GameHeading;
