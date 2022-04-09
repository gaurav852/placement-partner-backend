const express = require('express')
const mongoose = require('mongoose')
const dotenv = require("dotenv")
const router = require('./routes/routes')
const cors = require('cors')

dotenv.config({ path: './config/config.env' })

const app = express()

app.use(cors())
app.use(express.json())
app.use('/placement', router )

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('connected to database'))
    .then(() => {
        app.listen(process.env.PORT)
    }).catch((err) => console.log(err))