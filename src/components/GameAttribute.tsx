import type { Game } from "../entities/Game";
import CriticScore from "./CriticScore";
import DefinationItem from "./DefinationItem";
import { SimpleGrid, Text } from "@chakra-ui/react";

interface Props {
  game: Game;
}
const GameAttribute = ({ game }: Props) => {
  return (
    <>
      <SimpleGrid columns={2} as={"dl"}>
        <DefinationItem term="Platforms">
          {game.parent_platforms?.map(({ platform }) => (
            <Text key={platform.id}>{platform.name}</Text>
          ))}
        </DefinationItem>

        <DefinationItem term="Metascore">
          <CriticScore score={game.metacritic} />
        </DefinationItem>
        <DefinationItem term="Genres">
          {game.genres?.map((genre) => (
            <Text key={genre.id}>{genre.name}</Text>
          ))}
        </DefinationItem>
        <DefinationItem term="Publishers">
          {game.publishers.map((p) => (
            <Text key={p.id}>{p.name}</Text>
          ))}
        </DefinationItem>
      </SimpleGrid>
    </>
  );
};

export default GameAttribute;
