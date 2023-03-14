const express = require('express')
const bodyParser  = require('body-parser')
const cors = require('cors')
const DB = require('./src/services/db.service')
const setRoute = require('./src/routes')

const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

DB.connectDB();

setRoute(app)

// app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))