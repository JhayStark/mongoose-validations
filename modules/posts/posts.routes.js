const router = require("express").Router;
const {
  createPost,
  getPost,
  deletePosts,
  getSinglePost,
  updatePost,
} = require("./posts.controller");

const postRouter = router();

postRouter.route("/").get(getPost).post(createPost);
postRouter
  .route("/:postId")
  .get(getSinglePost)
  .patch(updatePost)
  .delete(deletePosts);

module.exports = postRouter;
