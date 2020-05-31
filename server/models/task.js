const mongoose = require('mongoose');



const taskSchema=mongoose.Schema(
    {
        taskname:
        {
            type:String,
            require:true,
            trim:true,
            unique:1
        },
        createddate:
        {
            type:String,
            require:true
        },
        createdby:
        {
            type:String,
            require:true
        },
        description:
        {
            type:String,
            require:true
        },
        assignto:
        {
            type:String,
            require:true

        },
        startdate:
        {
            type:String,
            require:true

        },
        enddate:
        {
            type:String,
            require:true

        }

    }
)
const Task =mongoose.model('Task',taskSchema);
module.exports={Task};