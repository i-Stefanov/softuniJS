import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { gameServiceFactory } from "../../services/gameService";
import { authServiceFactory } from "../../services/authService";
import * as commentService from "../../services/commentService";
import { useService } from "../../hooks/useService";
import { useAuthContext } from "../../contexts/AuthContext";
import { AddComment } from "./AddComment/AddComment";
// import * as commentService from "../../services/commentService";
export default function Details() {
  const navigate = useNavigate();
  // get the id of the item we want to display using useParams
  const { gameId } = useParams();
  const { userId, isAuthenticated } = useAuthContext();

  const [game, setGame] = useState({});

  const [comments, setComments] = useState([]);
  const gameService = useService(gameServiceFactory);
  const authService = useService(authServiceFactory);
  useEffect(() => {
    gameService
      .getOne(gameId)
      .then((result) => {
        setGame(result);
        // promise chaining (in order not to make another .then and make the code more nested)
        // return commentService.getAll(gameId);
      })

      // the result in the code below is the comments array from the comment service
      // .then((result) => {
      //   setComments(result);
      // })
      .catch((err) => {
        console.log(err);
      });
  }, [gameId]);
  const onCommentSubmit = async (values) => {
    console.log(values);
    const result = await commentService.create(gameId, values.comment);
    console.log(result);
    // setComments((state) => [
    //   ...state,
    //   {
    //     gameId,
    //     username,
    //     comment,
    //   },
    // ]);
  };
  const onUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const onCommentChange = (e) => {
    setComment(e.target.value);
  };
  const onDeleteClick = async () => {
    await gameService.delete(game._id);
    //TODO delete from state
    navigate("/catalog");
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
                Object.values(game.comments).map((comment) => (
                  <li key={comment._id} className="comment">
                    <p>{comment.username} said:</p>
                    <p>Content: {comment.comment}</p>
                  </li>
                ))}
            </ul>
            {/* <!-- Display paragraph: If there are no games in the database --> */}
            {/* if there are no comments display the code below */}
            {comments.length === 0 && (
              <p className="no-comment">No comments.</p>
            )}
          </div>

          {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
          {game._ownerId === userId && (
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
