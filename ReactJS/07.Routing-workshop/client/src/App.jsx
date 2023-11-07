import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Catalog from "./components/Catalog/Catalog";
import CreateGame from "./components/CreateGame/CreateGame";
import Register from "./components/Register/Register";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="box">
        <Header />
        {/* <!-- Main Content --> */}
        <main id="main-content">
          <Home />
          {/* <CreateGame></CreateGame> */}
          {/* <Register></Register> */}
          {/* <Catalog></Catalog> */}
          {/* <Login /> */}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
