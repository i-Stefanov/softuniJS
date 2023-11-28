import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { gameServiceFactory } from "./services/gameService";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Catalog from "./components/Catalog/Catalog";
import CreateGame from "./components/CreateGame/CreateGame";
import Register from "./components/Register/Register";
import Details from "./components/Details/Details";
import Logout from "./components/Logout/Logout";
import { AuthProvider } from "./contexts/AuthContext";
import { useService } from "./hooks/useService";
import Edit from "./components/Edit/Edit";
import { RouteGuard } from "./components/common/RouteGuard";

function App() {
  // hook that comes from the react router
  const navigate = useNavigate();
  const [games, setGames] = useState([]);
  const gameService = gameServiceFactory(); //! auth.accessToken
  useEffect(() => {
    gameService.getAll().then((result) => setGames(result));
  }, []);
  const onCreateGameSubmit = async (data) => {
    const newGame = gameService.create(data);
    // add the newly created game to the state
    setGames((state) => [...state, newGame]);
    // redirect to catalog page use useNavigate from react-router-dom
    navigate("/catalog");
  };

  const onGameEditSubmit = async (values) => {
    const result = await gameService.edit(values._id, values);
    //todo change state !!!
    // since the game is already in the state in some form and we just want to change some of the data about this game ,we map through the games array and find the one with id that matches the id of the game that we want to change and then replace it in the state
    setGames((state) =>
      state.map((game) => (game._id === values._id ? result : game))
    );
    navigate(`/catalog/${values._id}`);
  };

  return (
    <AuthProvider>
      <div id="box">
        <Header />
        {/* <!-- Main Content --> */}
        <main id="main-content">
          {/* Routes is where are all the components that we want to set route to  */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            {/* todo */}
            <Route path="/logout" element={<Logout />} />
            <Route path="/register" element={<Register />} />
            {/* pass the games which are loaded from the server via the useEffect and saved in the state as games with  setGames */}
            <Route path="/catalog" element={<Catalog games={games} />} />

            <Route
              path="/create-game"
              element={
                <RouteGuard>
                  <CreateGame onCreateGameSubmit={onCreateGameSubmit} />
                </RouteGuard>
              }
            />
            <Route path="/catalog/:gameId" element={<Details />} />
            <Route
              path="/catalog/:gameId/edit"
              element={<Edit onGameEditSubmit={onGameEditSubmit} />}
            />

            {/* <CreateGame></CreateGame> */}
            {/* <Register></Register> */}
            {/* <Catalog></Catalog> */}
            {/* <Login /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
