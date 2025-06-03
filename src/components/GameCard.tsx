import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import type { Game } from "../services/game-service";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import GameCardContainer from "./GameCardContainer";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <>
      <GameCardContainer>
        <Card>
          <Image src={getCroppedImageUrl(game.background_image)}></Image>
          <CardBody>
            <Heading fontSize="2xl">
              <Link to={`/games/${game.slug}`}>{game.name}</Link>
            </Heading>
            <HStack justifyContent="space-between">
              <PlatformIconList
                platforms={game.parent_platforms.map((x) => x.platform)}
              ></PlatformIconList>
              <CriticScore score={game.metacritic}></CriticScore>
            </HStack>
          </CardBody>
        </Card>
      </GameCardContainer>
    </>
  );
};

export default GameCard;
