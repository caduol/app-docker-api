const express = require('express');
const mysql = require('mysql')

const app = express();
const port = 3000

const connection = mysql.createConnection({
    host:'db',
    user:'root',
    password:'pwdapp',
    database:'dockerapi'
})

connection.connect();

app.get('/products', (req,res)=>{
    connection.query('select * from products', (error, results)=>{
        if(error){
            throw error
        }

        res.send(results.map(item => ({name: item.name, price: item.price})))
    })
})


// app.get("/", (req, res) => {
//     res.send("Hi Docker!!!");
//   });

app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})