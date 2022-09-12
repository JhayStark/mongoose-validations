const router = require("express").Router;
const { createPost, getPost } = require("./posts.controller");

const postRouter = router();

postRouter.route("/").get(getPost).post(createPost);

module.exports = postRouter;
