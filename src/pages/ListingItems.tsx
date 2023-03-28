import React from "react";
import { RouteComponentProps } from "react-router-dom";
import Container from "@material-ui/core/Container";

import NftDetailContainer from "../components/Home/NftDetailContainer";

interface RouteParams {
  id: string;
}

interface MyComponent extends RouteComponentProps<RouteParams> {}

const ListingItems: React.FC<MyComponent> = (props) => {
  return (
    <Container maxWidth="lg">
      <NftDetailContainer />;
    </Container>
  );
};

export default ListingItems;
