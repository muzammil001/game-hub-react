import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const GameCardContainer = ({ children }: Props) => {
  return (
    <>
      <Box
        borderRadius={10}
        overflow="hidden"
        margin={2}
        _hover={{
          transform: "scale(1.03)",
          transition: "tranform .15s ease-in",
        }}
      >
        {children}
      </Box>
    </>
  );
};
export default GameCardContainer;
