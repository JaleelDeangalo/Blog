const express = require("express");
const app = express();
const connectDB = require("./config/connect");
require("dotenv").config();
const cookieParser = require("cookie-parser");

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());

app.use("/api", require("./routes/user"));
app.use("/api", require("./routes/auth"));
app.use("/api",require("./routes/posts"));
app.use("/api", require("./routes/profile"));

connectDB();

const Port = process.env.PORT || 5000;

app.listen(Port, ()=> console.log(`Server Running on port ${Port}`));