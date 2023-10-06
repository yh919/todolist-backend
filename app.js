const express =  require("express");
const mongoose = require("mongoose");
const tasksRoutes = require('./routes/taskRoutes')
const app = express();
const port = 3000;

// middle ware
app.use(express.json());

// db connection
mongoose.connect('mongodb://admin:admin@localhost:27017/todo?authSource=admin');

const db = mongoose.connection;

db.on('error', () => {
    console.log("Connection Error !");
})

db.once('open', () => {
    console.log(`Connected to DB!`)
})

app.use(tasksRoutes)

app.listen(port, () => {
    console.log(`Server Started on port localhost:${port}`)
});