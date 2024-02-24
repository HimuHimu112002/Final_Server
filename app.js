const express = require('express')
const router = require('./src/router/api')
const app = new express();

// body perser implementation
const bodyParser = require('body-parser')
app.use(bodyParser.json())

// sequrity middleare
const ratelimit = require('express-rate-limit')
const helmet = require('helmet')
const mongoSanitizer = require('express-mongo-sanitize')
const cors = require('cors')
require('dotenv').config()


// sequrity middleare implementation
app.use(cors())
app.use(helmet())
app.use(mongoSanitizer())

// rate limiter implementation
ratelimit({windowMs: 15 * 60 * 100, max: 3000})

// api in-point
app.use("/api/v1",router)

module.exports = app