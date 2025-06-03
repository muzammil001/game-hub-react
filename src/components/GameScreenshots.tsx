import useScreenShots from "../hooks/useScreenShots";
import { Image, SimpleGrid } from "@chakra-ui/react";
interface Props {
  gameId: number;
}
const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenShots(gameId);
  if (error) throw error;
  if (isLoading) return null;
  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3}>
        {data.results.map((s) => (
          <Image key={s.id} src={s.image}></Image>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameScreenshots;
