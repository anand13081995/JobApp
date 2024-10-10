const express = require("express");
const jobRoutes = require("./route/jobRoute");
const mongoose = require("mongoose")




const app = express();
/////////////////////////////////////////////////////////////////////////
// mongoose.connect("mongodb://localhost:27017/job_app")  //---> server(compass) + database name(if not available then it will create itself when we perform some task)
//////////////////////////////////////////////////////////////////////////

mongoose.connect("mongodb+srv://anandsahani213:fprszorCrDAHDCx4@cluster0.jzn9f.mongodb.net/")
.then(()=> console.log("DB Connected successfully"))
.catch(()=> console.log("Connecting error database", err))


//Middlewares
app.use(express.json()); //---> to access data from body of postman

//Routes
app.use(jobRoutes);








app.listen(10000, ()=>{
    console.log("Express server is up and running at port 10000");
})