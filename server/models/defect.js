const mongoose = require('mongoose');

const defectSchema=mongoose.Schema(
    {
        defectname:
        {
             type:String,
             require:true,
             trim:true,
             unique:1

        },
        description:
        {
            type:String,
            require:true,
        },
        type:
        {
            type:String,
            require:true
        },
        status:
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