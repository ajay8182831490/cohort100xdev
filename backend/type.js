const zod=require("zod");
const createtodo=zod.object({
    title:zod.string(),
    description:zod.string(),
   // completed:zod.boolean()

})

const updateTodo=zod.object({
    id:zod.string(),
})
 module.exports={
    createtodo:createtodo,
    updateTodo:updateTodo
 }