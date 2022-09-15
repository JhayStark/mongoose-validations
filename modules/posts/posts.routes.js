const router = require("express").Router;
const {
  createPost,
  getPost,
  deletePosts,
  getSinglePost,
  updatePost,
  getAllPostsByUser,
} = require("./posts.controller");
const { authRequired } = require("../middlewares/authRequired");

const postRouter = router();

postRouter.route("/").all(authRequired).get(getPost).post(createPost);
postRouter
  .route("/:postId")
  .all(authRequired)
  .get(getSinglePost)
  .patch(updatePost)
  .delete(deletePosts)
  .get(getAllPostsByUser);

module.exports = postRouter;
