const mongoose = require('mongoose')
function DatabaseConnection() {
    mongoose.connect(`mongodb+srv://FoodApp:D8MTtt9vKKhB7piP@cluster0.o72kxch.mongodb.net/FoodApp?retryWrites=true&w=majority`).then(() =>{
        console.log("Database Connection Complete")
    }).catch(error => {
        console.error('Error connecting to MongoDB:', error.message);
    });;
}
module.exports = DatabaseConnection;