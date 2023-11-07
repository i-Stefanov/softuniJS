import { Routes, Route } from "react-router-dom";
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
          {/* Routes is where are all the components that we want to set route to */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/creategame" element={<CreateGame />} />

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
