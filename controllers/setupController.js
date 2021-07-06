const Todos = require("../models/todoModel");

module.exports = (app) => {
  app.get("/api/setupTodos", (req, res) => {
    const starterTodos = [
      {
        userName: "test",
        todo: "buy milk",
        isDone: false,
        hasAttachment: false,
      },
      {
        userName: "test",
        todo: "learn node",
        isDone: false,
        hasAttachment: false,
      },
      {
        userName: "test",
        todo: "teach JS",
        isDone: false,
        hasAttachment: false,
      },
      {
        userName: "test",
        todo: "feed dog",
        isDone: false,
        hasAttachment: false,
      },
      {
        userName: "Avi",
        todo: "get hw",
        isDone: false,
        hasAttachment: false,
      },
      {
        userName: "Avi",
        todo: "upload lecture",
        isDone: false,
        hasAttachment: false,
      },
    ];
    Todos.create(starterTodos, (err, results) => {
      res.send(results);
    });
  });
};
