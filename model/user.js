const mongoose = require('mongoose');
var validator = require('validator');
const Schema = mongoose.Schema;

const student = new mongoose.Schema({
    student_name : String,
    student_course: String,
    student_age: Number,
    student_email:{
        type:String,
        require:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is Invalid")
            }
        }
    }
});
 const Students = mongoose.model('Students',student)
 module.exports = Students