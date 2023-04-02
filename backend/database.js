const mongoose = require("mongoose");
// require("dotenv").config();
mongoose.set('strictQuery', false);
// const DB =process.env.DATABASE;

  mongoose.connect("mongodb+srv://shivamsaini81717:saini81717@cluster0.mgacxti.mongodb.net/chatapp?retryWrites=true&w=majority",()=>{
        console.log(`Mongodb connected with server:`);
})


