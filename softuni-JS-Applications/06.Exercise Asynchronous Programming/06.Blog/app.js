function attachEvents() {
  const btnLoadPosts = document.querySelector(`#btnLoadPosts`);
  const btnViewPost = document.querySelector(`#btnViewPost`);
  const titleEl = document.querySelector(`#post-title`);
  const postBody = document.querySelector(`#post-body`);
  const postComments = document.querySelector(`#post-comments`);
  let selectPosts = document.querySelector(`#posts`);
  btnLoadPosts.addEventListener(`click`, loadPosts);
  btnViewPost.addEventListener(`click`, viewPost);
  let posts;
  async function loadPosts() {
    try {
      const response = await fetch(
        `http://localhost:3030/jsonstore/blog/posts`
      );
      posts = await response.json();
      if (!posts) {
        throw new Error();
      }
      selectPosts.replaceChildren();
      Object.entries(posts).forEach(([postId, postBody]) => {
        const option = document.createElement(`option`);
        option.textContent = postBody.title;
        option.value = postId;
        selectPosts.appendChild(option);
      });
    } catch (error) {
      console.log(error);
    }
  }
  async function viewPost() {
    try {
      const response = await fetch(
        `http://localhost:3030/jsonstore/blog/comments`
      );
      const comments = await response.json();
      if (!comments) {
        throw new Error();
      }
      let currentComments = Object.values(comments).filter(
        (comment) => comment.postId == selectPosts.value
      );

      let selectedOption = document.querySelector(
        `option[value="${selectPosts.value}"]`
      );
      console.log(selectedOption.textContent);
      postBody.textContent = posts[selectPosts.value].body;
      titleEl.textContent = selectedOption.textContent;
      postComments.replaceChildren();
      currentComments.forEach((comment) => {
        const li = document.createElement(`li`);
        li.textContent = comment.text;
        postComments.appendChild(li);
      });
    } catch (error) {
      console.log(error);
    }
  }
}

attachEvents();
