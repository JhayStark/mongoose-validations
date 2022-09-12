const { connect } = require("mongoose");

async function dbConnect() {
  try {
    await connect("mongodb://localhost:27017/posts");
    console.log("Database connected");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

module.exports = dbConnect;
