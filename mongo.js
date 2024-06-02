const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://tvarunavi2004:ryFNT4dxiuFWLaIl@userdetails.13rb2iw.mongodb.net/?retryWrites=true&w=majority&appName=userdetails")
.then(()=>{
    console.log("mongodb connected!!");
})
.catch(()=>{
    console.log('failed');
})


const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = mongoose.model("collection",newSchema)

module.exports=collection