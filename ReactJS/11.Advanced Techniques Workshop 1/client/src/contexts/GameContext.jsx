import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { gameServiceFactory } from "../services/gameService";

export const GameContext = createContext();
export const GameProvider = ({ children }) => {
  // hook that comes from the react router
  const navigate = useNavigate();
  const [games, setGames] = useState([]);
  const gameService = gameServiceFactory(); //! auth.accessToken
  useEffect(() => {
    gameService.getAll().then((result) => setGames(result));
  }, []);
  const onGameEditSubmit = async (values) => {
    const result = await gameService.edit(values._id, values);
    //todo change state !!!
    // since the game is already in the state in some form and we just want to change some of the data about this game ,we map through the games array and find the one with id that matches the id of the game that we want to change and then replace it in the state
    setGames((state) =>
      state.map((game) => (game._id === values._id ? result : game))
    );
    navigate(`/catalog/${values._id}`);
  };
  const onCreateGameSubmit = async (data) => {
    const newGame = await gameService.create(data);
    // add the newly created game to the state
    setGames((state) => [...state, newGame]);
    // redirect to catalog page use useNavigate from react-router-dom
    navigate("/catalog");
  };
  const getGameFromState = (gameId) => {
    return games.find((game) => game._id === gameId);
  };
  //DELETE the game from the state
  const deleteGame = (gameId) => {
    setGames((games) => games.filter((game) => game._id !== gameId));
  };
  const contextValues = {
    games,
    onGameEditSubmit,
    onCreateGameSubmit,
    getGameFromState,
    deleteGame,
  };

  return (
    <GameContext.Provider value={contextValues}>
      {children}
    </GameContext.Provider>
  );
};
export const useGameContext = () => {
  const context = useContext(GameContext);
  return context;
};
