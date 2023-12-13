import { useAuthContext } from "../../contexts/AuthContext";
import { useGameContext } from "../../contexts/GameContext";
import { Navigate, Outlet, useParams } from "react-router-dom";

export const GameOwner = () => {
  const { getGameFromState } = useGameContext();
  const { gameId } = useParams();
  const { userId } = useAuthContext();
  const currentGame = getGameFromState(gameId);
  if (currentGame && currentGame._ownerId !== userId) {
    return <Navigate to={`/catalog/${gameId}`} replace />;
  }
  return <Outlet />;
};
