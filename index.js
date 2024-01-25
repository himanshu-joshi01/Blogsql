const express = require("express");
const mysql = require("mysql2");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");
const { Console } = require("console");
const ejsMate= require("ejs-mate");
const app = express();


app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.engine("ejs",ejsMate);

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'blogs',
    password: '4178336*',
});


app.get("/", (req, res) => {
    res.render("home.ejs");
    // res.render("test.ejs");
});


app.get("/home", (req, res) => {
    res.render("home.ejs");
    // res.render("test.ejs");
});

app.get("/home/auth/blogs", (req, res) => {
    res.redirect("/home/auth");
});

app.get("/home/auth", (req, res) => {
    res.render("login.ejs");
});


app.post("/home/auth/blogs", (req, res) => {
    let { username, password } = req.body;
    if (username && password) {
        let q = `select * from users where Username='${username}' and Password='${password}'`;
        try {
            connection.query(q, (err, result) => {
                if (err) throw err;
                if (result.length > 0) {

                    res.render("blogs.ejs", { result });
                }
                else {

                    res.render("usernotfound.ejs");
                    // res.redirect("/home/auth");
                }
                res.end;
            });
        }
        catch (err) {
            console.log("error in db");
        }
    }
    else {
        res.render("usernotfound.ejs");
        res.end();
    }
});


app.get('/logout', (req, res) => {
    req.session.destroy((err)=>{
        if(err){
            console.error("error destroying session:",err);
            return res.redirect("/");
            console.log(req.session);
        }
     
     res.redirect('/home');
    });
    
});


app.get("/register", (req, res) => {
    res.render("signup.ejs");
});


app.post("/register", (req, res) => {
    let id = uuidv4();
    let { username, email, password } = req.body;
    let q = `INSERT INTO users (Id,Username,Email,Password) VALUES ('${id}','${username}','${email}','${password}')`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            res.redirect("/home");
        });
    }
    catch (err) {
        console.log("some error in database");
    }

});


app.get("/home/auth/blogs/:id", (req, res) => {
    let { id } = req.params;
    let q = `SELECT * FROM users WHERE Id='${id}'`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            res.render("profile.ejs", { result });
        });
    }
    catch (err) {
        console.log("error in db");
    }
});


app.post("/home/auth/blogs/:id", (req, res) => {
    let { id } = req.params;
    let { image } = req.body;
    if (image == "") {
        // console.log('failed');

    }
    else {
        let q = `UPDATE users SET Image='/assets/${image}' WHERE Id='${id}'`;
        try {
            connection.query(q, (err, result) => {
                if (err) throw err;
                res.redirect(id);
            });
        }
        catch (err) {
            console.log("error in db");
        }
    }
});


app.get("/home/:id/blogs",(req,res)=>{
   let {id}=req.params;
   let q=`SELECT * from users WHERE Id='${id}'`;
   try{
    connection.query(q,(err,result)=>{
        if(err) throw err;
        res.render("blogs.ejs",{result});
    });
   }
    catch(err)
    {
        console.log("err in db");
    }
});

// .............................................create blog


app.get("/:id/createpost",(req,res)=>{
    let{id}=req.params;
    res.render("createpost.ejs",{id})
});


app.post("/:id/createpost",(req,res)=>{
let{id}=req.params;
let{image,title,content}=req.body;
console.log(id);
result=req.body;
console.log(result);
});


app.listen(8080, () => {
    console.log("App is listening");
});

//himanshugit 


