const mongoose = require("mongoose")
const watchSchema = mongoose.Schema({
Name: String,
Model: String,
Price: Number
})
module.exports = mongoose.model("watch", watchSchema)