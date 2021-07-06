const express = require("express");
const mongoose = require("mongoose");
const setupController = require('./controllers/setupController')

const app = express();

const port = process.env.PORT || 5000;

const uri = 'mongodb+srv://test:test@cluster0.vg6pa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

app.use(express.json())

app.use('/', (req,res,next)=> {
    console.log('at path: ' + req.path);
    next()
})

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true  })
app.get("/", (req, res) => {
  res.send("<h1>todos-rest-api</h1>");
});
setupController(app)

app.listen(port, () => console.log("app is running on port: " + port));

