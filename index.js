const app = require('./app')
const DatabaseConnection = require('./src/database/db.js')
DatabaseConnection()

app.listen(5000, function(){
    console.log("Backend project running...!")
})