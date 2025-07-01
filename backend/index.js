const express = require("express");

const app = express();
const cors = require("cors");
const connectdb = require("./config/db");
const UserRoute = require("./router/UserRoute");
app.use(cors());


app.use(express.urlencoded({extended:true}));

app.use(express.json());
app.use("/user", UserRoute);
connectdb();
app.listen(4000, () => {
  console.log("server run no port=4000");
});
