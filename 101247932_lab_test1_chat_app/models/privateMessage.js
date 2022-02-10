const mongoose = require('mongoose');

const privateMessageSchema = new mongoose.Schema({
    from_user:{
        type: String,
        required: [true,'Enter your name'],
        trim: true,
        lowercase: true
         
    },
    to_user:{
        type: String,
        required: [true,'Enter your to_user'],
        trim: true,
        lowercase: true
         
    },
    message:{
        type:String,
        required: true,
    },
    date_sent:{
        type:Date,
        default:Date.now,
        alias: 'created'
    }
});
const privateMessage = mongoose.model("privateMessage", privateMessageSchema);
module.exports = privateMessage;