var express = require('express');
var router = express.Router();
const fs  = require('fs');
const path = './resources/eventList.txt';

var fileContent=[];
//fs.open(path,'r',handlingErrors(readFile))




router.get('/', (req, res, next) =>{
    fs.open(path,'r',()=>{
        fs.readFile(path,'utf8',(err,content)=>{
            if(content==='')
                content='[]'
            fileContent = JSON.parse(content)
            res.json({message: fileContent})
        })
    })
})




//error handling
function handlingErrors(cb){
    return function(err,result){
        if(err){
            handleError(err)
        }
        else{
            cb(result)
        }
    }
}
function handleError(err){
    console.log('error:     '+err)
}

  
  module.exports = router;