const mongoose = require('mongoose');

const groupMessageSchema = new mongoose.Schema({
    from_user:{
        type: String,
        required: [true,'Enter your name'],
        trim: true,
        lowercase: true
         
    },
    room:{
        type: String,
        trim: true,
        lowercase: true,
        required: true
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
const groupMessage = mongoose.model("groupMessage", groupMessageSchema);
module.exports = groupMessage;