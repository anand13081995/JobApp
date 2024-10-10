1. APIS
        1. Create Job API
        2. List Job API
        3. Apply Job API
        4. Edit Job API
        5. Delete Job API 

2. Connecting Mongo with Node
3. Deployment of Backend


first create express server then create model, controller and route folder then create js to each folder then --->
create routes in jobRoute.js file and then import it in index.js file then app.use(jobRoutes) then --->
go to controller (jobController file) and then write code there then import it in jobRoute.js file then --->
open postman and validate that APIs are working or not then --->
you can check like this if /: is used in put and delete API -> http://localhost:10000/api/jobs/123 and then --->
In our case there is only one collection => jobs ==> Sample will be =>

{
  "title": "Software Engineer",
  "description": "Join our dynamic team and contribute to cutting-edge software development projects.",
  "company": "Tech Innovations Inc.",
  "location": "Cityville, USA",
  "salary": 80000
}

Now We will handle model ---->

{
    title : {
        type : String
    },
    description : {
        type : String
    },
    company : {
        type : String
    },
    location : {
        type : String
    },
    salary : {
        type : Number
    }
} ----> this whole part is called schema, So paste it in jobModel.js fil then --->

we have to connect it to MongoDB by installing mongoose (npm i mongoose) then import it in index.js file to make connection to our Database. then --->

go to jobModel.js file and wrap jobScema into [new mongoose.Schema()] and export it by making connection then operate some CRUD operation through postman by modifying jobController.js file by req.body and in index.js file by using app.use(express.json()) to access body data.

now import jobModel from jobModel.js file into controller then perform CRUD operation through postman by sending sample then it will add data to our database, if not then refresh the database. [id created by mogoDB and --v created by mongoose]

use try catch in jobController.js file because if there will be any random data will be sent to our consistant data then it will throw error. So it will not add data to our database.

now we will handle update API like in postman => http://localhost:10000/api/jobs/6706a5de93c538cd364762c1 then in jobController.js file update code then hit the API by Put then it will be updated.

Now we will learn deployment, So create account on Render.