import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../stores/gameQueryStore";

const GenreList = () => {
  const setGenreId = useGameQueryStore((s) => s.setGenreId);
  const { data, error, isLoading } = useGenres();
  const { gameQuery } = useGameQueryStore();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data?.results?.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize="32px"
                objectFit={"cover"}
                borderRadius={8}
              ></Image>
              <Button
                height={[`${genre.name.length > 30 ? "60px" : "40px"}`, "40px"]}
                style={{
                  whiteSpace: "normal",
                  wordWrap: "break-word",
                }}
                variant="link"
                fontSize="lg"
                fontWeight={genre.id === gameQuery.genreId ? "bold" : "normal"}
                onClick={() => setGenreId(genre.id)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
