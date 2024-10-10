const jobModel = require("../model/jobModel") //--> it will create the database in mongoDB compass.


const createJob = async (req, res)=>{
    try {
        //console.log(req.body);
        const newlyInsertedJob = await jobModel.create(req.body);  //--> .create is method
        //console.log(newlyInsertedJob);
        
        res.json({
            success : true,
            message : "Job Created Succeessfully"
        });
    } catch (error) {
        //next(error)
        res.json({
            success : false,
            massage : "Something went wrong"
        })
    }
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const listJob = async (req, res)=>{
//     const jobList = await jobModel.find();
//     res.json({
//         success : true,
//         message : "List job API Called",
//         results : jobList
//     });
// };

///////////////////// OR using query parameter /////////////////////////////----------->

const listJob = async (req, res)=>{
    const minSalary = req.query.minSalary //--> search on postman by Get method [http://localhost:10000/api/jobs?minSalary=70000].
    const jobList = await jobModel.find({
        salary : {
            $gt : minSalary
        }
    });
    res.json({
        success : true,
        message : "List job API Called",
        results : jobList
    });
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const updateJob = async (req, res)=>{
    console.log(req.params.id);
    //--> add validation by yourself for wrong id.


    //---> By hardcore data we can update like this-->
    // const updateObj = {
    //     $set : { //--->  $set => is used to update the value by overwriting and can update multiple fields of id.
    //         salary : 75000
    //     }
    // }

    const updateObj = {
        $set : req.body //---> updating by sending data through postman like this =>  {"salary": 90000}
    }
    const response = await jobModel.findByIdAndUpdate(req.params.id, updateObj)
    //---> if we have to update many then we use jobModel.updateMany method like const filterObj ={salary : 55000} then send this parameter in place of [req.params.id].
    console.log(response);
    
    res.json({
        success : true,
        message : "Update job API Called"
    });
};

const deleteJob = (req, res)=>{
    //---> do it by yourself by method => findByIdAndDlete(id) or deleteMany().
    res.json({
        success : true,
        message : "Delete job API Called"
    });
};

const allJobController = {
    createJob,
    listJob,
    updateJob,
    deleteJob
};

module.exports = allJobController;