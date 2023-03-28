import React from "react";
import { RouteComponentProps } from "react-router-dom";
import Container from "@material-ui/core/Container";

import OwnNftDetailContainer from "../components/Home/OwnNftDetailContainer";

interface RouteParams {
  id: string;
}

interface MyComponent extends RouteComponentProps<RouteParams> {}

const ListingItems: React.FC<MyComponent> = (props) => {
  return (
    <Container maxWidth="lg">
      <OwnNftDetailContainer />;
    </Container>
  );
};

export default ListingItems;
