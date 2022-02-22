const path = require('path');
const handle404=(req,res)=>{
   
    res.status(404).sendfile(path.join(__dirname,'..','..','public','pages','404.html'))}
module.exports=handle404;