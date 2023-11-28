export const gameReducer = (state, action) => {
  switch (action.type) {
    case "GAME_FETCH":
      // return a new referense to the object
      return { ...action.payload };
    case "ADD_COMMENT":
      return {
        ...state,
        comments: [
          ...state.comments,
          // since the result (action.payload) from the server doesn't come with author add userEmail to the comment on initial add of the comment beacuse there is no user at the initial comment adding time
          { ...action.payload, author: { email: action.userEmail } },
        ],
      };

    default:
      return state;
  }
};
