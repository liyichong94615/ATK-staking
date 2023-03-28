import React from "react";
import Container from "@material-ui/core/Container";

import TopContainer from "../components/Home/TopContainer";
import ItemList from "../components/Home/ItemList";

export default function LandPlotsScreen() {
  return (
    <Container maxWidth="lg">
      <TopContainer />
      <ItemList />
    </Container>
  );
}
