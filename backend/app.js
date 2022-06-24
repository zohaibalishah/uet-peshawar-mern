const express = require("express");
const app = express()

app.get("/", (req, res) => {
    res.send("hello word")
})

app.get("/users", (req, res) => {
    const students = [
        { id: 1, name: "ali", age: 22, address: "peshawar" },
        { id: 2, name: "kamran", age: 22, address: "mardan" },
        { id: 3, name: "a", age: 22, address: "peshawar" },
    ];
    res.json(students)
})
app.listen(4000, () => {
    console.log("server is runing port no 4000")
})
