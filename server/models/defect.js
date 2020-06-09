const mongoose = require('mongoose');

const defectSchema=mongoose.Schema(
    {
        defect:
        {
             type:String,
             require:true,
             trim:true,
             unique:1

        },
        buildName:
        {
            type:String,
            require:true,
        },
        moduleName:
        {
            type:String,
            require:true,
        },
        deviceNmae:
        {
            type:String,
            require:true,
        },
        defectType:
        {
            type:String,
            require:true,  
        },
        severity:
        {
            type:String,
            require:true,
        },
        status:
        {
            type:String,
            require:true,
        },
        description:
        {
            type:String,
            require:true,
        },
        comments:
        {
            type:String,
            require:true,
        },
        assignTo:
        {
            type:String,
            require:true,
        },
        priority:
        {
            type:String,
            require:true,
        },
        defectViewers:
        {
            type:String,
            require:true,
        },
        createddate:
        {
            type:String,
            require:true,
        },
        createdby:
        {
            type:String,
            require:true,
        }

    }
)


const Defect=mongoose.model('Defect',defectSchema)
module.exports={Defect};