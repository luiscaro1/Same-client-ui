import React from "react";
import { Grid, Card, CardContent, Avatar, Typography } from "@mui/material";
import useStyles from "./_style";
import { MEDIA_STREAM } from "../../../constants";

import { useSelector } from "react-redux";
import { gameSelectors } from "../../../services/redux/store/selectors";

const PostsTab = () => {
  const classes = useStyles();

  const posts = useSelector(gameSelectors.selectUserPosts);

  return (
    <Grid className={classes.lfgList} spacing={3} container direction="column">
      {posts?.map((post) => (
        <Grid item key={post.pid} container justifyContent="center">
          <Card className={classes.postCard}>
            <CardContent>
              <Grid container direction="column" spacing={2}>
                <Grid container item spacing={2}>
                  <Grid item>
                    <Avatar src={MEDIA_STREAM + post?.avatar_url}></Avatar>
                  </Grid>

                  <Grid
                    item
                    xs
                    container
                    direction="column"
                    justifyContent="center"
                  >
                    <Typography variant="caption">{post?.user_name}</Typography>
                  </Grid>
                </Grid>

                <Grid
                  item
                  container
                  xs
                  direction="column"
                  justifyContent="center"
                >
                  <Typography variant="body2">{post.text}</Typography>
                </Grid>

                <Grid
                  item
                  container
                  alignItems="center"
                  justifyContent="center"
                >
                  {post.attachments?.length > 0 ? (
                    <Grid item className={classes.postImage}>
                      <img
                        style={{ width: "100%" }}
                        src={
                          "http://localhost:5002/stream/" +
                          post?.attachments?.[0]?.filename
                        }
                      />
                    </Grid>
                  ) : null}
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default PostsTab;
