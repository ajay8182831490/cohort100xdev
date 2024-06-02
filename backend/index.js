const express=require('express');
const app=express();
const cors=require('cors')

const { createtodo,updateTodo}=require('./type');
const {todo}=require('./db');


 

app.use(express.json());
app.use(cors());

app.post('/create', async (req,res,next)=>{
   
    const payload=req.body;
    const parsepayload=createtodo.safeParse(payload);

    console.log(parsepayload);
    if(!parsepayload.success){
       res.status(411).json("you sent the wrong input");
       return;
    }
      await todo.create({
       title:payload.title,
       description:payload.description
      })
    res.status(401).json('todo create');



})
app.put('/completed',async (req,res)=>{

    const payload=req.body;

    console.log(payload)

    console.log(typeof(payload.id))
    const parsepayload=updateTodo.safeParse(payload);
     if(!parsepayload.success){
       res.status(411).json("you sent the wrong input");
       return;
    }
         await todo.findOneAndUpdate({_id:payload.id}, { completed: true });
        res.json('Todo marked as completed');


})

app.get('/todo',async (req,res)=>{
    const todos=await todo.find({});
      
      res.status(201).json(todos);
})

app.listen(1000,()=>{
    console.log("server is runing on number 1000");

})
