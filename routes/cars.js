const Cars = require("../models/Cars");
const router = require("express").Router();

router.get("/", function (req, res){
    res.send( "Welcome to Tutorial of REST API using MongoDB, ExpressJS and NodeJS");
})

router.get("/Cars", function (req, res) {
    
    try {
        Cars.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        }
        else {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(data)
        }
    })
    } catch (error) {
        console.log(error);
    }
})

router.post("/Cars_add", function (req, res) {

    const dbfeed = req.body
    try {
        Cars.create(dbfeed, (err, data) => {
        if (err) {
            res.status(500).send(err)
        }
        else {
            res.status(201).send(data)
        }
    })
    } catch (error) {
        console.log(error);
    }
})

router.get("/Cars/:id", function (req, res) { 
    
    Cars.remove({ _id: req.params.id },(err, data) => {
        if (err){ 
            res.status(500).send(err)
        }else{ 
            res.status(200).send(data)  
        } 
    })
})
module.exports = router;