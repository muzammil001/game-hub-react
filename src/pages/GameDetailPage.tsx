import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import ExpandableText from "../components/ExpandableText";
import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import GameAttribute from "../components/GameAttribute";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);
  if (isLoading) return <Spinner />;
  if (error || !game) throw error;
  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
        <GridItem>
          <Heading>{game.name}</Heading>
          <ExpandableText>{game.description_raw}</ExpandableText>
          <GameAttribute game={game}></GameAttribute>
        </GridItem>
        <GridItem>
          <GameTrailer gameId={game.id}></GameTrailer>
          <GameScreenshots gameId={game.id} />
        </GridItem>
      </SimpleGrid>
    </>
  );
};
export default GameDetailPage;
