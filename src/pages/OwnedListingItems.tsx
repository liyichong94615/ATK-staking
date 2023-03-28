import React from "react";
import { RouteComponentProps } from "react-router-dom";
import Container from "@material-ui/core/Container";

import OwnedNftDetailContainer from "../components/Home/OwnedNftDetailContainer";

interface RouteParams {
  id: string;
}

interface MyComponent extends RouteComponentProps<RouteParams> {}

const OwnedListingItems: React.FC<MyComponent> = (props) => {
  return (
    <Container maxWidth="lg">
      <OwnedNftDetailContainer />;
    </Container>
  );
};

export default OwnedListingItems;
