const Todos = require("../models/todoModel");

module.exports = (app) => {
  app.get("/api/todos", (req, res) => {
    Todos.find({}, (err, todos) => {
      if (todos.length === 0) throw err;
      res.send(todos);
    });
  });

  // same one with async await instead of callback
  /*
    app.get("/api/todos", async (req, res) => {
    let data = await Todos.find({})
    if (data.length > 0) res.send(data)
    res.send('error')
  });
  */


  app.get("/api/todos/done", (req, res) => {
    Todos.find({ isDone: true }, (err, todos) => {
      if (err) throw err;
      res.send(todos);
    });
  });

  app.get("/api/todos/:userName", (req, res) => {
    let userName = req.params.userName;
    Todos.find({ userName }, (err, todos) => {
      res.send(todos);
    });
  });

  app.get("/api/todos/:userName/:todo", (req, res) => {
    let { userName, todo } = req.params;
    Todos.find({ userName, todo }, (err, todos) => {
      res.send(todos);
    });
  });

  app.get("/api/todo/:id", (req, res) => {
    Todos.findById({ _id: req.params.id }, (err, todo) => {
      if (err) throw err;
      res.send(todo);
    });
  });

  app.post("/api/todo", (req, res) => {
    if (req.body._id) {
      Todos.findByIdAndUpdate(
        req.body._id,
        {
          userName: req.body.userName,
          todo: req.body.todo,
          isDone: req.body.isDone,
          hasAttachment: req.body.hasAttachment,
        },
        (err, todo) => {
          if (err) throw "id not found";
          res.send("update success");
        }
      );
    } else {
      console.log(req.body);
      const newTodo = Todos(req.body);
      newTodo.save((err, todo) => {
        if (err) return err;
        res.send(todo);
      });
    }
  });

  app.delete("/api/todo/:id", (req, res) => {
    Todos.findByIdAndDelete(req.params.id, (err) => {
      if (err) throw "id not found";
      res.send("deleted");
    });
  });
};
