import React from "react";
import Container from "@material-ui/core/Container";

import ListingsItemList from "../components/Home/ListingsItemList";

export default function ListingScreen() {
  return (
    <Container maxWidth="lg">
      <ListingsItemList />
    </Container>
  );
}
