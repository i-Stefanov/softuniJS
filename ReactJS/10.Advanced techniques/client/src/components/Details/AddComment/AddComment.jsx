import { useForm } from "../../../hooks/useForm";
export const AddComment = ({ onCommentSubmit }) => {
  const { values, changeHandler, onSubmit } = useForm(
    {
      comment: "",
    },
    onCommentSubmit
  );
  return (
    // {/* <!-- Bonus --> */}
    // {/* <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
    <article className="create-comment">
      <label>Add new comment:</label>
      <form className="form" onSubmit={onSubmit}>
        <textarea
          name="comment"
          id="comment"
          value={values.comment}
          onChange={changeHandler}
          placeholder="Comment......"
        ></textarea>
        <input className="btn submit" type="submit" value="Add Comment" />
      </form>
    </article>
  );
};
