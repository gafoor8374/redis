const express = require('express');
const todoController= require('./controllers/todo.controllers')
const app= express();

app.use(express.json());

app.use("/todos",todoController)
module.exports =app