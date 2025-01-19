const mongoose = require('mongoose')
const mongoURI = "mongodb://localhost:27017/e-commerce-database"

const connectToMongo = async () => {
    try {
         await mongoose.connect(mongoURI);
         console.log("connect to mongo succesfully")
    }catch(error)   {
        console.log("connect to mongo failed" ,error)
    }
}
module.exports = connectToMongo;