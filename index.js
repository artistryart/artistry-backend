const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose")

//import route
const userRoute = require ("./Routes/userRoute")
const creatorRoute = require("./Routes/creatorRoute");
const categoryRoute = require("./Routes/categoryRoute")
const artworkRoute = require("./Routes/artworkRoute");
const postRoute = require("./Routes/postRoute");
const userModel = require("./Models/userModels");

const app = express();
require('dotenv').config()
app.use(express.json());
app.use(cors());

app.use("/users", userRoute);
app.use("/creators", creatorRoute);
app.use("/categories", categoryRoute);
app.use("/artworks", artworkRoute);
app.use("/posts", postRoute);


//Thiết lập cổng và kết nối database 
const port = 5000;

app.listen(port, (req, res) =>{
    console.log(`Server running on port...: ${port}`)
})


//KẾT NỐI DATABASE ARTISTRY
mongoose.connect("mongodb://localhost:27017/artistry") 
.then(() => console.log("Artistry DB connection established!"))
.catch((error)=> console.log("Artistry DB connection failed: ", error.message))


//Thiết lập các tính năng của POST, GET,... 
app.get("/", (req, res) =>{
    res.send("Welcome to our Artistry..")
});

//POST DỮ LIỆU ĐĂNG KÍ TÀI KHOẢN MỚI 
app.post('/register', (req, res) => {
    userModel.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

//Đăng nhập
app.post('/login', (req, res) => {
    const{email, password} = req.body;
    userModel.findOne({email: email})
    .then ( user => {
        if (user) {
            if (user.password === password) {
                res.json("Success")
            } else {
                res.json("wrongpassword")
            }
        } else {
            res.json("nodata")

        }
    })
})

//POST DỮ LIỆU ĐĂNG KÍ Kênh CREATOR MỚI 
app.post('/creatorregister', (req, res) => {
    creatorModel.create(req.body)
    .then(creator => res.json(creator))
    .catch(err => res.json(err))
})