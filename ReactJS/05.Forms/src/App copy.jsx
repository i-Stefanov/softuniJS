import { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("Pasho");
  const [age, setAge] = useState();
  const [cardNumber, setCardNumber] = useState("");
  const [occupation, setOccupation] = useState("rnd");
  const [gender, setGender] = useState("male");
  const [bio, setBio] = useState("");
  const [hobbies, setHobby] = useState({});

  const onUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const onAgeChange = (e) => {
    setAge(Number(e.target.value));
  };
  const onOccupationChange = (e) => {
    setOccupation(e.target.value);
  };
  const onCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };
  const onGenderChange = (e) => {
    setGender(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(age);
    console.log(cardNumber);
  };
  const onBioChange = (e) => {
    setBio(e.target.value);
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
              value={username}
              onChange={onUsernameChange}
            />
          </div>
          <div>
            <label htmlFor="username">Age</label>
            <input
              type="number"
              name="age"
              id="age"
              // if age == undefined or null value = ''
              value={age ?? ""}
              onChange={onAgeChange}
            />
          </div>
          {age >= 18 && (
            <div>
              <label htmlFor="credit-card">Credir card</label>
              <input
                type="text"
                name="creditCard"
                id="credit-card"
                value={cardNumber ?? ""}
                onChange={onCardNumberChange}
              />
            </div>
          )}
          <div>
            <label htmlFor="occupation"></label>
            <select
              name="occupation"
              id="occupation"
              value={occupation}
              onChange={onOccupationChange}
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
              onChange={onGenderChange}
              checked={gender == "male"}
            />
            <label htmlFor="female">Female</label>
            <input
              type="radio"
              name="gender"
              id="female"
              value="female"
              onChange={onGenderChange}
              checked={gender == "female"}
            />
          </div>
          <div>
            <label htmlFor="bio"></label>
            <textarea
              name="bio"
              id="bio"
              cols="30"
              rows="10"
              value={bio ?? ""}
              onChange={onBioChange}
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
