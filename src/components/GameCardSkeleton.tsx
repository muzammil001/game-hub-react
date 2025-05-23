import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import GameCardContainer from "./GameCardContainer";

const GameCardSkeleton = () => {
  return (
    <>
      <GameCardContainer>
        <Card borderRadius={10} width="300px" overflow="hidden">
          <Skeleton height="200px" />
          <CardBody>
            <SkeletonText />
          </CardBody>
        </Card>
      </GameCardContainer>
    </>
  );
};

export default GameCardSkeleton;
