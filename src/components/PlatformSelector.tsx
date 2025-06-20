import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../stores/gameQueryStore";

const PlatformSelector = () => {
  const setPlatformId = useGameQueryStore((s) => s.setPlatformId);
  const { gameQuery } = useGameQueryStore();

  const platform = usePlatform(gameQuery.platformId);
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {platform?.name || "Platforms"}
        </MenuButton>
        <MenuList>
          {data?.results.map((platform) => (
            <MenuItem
              key={platform.id}
              onClick={() => setPlatformId(platform.id)}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default PlatformSelector;
