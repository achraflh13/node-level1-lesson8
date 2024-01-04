const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// define the Schema (the structure of the article)
const userSchema = new Schema({
  First_Name: String,
Last_Name: String,
Email: String,
Telephone: String,
Age: Number,
Country: String,
Gender: String,
});




// Create a model based on that schema
const User = mongoose.model("customer", userSchema);




// export the model
module.exports = User












