import { useState } from "react";
import { useForm } from "../../hooks/useForm";
export default function CreateGame({ onCreateGameSubmit }) {
  // set initial values to the state variables
  const { values, changeHandler, onSubmit } = useForm(
    {
      title: "",
      category: "",
      maxLevel: "",
      imageUrl: "",
      summary: "",
    },
    onCreateGameSubmit
  );

  return (
    <>
      {/* <!-- Create Page ( Only for logged-in users ) --> */}
      <section id="create-page" className="auth">
        <form id="create" method="POST" onSubmit={onSubmit}>
          <div className="container">
            <h1>Create Game</h1>
            <label htmlFor="leg-title">Legendary title:</label>
            <input
              onChange={changeHandler}
              value={values.title}
              type="text"
              id="title"
              name="title"
              placeholder="Enter game title..."
            />
            <label htmlFor="category">Category:</label>
            <input
              onChange={changeHandler}
              value={values.category}
              type="text"
              id="category"
              name="category"
              placeholder="Enter game category..."
            />
            <label htmlFor="levels">MaxLevel:</label>
            <input
              onChange={changeHandler}
              value={values.maxLevel}
              type="number"
              id="maxLevel"
              name="maxLevel"
              min="1"
              placeholder="1"
            />
            <label htmlFor="game-img">Image:</label>
            <input
              onChange={changeHandler}
              value={values.imageUrl}
              type="text"
              id="imageUrl"
              name="imageUrl"
              placeholder="Upload a photo..."
            />
            <label htmlFor="summary">Summary:</label>

            <textarea
              onChange={changeHandler}
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
