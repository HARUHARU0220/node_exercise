import express from "express"
const app = express()

import excerciseRouter from "./routing/excercise.js"
import bodyParser from "body-parser";

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use("/exercise",excerciseRouter)


const port = 3030
app.listen(port, console.log("server start"))
