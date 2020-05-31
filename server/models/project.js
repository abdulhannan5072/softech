const mongoose=require('mongoose');



const projectSchema =mongoose.Schema(
    {
        projectName:
        {
            type:String,
            require:true,
            trim:true,
            unique:1
        },
        key:
        {
            type:String,
            require:true,
            
        },
        projectType:
        {
            type:String,
            require:true
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


//Find
/*
Project.findById("5ebef7bbe179ee31700fda68",(err,doc)=>{
    if(err) return console.log(err);
    console.log(doc);
})
//Remove
Project.findByIdAndRemove("5ebef7bbe179ee31700fda68",(err,doc)=>{
    if(err) return console.log(err);
    console.log(doc);
})
// update
Project.findByIdAndUpdate(
    "5ebef796e179ee31700fda66",
    {$set :{name:"M"}},
        {new:true},
        (err,doc) =>{ if(err) return console.log(err);
            console.log(doc);
        })
*/
const Project = mongoose.model('Project', projectSchema);
        module.exports = {Project};