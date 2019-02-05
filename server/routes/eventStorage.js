var express = require('express');
var router = express.Router();
const fs  = require('fs');
const path = './resources/eventList.txt';

var fileContent=[];
//fs.open(path,'r',handlingErrors(readFile))




function readFile(){
    fs.readFile(path,'utf8',handlingErrors(sendFileContent))    
}
function sendFileContent(content){
    console.log('zawartosc pliku to ' + content)
    if(content!==''){
        console.log('nie jestem pusty!')
         fileContent = JSON.parse(content)
         console.log(content)
    }
    else{
        console.group('wysylam pusty')
        fileContent =[]
    }
    
    router.get('/', function(req, res, next) {
        res.json({message: content})
      });
    
}

router.get('/', function(req, res, next) {
    fs.open(path,'r',handlingErrors(readFile))
  });

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