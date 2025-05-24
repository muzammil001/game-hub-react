import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import type { Genre } from "../services/genre-service";
interface Props {
  onSelectedGenre: (genre: Genre) => void;
}
const GenreList = ({ onSelectedGenre }: Props) => {
  var { data, isloading, error } = useGenres();

  if (error) return null;
  if (isloading) return <Spinner />;
  return (
    <>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize="32px"
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
                onClick={() => onSelectedGenre(genre)}
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
