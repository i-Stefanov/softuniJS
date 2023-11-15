import { useParams } from "react-router-dom";
import { gameServiceFactory } from "../../services/gameService";
import { useEffect, useState } from "react";
import { useService } from "../../hooks/useService";
import { authServiceFactory } from "../../services/authService";
export default function Details() {
  // get the id, of the item we want to display, using useParams
  const { gameId } = useParams();
  const [game, setGame] = useState({});
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const gameService = useService(gameServiceFactory);
  const authService = useService(authServiceFactory);
  useEffect(() => {
    gameService
      .getOne(gameId)
      .then((result) => {
        setGame(result);
        // promise chaining (in order not to make another .then and make the code more nested)
        return commentService.getAll(gameId);
      })
      // the result in the code below is the comments array from the comment service
      .then((result) => {
        setComments(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [gameId]);
  const onCommentSubmit = async (e) => {
    e.preventDefault();
    await commentService.create({
      gameId,
      username,
      comment,
    });
    setComments((state) => [
      ...state,
      {
        gameId,
        username,
        comment,
      },
    ]);
    // reset the values in the form fields
    setUsername("");
    setComment("");
  };
  const onUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const onCommentChange = (e) => {
    setComment(e.target.value);
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
              {comments?.map((comment) => (
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
          <div className="buttons">
            <a href="#" className="button">
              Edit
            </a>
            <a href="#" className="button">
              Delete
            </a>
          </div>
        </div>

        {/* <!-- Bonus --> */}
        {/* <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
        <article className="create-comment">
          <label>Add new comment:</label>
          <form className="form" onSubmit={onCommentSubmit}>
            <input
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={onUsernameChange}
            />
            <textarea
              name="comment"
              id="comment"
              value={comment}
              onChange={onCommentChange}
              placeholder="Comment......"
            ></textarea>
            <input className="btn submit" type="submit" value="Add Comment" />
          </form>
        </article>
      </section>
    </>
  );
}
