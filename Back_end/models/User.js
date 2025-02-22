const mongoose = require('mongoose')
const { Schema } = mongoose;

const UserSchema = new Schema({
  name : {
    type : String ,
    required : true,
  },
    password : {
        type : String ,
        required : true 
    },
    date : {
        type : Date ,
        default : Date.now
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    profilePicture: {
        type: String
    },
     
    phone : {
        type : String ,
        require :true
    }
});
const User = mongoose.model('User', UserSchema);
module.exports = User;