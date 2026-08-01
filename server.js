const express=require("express");
const path=require("path");
const app=express();
const port=3000;

app.use("/css",express.static(path.join(__dirname,"css")));
app.use("/js",express.static(path.join(__dirname,"js")));
app.use("/images",express.static(path.join(__dirname,"images")));
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"views","home.html"));
});
app.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname,"views","login.html"));
});
app.get("/signup",(req,res)=>{
    res.sendFile(path.join(__dirname,"views","signup.html"));
});
app.get("/dashboard",(req,res)=>{
    res.sendFile(path.join(__dirname,"views","dashboard.html"));
});
app.get("/products",(req,res)=>{
    res.sendFile(path.join(__dirname,"views","products.html"));
});

app.get("/cart",(req,res)=>{
    res.sendFile(path.join(__dirname,"views","cart.html"));
});
app.get("/profile",(req,res)=>{
    res.sendFile(path.join(__dirname,"views","profile.html"));
});
app.listen(port,()=>{
    console.log("==============");
    console.log("TechMart Server Started");
    console.log("http://localhost:3000");
    console.log("===============");
});