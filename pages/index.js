import React from "react";
import useStyles from "./_style";

export default function Home() {
  const classes = useStyles();

  const dispatch = useDispatch();

  return <div className={classes.root}>HHome Page</div>;
}
