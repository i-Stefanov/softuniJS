import Footer from "./components/Footer";
import Header from "./components/Header";
import Search from "./components/Search";
import "./App.css";
import UserList from "./components/UserList";
import * as userService from "./services/userService";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
  });
  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
  });
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
  const onUserCreateSubmit = async (e) => {
    // prevent form submit to reload page
    e.preventDefault();
    // get data from the form
    const formData = new FormData(e.currentTarget);
    // transform the data in object
    const data = Object.fromEntries(formData);
    // send ajax request to the server
    const createdUser = await userService.create(data);
    // if successful - add new user to the state
    if (createdUser) {
      setUsers((state) => [...state, createdUser]);
    }
    // close modal
  };
  const onUserUpdateSubmit = async (e, userId) => {
    // prevent form submit to reload page
    e.preventDefault();
    // get data from the form
    const formData = new FormData(e.currentTarget);
    // transform the data in object
    const data = Object.fromEntries(formData);
    // send ajax request to the server
    const updatedUser = await userService.update(userId, data);
    // if the id matches any id of the state array (users) switch this user with the updatedUser
    setUsers((state) =>
      state.map((user) => (user._id === userId ? updatedUser : user))
    );

    // close modal
  };
  const onUserDelete = async (userId) => {
    //delete from server
    await userService.del(userId);
    //delete from state
    // using filter method because it creates a new reference and doesn't mutate the original array
    setUsers((state) => state.filter((user) => user._id !== userId));
  };
  const formChangeHandler = (e) => {
    setFormValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  };
  const validateForm = (e) => {
    const value = e.target.value;
    const errors = {};
    if (
      e.target.name == "firstName" &&
      (value.length < 3 || value.length > 20)
    ) {
      errors.firstName = "First name should be between 3 and 20 characters.";
    }
    if (
      e.target.name == "lastName" &&
      (value.length < 3 || value.length > 20)
    ) {
      errors.lastName = "Last name should be between 3 and 20 characters.";
    }
    setFormErrors(errors);
  };
  return (
    <>
      <Header />
      <main className="main">
        <section className="card users-container">
          <Search />
          <UserList
            users={users}
            formValues={formValues}
            onUserCreateSubmit={onUserCreateSubmit}
            onUserUpdateSubmit={onUserUpdateSubmit}
            onUserDelete={onUserDelete}
            formChangeHandler={formChangeHandler}
            formErrors={formErrors}
            validateForm={validateForm}
          />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
