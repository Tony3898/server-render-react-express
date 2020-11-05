const express = require("express")
const app = require("@tony3898/xserver")
require("./src/index")
const path = require('path')
app.use('/dist', express.static(path.join(__dirname, "/dist")));


