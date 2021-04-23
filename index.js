const express = require("express");
const mongoose = require("mongoose")
const app = express();
const cors = require('cors')
const pinRoute = require("./routes/pins")
const userRoute = require("./routes/users")

app.use(cors())
app.use(express.json())

require("./config/connection.js");

app.use("/api/pin", pinRoute)
app.use("/api/user", userRoute)

app.listen(9898, () => {
    console.log(`server is running on port 9898`)
})