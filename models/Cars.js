const mongoose = require("mongoose");


const CarsSchema = mongoose.Schema({
    Name: String,
    Model: String,
    Price: String,
    meta: {
        Fuel_Type: String,
        Mileage: String,
        Seating_Capacity: Number
    },
})

module.exports = mongoose.model("Cars",CarsSchema)
