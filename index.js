const express = require("express");
const postRouter = require("./modules/posts/posts.routes");
const dbConnect = require("./config/dbConnect");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("welcome to the homepage");
});
app.use("/posts", postRouter);

async function start() {
  await dbConnect();

  app.listen(4000, () => {
    console.log("Server is running on Port:4000");
  });
}

start();
