import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import hbs from "hbs";
const app=express();
const port=process.env.PORT||8000;

//public static path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const staticPath=path.join(__dirname,"../public");
app.use(express.static(staticPath));

app.set("view engine","hbs");
const template_path=path.join(__dirname,"../templates/views");
app.set('views',template_path);

const partial_path=path.join(__dirname,"../templates/partials");
hbs.registerPartials(partial_path);

//routing
app.get("/",(req,res)=>{
    res.status(200);
    res.render("index");
});

app.get("/about",(req,res)=>{
    res.status(200);
    res.render("about");
});

app.get("/weather",(req,res)=>{
    res.status(200);
    res.render("weather")
});

app.get("*",(req,res)=>{
   
    
    res.render("404");
});

app.listen(port,()=>{
    console.log(`Listening to Port ${port}`);
});