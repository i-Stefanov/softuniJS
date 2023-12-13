import { useEffect, useState, useContext, useReducer } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { gameServiceFactory } from "../../services/gameService";
import { authServiceFactory } from "../../services/authService";
import * as commentService from "../../services/commentService";
import { useService } from "../../hooks/useService";
import { useAuthContext } from "../../contexts/AuthContext";
import { AddComment } from "./AddComment/AddComment";
import { gameReducer } from "../../reducers/gameReducer";
import { useGameContext } from "../../contexts/GameContext";

// import * as commentService from "../../services/commentService";
export default function Details() {
  const navigate = useNavigate();
  // get the id of the item we want to display using useParams
  const { gameId } = useParams();
  const { userId, isAuthenticated, userEmail } = useAuthContext();
  const [game, dispatch] = useReducer(gameReducer, {});
  const { deleteGame } = useGameContext();

  const gameService = useService(gameServiceFactory);
  const authService = useService(authServiceFactory);
  useEffect(() => {
    Promise.all([gameService.getOne(gameId), commentService.getAll(gameId)])
      .then(([gameData, commentsData]) => {
        const gameState = {
          ...gameData,
          comments: commentsData,
        };
        dispatch({ type: "GAME_FETCH", payload: gameState });
      })

      .catch((err) => {
        console.log(err);
      });
  }, [gameId]);
  const onCommentSubmit = async (values) => {
    const result = await commentService.create(gameId, values.comment);

    dispatch({
      type: "ADD_COMMENT",
      payload: result,
      // since the result from the server doesn't come with author add userEmail to the comment on initial add of the comment beacuse there is no user at the initial comment adding time
      userEmail: userEmail,
    });
  };
  const isOwner = game._ownerId === userId;
  const onUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const onCommentChange = (e) => {
    setComment(e.target.value);
  };
  const onDeleteClick = async () => {
    const deleteConfirm = confirm(
      `Are you sure yu want to delete: ${game.title}`
    );
    if (deleteConfirm) {
      // delete game from server
      await gameService.delete(game._id);
      //TODO delete from state
      deleteGame(game._id);
      navigate("/catalog");
    }
  };
  return (
    <>
      {/* <!--Details Page--> */}
      <section id="game-details">
        <h1>Game Details</h1>
        <div className="info-section">
          <div className="game-header">
            <img className="game-img" src={game.imageUrl} />
            <h1>{game.title}</h1>
            <span className="levels">MaxLevel: {game.maxLevel}</span>
            <p className="type">{game.category}</p>
          </div>

          <p className="text">{game.summary}</p>

          {/* <!-- Bonus ( for Guests and Users ) --> */}
          <div className="details-comments">
            <h2>Comments:</h2>
            <ul>
              {/* <!-- list all comments for current game (If any) --> */}
              {game.comments &&
                game.comments.map((comment) => (
                  <li key={comment._id} className="comment">
                    <p>
                      {comment.author.email.split("@")[0]} : {comment.comment}
                    </p>
                  </li>
                ))}
            </ul>
            {/* <!-- Display paragraph: If there are no games in the database --> */}
            {/* if there are no comments display the code below */}
            {game.comments?.length === 0 && (
              <p className="no-comment">No comments.</p>
            )}
          </div>

          {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
          {isOwner && (
            <div className="buttons">
              <Link to={`/catalog/${game._id}/edit`} className="button">
                Edit
              </Link>
              <button onClick={onDeleteClick} className="button">
                Delete
              </button>
            </div>
          )}
        </div>

        {isAuthenticated && <AddComment onCommentSubmit={onCommentSubmit} />}
      </section>
    </>
  );
}
