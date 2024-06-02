const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://ajay8182831490:Ajay%4016052003@blogapi.dstwlyr.mongodb.net/?retryWrites=true&w=majority&appName=blogapi");

const todoschema=mongoose.Schema({
    title:String,
    description:String,
    completed:{type:Boolean,default:false}
})

const todo=mongoose.model('todos',todoschema);
module.exports={todo};
