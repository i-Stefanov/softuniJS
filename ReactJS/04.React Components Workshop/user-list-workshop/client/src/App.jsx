import Footer from "./components/Footer";
import Header from "./components/Header";
import Search from "./components/Search";
import "./App.css";
import UserList from "./components/UserList";
import * as userService from "./services/userService";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    userService
      .getAll()
      .then((usersList) => {
        // actualize the users array with all the users returned from the getAll() function
        setUsers(usersList);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); // the empty array means that the function will be executed every time the app reloads
  return (
    <>
      <Header />
      <main className="main">
        <section className="card users-container">
          <Search />
          <UserList />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
