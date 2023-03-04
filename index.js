const express = require('express')
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const { sequelize, connectDB } = require('./db');

dotenv.config();
const app = express()
const port = 3000
const host = '0.0.0.0';
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, host, async () => {
    console.log(`Example app listening on port ${port}!`)
    await connectDB()
    sequelize.sync({ force: false }).then(() => {
        console.log("Synced database successfully...");
      })
})