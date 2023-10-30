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
        console.log("userlist set");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); // the empty array means that the function will be executed every time the app reloads
  const onUserCreateSubmit = async (e) => {
    // prevent form submit to reload page
    e.preventDefault();
    // get data from the form
    const formData = new FormData(e.currentTarget);
    // transform the data in object
    const data = Object.fromEntries(formData);
    // send ajax request to the server
    const createdUser = await userService.create(data);
    console.log(createdUser);
    // if successful - add new user to the state
    if (createdUser) {
      setUsers((state) => [...state, createdUser]);
    }
    // close modal
  };
  const onUserDelete = async (userId) => {
    //delete from server
    await userService.del(userId);
    //delete from state
    // using filter method because it creates a new reference and doesn't mutate the original array
    setUsers((state) => state.filter((user) => user._id !== userId));
  };
  return (
    <>
      <Header />
      <main className="main">
        <section className="card users-container">
          <Search />
          <UserList
            users={users}
            onUserCreateSubmit={onUserCreateSubmit}
            onUserDelete={onUserDelete}
          />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
