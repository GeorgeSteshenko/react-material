import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button
} from "@material-ui/core";

class Posts extends Component {
  render() {
    const { posts } = this.props;

    return (
      <Container style={{ padding: 30 }}>
        <Grid container spacing={4} justify="center">
          {posts.map(post => (
            <Grid item key={post._id}>
              <Card>
                <CardActionArea component={Link} to={`/posts/${post._id}`}>
                  <CardMedia
                    component="img"
                    alt={post.title}
                    height="140"
                    image={post.image}
                    title={post.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {post.title}
                    </Typography>
                    <Typography component="p">{post.excerpt}</Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    component={Link}
                    to={`/posts/${post._id}`}
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }
}

export default Posts;
