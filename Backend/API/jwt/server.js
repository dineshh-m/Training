import express from "express";
import userRouter from "./routes/usersRouter.js";

const PORT = 3000;

const app = express();

app.use(express.json());

app.use(userRouter);

// app.get("/", (req, res) => {
//   res.send({ message: "Hello, world" });
// });

app.listen(PORT, () => {
  console.log("Server started");
});
