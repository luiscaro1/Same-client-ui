import React from "react";
import Button from "@mui/material/Button";
import { authActions } from "./services/redux/store/actions";
import { authSelectors } from "./services/redux/store/selectors";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();

  const token = useSelector(authSelectors.selectToken);

  const login = async () => {
    await dispatch(authActions.login("<Pass credentials here>"));
  };

  return (
    <div>
      <p>{token} </p>
      <Button onClick={login} variant="contained">
        Hello World
      </Button>
    </div>
  );
}
