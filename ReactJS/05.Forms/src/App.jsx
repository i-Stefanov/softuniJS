import { useState } from "react";
import "./App.css";

function App() {
  const [hobbies, setHobby] = useState({});
  const [formValues, setFormValues] = useState({
    username: "Pensho",
    cardNumber: "",
    occupation: "rnd",
    age: "",
    gender: "male",
    bio: "",
  });
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  const onChangeHandler = (e) => {
    e.preventDefault();
    setFormValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const onHobbiesChange = (e) => {
    setHobby((state) => ({ ...state, [e.target.value]: e.target.checked }));
  };
  return (
    <>
      <header className="app-header">
        <h1>React forms</h1>
        <form onSubmit={onSubmitHandler}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              value={formValues.username}
              onChange={onChangeHandler}
            />
          </div>
          <div>
            <label htmlFor="username">Age</label>
            <input
              type="number"
              name="age"
              id="age"
              // if age == undefined or null value = ''
              value={formValues.age === "" ? "" : Number(formValues.age)}
              onChange={onChangeHandler}
            />
          </div>
          {Number(formValues.age) >= 18 && (
            <div>
              <label htmlFor="credit-card">Credir card</label>
              <input
                type="text"
                name="creditCard"
                id="credit-card"
                value={formValues.cardNumber ?? ""}
                onChange={onChangeHandler}
              />
            </div>
          )}
          <div>
            <label htmlFor="occupation"></label>
            <select
              name="occupation"
              id="occupation"
              value={formValues.occupation}
              onChange={onChangeHandler}
            >
              <option value="devops">DevOps</option>
              <option value="rnd">RnD</option>
              <option value="hr">HR</option>
            </select>
          </div>
          <div>
            <label htmlFor="male">Male</label>
            <input
              type="radio"
              name="gender"
              id="male"
              value="male"
              onChange={onChangeHandler}
              checked={formValues.gender == "male"}
            />
            <label htmlFor="female">Female</label>
            <input
              type="radio"
              name="gender"
              id="female"
              value="female"
              onChange={onChangeHandler}
              checked={formValues.gender == "female"}
            />
          </div>
          <div>
            <label htmlFor="bio"></label>
            <textarea
              name="bio"
              id="bio"
              cols="30"
              rows="10"
              onChange={onChangeHandler}
            ></textarea>
          </div>
          <div>
            <label htmlFor="hiking">Hiking</label>
            <input
              type="checkbox"
              name="hobbies"
              id="hiking"
              value="hiking"
              onChange={onHobbiesChange}
              checked={hobbies["hiking"]}
            />
            <label htmlFor="gaming">Gaming</label>
            <input
              type="checkbox"
              name="hobbies"
              id="gaming"
              value="gaming"
              onChange={onHobbiesChange}
              checked={hobbies["gaming"]}
            />
            <label htmlFor="siteseeing">Siteseeing</label>
            <input
              type="checkbox"
              name="hobbies"
              id="siteseeing"
              value="siteseeing"
              onChange={onHobbiesChange}
              checked={hobbies["siteseeing"]}
            />
            <label htmlFor="programming">Programming</label>
            <input
              type="checkbox"
              name="hobbies"
              id="programming"
              value="programming"
              onChange={onHobbiesChange}
              checked={hobbies["programming"]}
            />
            <label htmlFor="carpentry">Carpentry</label>
            <input
              type="checkbox"
              name="hobbies"
              id="carpentry"
              value="carpentry"
              onChange={onHobbiesChange}
              checked={hobbies["carpentry"]}
            />
            <label htmlFor="gardening">Gardening</label>
            <input
              type="checkbox"
              name="hobbies"
              id="gardening"
              value="gardening"
              onChange={onHobbiesChange}
              checked={hobbies["gardening"]}
            />
          </div>
          <div>
            <input type="submit" value="Send" />
          </div>
        </form>
      </header>
    </>
  );
}

export default App;
