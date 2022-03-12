const express= require('express');
const mongoose= require('mongoose');
const cors = require ('cors');
const routes = require('./routes/cars')
const app = express()
const port = process.env.PORT || 8080 

app.use(express.json());
app.use(cors());

const Connection_url =
  "mongodb+srv://test:test@cluster0.zlugu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

  mongoose.connect(Connection_url, {
    useNewUrlParser: true,
  //  useCreateIndex: true,
    useUnifiedTopology: true
})




app.get("/", function (req, res){
    res.send( "Welcome to Tutorial of REST API using MongoDB, ExpressJS and NodeJS");
})

app.use("/", routes)
// app.get("/Cars", function (req, res) {
    
//     try {
//         Cars.find((err, data) => {
//         if (err) {
//             res.status(500).send(err)
//         }
//         else {
//             res.setHeader('Content-Type', 'application/json');
//             res.status(200).send(data)
//         }
//     })
//     } catch (error) {
//         console.log(error);
//     }
// })

// app.post("/Cars_add", function (req, res) {

//     const dbfeed = req.body
//     try {
//         Cars.create(dbfeed, (err, data) => {
//         if (err) {
//             res.status(500).send(err)
//         }
//         else {
//             res.status(201).send(data)
//         }
//     })
//     } catch (error) {
//         console.log(error);
//     }
// })

// app.get("/Cars/:id", function (req, res) { 
    
//     Cars.remove({ _id: req.params.id },(err, data) => {
//         if (err){ 
//             res.status(500).send(err)
//         }else{ 
//             res.status(200).send(data)  
//         } 
//     })
// })



app.listen(port, () => {
    console.log(`Server started on ${port}`)
})