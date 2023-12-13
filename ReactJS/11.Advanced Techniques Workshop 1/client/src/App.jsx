import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Catalog from "./components/Catalog/Catalog";
import CreateGame from "./components/CreateGame/CreateGame";
import Register from "./components/Register/Register";
import Details from "./components/Details/Details";
import Logout from "./components/Logout/Logout";
import { useService } from "./hooks/useService";
import { AuthProvider } from "./contexts/AuthContext";
import { GameProvider } from "./contexts/GameContext";
import Edit from "./components/Edit/Edit";
import { RouteGuard } from "./components/common/RouteGuard";

function App() {
  return (
    <AuthProvider>
      <GameProvider>
        <div id="box">
          <Header />
          {/* <!-- Main Content --> */}
          <main id="main-content">
            {/* Routes is where are all the components that we want to set route to  */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              {/* todo */}
              <Route path="/register" element={<Register />} />
              {/* pass the games which are loaded from the server via the useEffect and saved in the state as games with  setGames */}
              <Route path="/catalog" element={<Catalog />} />

              {/* see RouteGuard component */}
              <Route path="/catalog/:gameId" element={<Details />} />
              <Route element={<RouteGuard />}>
                <Route path="/create-game" element={<CreateGame />} />
                <Route path="/catalog/:gameId/edit" element={<Edit />} />
                <Route path="/logout" element={<Logout />} />
              </Route>
            </Routes>
          </main>
          <Footer />
        </div>
      </GameProvider>
    </AuthProvider>
  );
}

export default App;
