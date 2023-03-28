import React from "react";
import Container from "@material-ui/core/Container";

import ProfileTopContainer from "../components/Home/ProfileTopContainer.js";
import ProfileItemList from "../components/Home/ProfileItemList";

export default function ProfileScreen() {
  return (
    <Container maxWidth="lg">
      <ProfileTopContainer />
      <ProfileItemList />
    </Container>
  );
}
