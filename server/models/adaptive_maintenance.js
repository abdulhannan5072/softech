const mongoose = require('mongoose');

const adaptivemaintenanceSchema=mongoose.Schema(
    {
    selectBuild:
    {
        type:String,
        require:true,
     
    },
    envAdaptType:
    {
        type:String,
        require:true,
    },
    name:
    {
        type:String,
        require:true,

    },
    module:
    {
        type:String,
        require:true,
       },
    requirements:
    {
        type:String,
        require:true,

    }
    }
)
const AdaptiveMaintenance=mongoose.model('AdaptiveMaintenance',adaptivemaintenanceSchema);
module.exports={AdaptiveMaintenance};