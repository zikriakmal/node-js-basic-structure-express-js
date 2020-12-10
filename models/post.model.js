const sql =  require('../config/db');

const Post = function(post){
    this.title = post.title;
    this.description = post.description;
}

Post.getAll = result =>{
    sql.query("SELECT * FROM possts", (err,res)=>{
        if(err){
            console.log("error",err);
            result(null,err);
            return;
        }
        // console.log(("posts",res));
        result(null,res);
    });
}

module.exports = Post