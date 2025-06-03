import { Grid, GridItem, HStack } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" " main"`,
        }}
      >
        <GridItem area="nav">
          <HStack justifyContent="space-between" padding="10px">
            <NavBar />
          </HStack>
        </GridItem>
        <GridItem area={"main"}>
          <Outlet />
        </GridItem>
      </Grid>
    </>
  );
};

export default Layout;
