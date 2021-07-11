const Todos = require("../models/todoModel");

module.exports = (app) => {
  app.get("/api/setupTodos", (req, res) => {
    const starterTodos = [
      {
        userName: "avi",
        todo: "buy flowers",
        isDone: false,
        hasAttachment: false,
      },
      {
        userName: "avi",
        todo: "learn vue",
        isDone: false,
        hasAttachment: false,
      },
      {
        userName: "avi",
        todo: "teach react",
        isDone: false,
        hasAttachment: false,
      },
      {
        userName: "avi",
        todo: "feed cat",
        isDone: false,
        hasAttachment: false,
      },
      {
        userName: "shlomi",
        todo: "do hw",
        isDone: false,
        hasAttachment: false,
      },
      {
        userName: "shlomi",
        todo: "watch lecture",
        isDone: false,
        hasAttachment: false,
      },
    ];
    Todos.create(starterTodos, (err, results) => {
      res.send(results);
    });
  });
};
