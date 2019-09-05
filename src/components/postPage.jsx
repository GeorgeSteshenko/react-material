import React from "react";
import { Container, Button } from "@material-ui/core";

const PostPage = ({ match, history }) => {
  return (
    <Container>
      <h1>Post Page {match.params.id}</h1>

      <Button
        variant="contained"
        color="primary"
        onClick={() => history.push("/posts")}
      >
        Back
      </Button>
    </Container>
  );
};

export default PostPage;
