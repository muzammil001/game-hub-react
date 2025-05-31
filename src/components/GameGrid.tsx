import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import type { GameQuery } from "../App";
import InfiniteScroll from "react-infinite-scroll-component";

import React from "react";
interface Props {
  gameQuery: GameQuery | null;
}
const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } =
    useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];
  const fetchedGamesCount = data?.pages?.reduce(
    (acc, page) => acc + page?.results?.length,
    0
  );
  return (
    <>
      {error && <Text>{error.message}</Text>}
      <InfiniteScroll
        dataLength={fetchedGamesCount || 0} // total items loaded
        next={fetchNextPage}
        hasMore={!!hasNextPage} // Boolean from your infinite query
        loader={<Spinner></Spinner>}
        endMessage={<p className="text-center my-3">No more posts</p>}
      >
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={3}>
          {isLoading && skeletons.map((s) => <GameCardSkeleton key={s} />)}
          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results?.map((game) => (
                <GameCard key={game.id} game={game}></GameCard>
              ))}
            </React.Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>
    </>
  );
};

export default GameGrid;
