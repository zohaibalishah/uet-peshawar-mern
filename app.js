const express = require("express");
const res = require("express/lib/response");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/dbbook")
  .then(() => {
    console.log("db connected");
  })
  .catch((e) => {
    console.log("error");
  });

const BooksSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
});
const Book = mongoose.model("books", BooksSchema);

// apis auth
app.post("/api/users/login", (req, res) => {
  res.json("login");
});
app.post("/api/users/signup", (req, res) => {
  res.json("signup");
});

// var books = [
//   { id: 1, name: "physics" },
//   { id: 2, name: "chemistry" },
//   { id: 3, name: "Math" },
//   { id: 4, name: "Bio" },
//   { id: 5, name: "Computer science" },
// ];
// apis books
app.get("/api/books", (req, res) => {
  Book.find({}).then((books) => {
    return res.json({ books });
  });
});
app.post("/api/books", (req, res) => {
  Book.create({
    id:'123',
    name: "Math",
    description: "abc",
  }).then(() => {
    return res.json("books created successfully");
  });
});
app.get("/api/books/:id", (req, res) => {
  // Book.findById("629b1ca12ddb741ddb345ed3")
  //   res.json({"" });
});
app.put("/api/books/:id", (req, res) => {
//   Book.findByIdAndUpdate()
  res.json("book update by id");
});
app.delete("/api/books/:id", (req, res) => {
    // Book.deleteOne()
  res.json("book delete by id");
});

app.listen(3000, () => {
  console.log("server start 3000");
});
