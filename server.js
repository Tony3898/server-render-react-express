import express from "express";

let app = require("@tony3898/xserver")
require("./src/index")
const path = require('path')

app.set('views', [app.get('views'), path.join(__dirname, "views/partials")]);

app.use('/dist', express.static(path.join(__dirname, "/dist")));

app.get('/test/project/react', ((req, res, next) => {
  res.render('react.hbs')
})).get('/test/project/vue', ((req, res, next) => {
  res.render('vue.hbs')
}))