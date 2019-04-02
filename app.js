const express = require('express')
const app = express()
const routes = require('./routes')
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use("/", routes)

app.listen(4000)