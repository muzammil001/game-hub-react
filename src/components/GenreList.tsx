import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  var { data } = useGenres();

  return (
    <>
      <List>
        {data.map((x) => (
          <ListItem key={x.id} paddingY="5px">
            <HStack>
              <Image
                src={getCroppedImageUrl(x.image_background)}
                boxSize="32px"
                borderRadius={8}
              ></Image>
              <Text fontSize="lg">{x.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
