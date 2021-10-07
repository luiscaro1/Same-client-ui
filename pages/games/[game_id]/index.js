import React from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { gameActions } from "../../../services/redux/store/actions";
import { getGameById } from "../../../services/redux/store/actions/game";
import { gameSelectors } from "../../../services/redux/store/selectors";

const GameFeed = () => {
  const router = useRouter();
  const { game_id } = router.query;
  const dispatch = useDispatch();
  const currentGame = useSelector(gameSelectors.selectCurrentGame);

  const getGameData = () => {
    if (game_id && !currentGame) dispatch(gameActions.getGameById(game_id));
  };

  React.useEffect(() => {
    getGameData();
  }, [game_id]);

  return <p>{currentGame?.name}</p>;
};

export default GameFeed;
