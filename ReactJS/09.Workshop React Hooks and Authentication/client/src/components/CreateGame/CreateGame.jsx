import { useState } from "react";
export default function CreateGame({ onCreateGameSubmit }) {
  // set initial values to the state variables
  const [values, setValues] = useState({
    title: "",
    category: "",
    maxLevel: "",
    imageUrl: "",
    summary: "",
  });
  const onChangeHandler = (e) => {
    setValues((values) => ({ ...values, [e.target.name]: e.target.value }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    onCreateGameSubmit(values);
  };
  return (
    <>
      {/* <!-- Create Page ( Only for logged-in users ) --> */}
      <section id="create-page" className="auth">
        <form id="create" onSubmit={onSubmit}>
          <div className="container">
            <h1>Create Game</h1>
            <label htmlFor="leg-title">Legendary title:</label>
            <input
              onChange={onChangeHandler}
              value={values.title}
              type="text"
              id="title"
              name="title"
              placeholder="Enter game title..."
            />
            <label htmlFor="category">Category:</label>
            <input
              onChange={onChangeHandler}
              value={values.category}
              type="text"
              id="category"
              name="category"
              placeholder="Enter game category..."
            />
            <label htmlFor="levels">MaxLevel:</label>
            <input
              onChange={onChangeHandler}
              value={values.maxLevel}
              type="number"
              id="maxLevel"
              name="maxLevel"
              min="1"
              placeholder="1"
            />
            <label htmlFor="game-img">Image:</label>
            <input
              onChange={onChangeHandler}
              value={values.imageUrl}
              type="text"
              id="imageUrl"
              name="imageUrl"
              placeholder="Upload a photo..."
            />
            <label htmlFor="summary">Summary:</label>

            <textarea
              onChange={onChangeHandler}
              value={values.summary}
              name="summary"
              id="summary"
            ></textarea>
            <input className="btn submit" type="submit" value="Create Game" />
          </div>
        </form>
      </section>
    </>
  );
}
