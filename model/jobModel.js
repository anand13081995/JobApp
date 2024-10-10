const mongoose = require("mongoose")


const jobSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true, //---> this is because to insert data to this field necessarily. if not provide then it will not add data to databse and throw error.
        //unique : true //---> this is for non repeatative same title name of data.
    },
    description : {
        type : String,
        default : "" //---> this is because it will add default value of empty string if we not provide.
    },
    company : {
        type : String,
        required : true
    },
    location : {
        type : String,
        required : true
    },
    salary : {
        type : Number,
        required : true
    }
});

const JobSchema = mongoose.model("jobs", jobSchema); //---> it will create collection name of jobs
module.exports = JobSchema; //---> connection completed.

//Note :- if we send some extra field and which is not mentioned in Schema then it will not add that particular field, but rest will be added.