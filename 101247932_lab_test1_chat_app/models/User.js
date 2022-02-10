const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: [true,'Enter your username'],
        trim: true,
        lowercase: true
         
    },
    firstname: {
        type: String,
        required: [true, 'Please enter first name'],
        trim: true,
        lowercase: true
    },
    lastname: {
        type: String,
        alias: 'surname', //familyname
        required: true,
        trim: true,
        Lowercase: true
    },
    password:{
        type:String,
        required: [true,"Must enter password"],
        minlength: 8
    },
    createon:{
        type:Date,
        default:Date.now,
        alias: 'created'
    }
});

UserSchema.post('init', (doc) => {
    console.log('%s has been initialized from the db', doc._id);
  });
  
  UserSchema.post('validate', (doc) => {
    console.log('%s has been validated (but not saved yet)', doc._id);
  });
  
  UserSchema.post('save', (doc) => {
    console.log('%s has been saved', doc._id);
  });
  
  UserSchema.post('remove', (doc) => {
    console.log('%s has been removed', doc._id);
  });
const User = mongoose.model("User", UserSchema);
module.exports = User;