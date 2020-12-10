const postModel = require('../models/post.model.js');

exports.findAll = (req,res)=>{
    postModel.getAll((err,data)=>{
        if(err)
            res.status(500).send({message:err.message||"internal server error"})
        else res.send(data);
    })
}