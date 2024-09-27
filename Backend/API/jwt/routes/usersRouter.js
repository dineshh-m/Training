import { Router, json } from "express";
import UserModel from "../models/userModel.js";

const router = Router();

router.use(json());

router.get("/", (req, res) => {
  res.send({ message: "Hello" });
});

// list
router.get("/users", (req, res) => {
  UserModel.findAll()
    .then((users) => users.map((user) => user.dataValues))
    .then((users) => res.send(users));
});

// add
router.post("/users", (req, res) => {
  const { username, email, password, phone, status } = req.body;
  UserModel.create({ username, email, password, phone, status })
    .then(() => res.status(201).send({ message: "User created" }))
    .catch((err) => {
      res.status(401).send({ message: err });
    });
});

// update
router.put("/users/:id", (req, res) => {
  const userId = req.params.id;
  const { username, email, password, phone, status } = req.body;
  UserModel.update(
    {
      username,
      email,
      password,
      phone,
      status,
    },
    {
      where: { id: userId },
    }
  )
    .then((_) => {
      res.status(201).send({ message: "user updated" });
    })
    .catch((err) => {
      res.status(401).send({ message: err });
    });
});

// delete
router.delete("/users/:id", (req, res) => {
  const userId = req.params.id;

  UserModel.destroy({
    where: {
      id: userId,
    },
  })
    .then((_) => {
      res.status(200).send({ message: "user deleted successfully" });
    })
    .catch((err) => {
      res.status(401).send({ message: err });
    });
});

export default router;
