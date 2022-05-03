const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/Users");
const authRoute = require("./routes/auth");



//Mongo db connection ---

dotenv.config();
mongoose.connect(
    process.env.MONGO_URL, () => {
        console.log("connected to mongo db")
    }
);



//Midddleware functions --


app.use(express.json());
app.use(helmet());
app.use((morgan("common")));

app.get("/", (req, res) => {
    res.send("welcome to home page");
})
app.get("/user", (req, res) => {
    res.send("welcome to user page");
})

app.use("/api/Users", userRoute);

app.use("/api/auth", authRoute);


//server ---
app.listen(8800, () => {
    console.log("Backend is running on server")
})

