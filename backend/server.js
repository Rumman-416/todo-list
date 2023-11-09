const express = require("express");
const { PORT } = require("./config");
const { connection } = require("./connection");
const router = require("./routes");
const userRouter = require("./routes/user");

const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/lists", router);
app.use("/user", userRouter);

app.listen(PORT, () => {
  try {
    console.log(`server started at http://localhost:${PORT}`);
    connection;
  } catch (error) {
    console.log("error:", error);
  }
});
