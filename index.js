const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));
const methodOverride = require("method-override");

app.use(methodOverride("_method"));


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'anu_app',
    password: 'anu123@gu'

});

// try {
//     connection.query("SHOW TABLES" , (err , result)=>{
//         if (err) throw err;
//         console.log(result);
//     });
    
// } catch(err){
//     console.log(err);
// }

// inserting data into table 
// let q = "INSERT INTO user(id , name , email , password) VALUES (?,?,?,?)";

// let user = ["123", "abhi" , "@gmail.com", "abc"];
// try {
//     connection.query(q , user ,(err , result)=>{
//         if (err) throw err;
//         console.log(result);
//     });
    
// } catch(err){
//     console.log(err);
// }

// connection.end();

// let createRandomUser = ()=> {
//   return {
//     userId: faker.string.uuid(),
//     username: faker.internet.username(),
//     email: faker.internet.email(),
//     avatar: faker.image.avatar(),
//     password: faker.internet.password(),
//     birthdate: faker.date.birthdate(),
//     registeredAt: faker.date.past(),
//   };
// };

//console.log(createRandomUser());

// for inserting bulk data


let getRandomUser = ()=>{
  return [
    faker.string.uuid(),
   faker.internet.username(),

    faker.internet.email(),
    faker.internet.password(),
  ];
};
// let data = [];

// for(let i=1; i<=100; i++){
//   data.push(getRandomUser());
// };


// let q = "INSERT INTO user(id , name , email , password) VALUES ?";


// try {
//     connection.query(q, [data] ,(err, result)=>{
//         if (err) throw err;
//         console.log(result);
//     });
    
// } catch(err){
//     console.log(err);
// }

// connection.end();

app.listen(port , ()=>{
    console.log("listening to port:8080");
});


app.get("/", (req, res) => {
  let q = "SELECT COUNT(*) FROM user";
  try {
      connection.query(q, (err, result)=>{
          if (err) throw err;
          let count = result[0]["COUNT(*)"];
            res.render("home.ejs" , {count});
      });

  } catch(err){
      console.log(err);
       res.send("Some error in DB");
  }
});

// Show route to show user 

app.get("/user" , (req , res)=>{
  let q = "SELECT * FROM user";
    try {
      connection.query(q, (err, result)=>{
          if (err) throw err;
          console.log("Success");
          let data = result;
          res.render("user.ejs" , {data});
          
            
      });

  } catch(err){
      console.log(err);
       res.send("Some error in DB");
  }
  //res.send("server is listening to user");

});
  

// edit route 

app.get("/user/:id/edit",(req , res)=>{
  let {id} = req.params;
  let q = `SELECT * FROM user  WHERE id ='${id}'`;
   try {
      connection.query(q, (err, result)=>{
          if (err) throw err;
         // console.log("Success");
           let data =result[0];
          res.render("edit.ejs" , {data} );
          
            
      });

  } catch(err){
      console.log(err);
       res.send("Some error in DB");
  }
  
});

// update route ---- eited item get update in the database ]

app.patch("/user/:id", (req, res)=>{
  //res.send("updated");
   let {id} = req.params;
   let {name , password} = req.body;
  let q = `SELECT * FROM user  WHERE id ='${id}'`;
   try {
      connection.query(q, (err, result)=>{
          if (err) throw err;
         // console.log("Success");
           let data =result[0];
           if(password != data.password){
            return res.send("wrong pass");
           }

        // res.send("correct");

           else{
            let q2 = `UPDATE user SET name = '${name}' WHERE id='${id}'`;
            connection.query(q2 , (err , result)=>{
              if(err) throw err;
              res.redirect("/user");


            });
           }
          
            
      });

  } catch(err){
      console.log(err);
       res.send("Some error in DB");
  }

    
});