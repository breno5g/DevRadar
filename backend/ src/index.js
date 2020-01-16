const express = require('express') 
const mongoose = require("mongoose")
const routes = require("./routes")

const app = express()

mongoose.connect("mongodb+srv://breno:omnistack@cluster0-3etda.mongodb.net/week10?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
})

app.use(express.json())
app.use(routes)

app.listen(3333)
