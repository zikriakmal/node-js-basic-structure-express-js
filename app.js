const  express = require('express');
const app = express();
const port = 5000;

const postController = require('./controller/post.controller');

//route require



//main route 
app.use('/',postController.findAll);


app.listen(port,()=> console.log(`server running on port ${port} `));