import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import * as gameService from "./services/gameService";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Catalog from "./components/Catalog/Catalog";
import CreateGame from "./components/CreateGame/CreateGame";
import Register from "./components/Register/Register";
import Details from "./components/Details/Details";
import { AuthContext } from "./contexts/AuthContext";

function App() {
  // hook that comes from the react router
  const navigate = useNavigate();
  const [games, setGames] = useState([]);
  const [auth, setAuth] = useState({});
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
  const onLoginSubmit = async (data) => {
    const result = await fetch();
  };

  return (
    <AuthContext.Provider value={{ onLoginSubmit }}>
      <div id="box">
        <Header />
        {/* <!-- Main Content --> */}
        <main id="main-content">
          {/* Routes is where are all the components that we want to set route to  */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* pass the games which are loaded from the server via the useEffect and saved in the state as games with  setGames */}
            <Route path="/catalog" element={<Catalog games={games} />} />
            <Route
              path="/create-game"
              element={<CreateGame onCreateGameSubmit={onCreateGameSubmit} />}
            />
            <Route path="/catalog/:gameId" element={<Details />} />

            {/* <CreateGame></CreateGame> */}
            {/* <Register></Register> */}
            {/* <Catalog></Catalog> */}
            {/* <Login /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
