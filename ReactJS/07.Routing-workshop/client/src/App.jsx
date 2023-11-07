import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import * as gameService from "./services/gameService";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Catalog from "./components/Catalog/Catalog";
import CreateGame from "./components/CreateGame/CreateGame";
import Register from "./components/Register/Register";

function App() {
  const [games, setGames] = useState([]);
  useEffect(() => {
    gameService.getAll().then((result) => setGames(result));
  }, []);

  return (
    <>
      <div id="box">
        <Header />
        {/* <!-- Main Content --> */}
        <main id="main-content">
          {/* Routes is where are all the components that we want to set route to */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* pass the games which are loaded from the server via the useEffect and saved in the state as games with  setGames */}
            <Route path="/catalog" element={<Catalog games={games} />} />
            <Route path="/create-game" element={<CreateGame />} />

            {/* <CreateGame></CreateGame> */}
            {/* <Register></Register> */}
            {/* <Catalog></Catalog> */}
            {/* <Login /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
