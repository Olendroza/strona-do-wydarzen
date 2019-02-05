var express = require('express');
var router = express.Router();
let fs =require('fs');
var promise = require('promise')
const path = './resources/eventList.txt';

router.post('/',checkFlag)




function checkFlag(res){
  if(res.body.flag===-1){         //adding new events to list
    console.log('saving at the end of file')
    fs.readFile(path,'utf8',(err,content)=>{
      let eventArray = [];
      if(content==''){
        eventArray.push(res.body.event)
        console.log(eventArray)
        
      }
      else{
        eventArray= JSON.parse(content)
        eventArray.push(res.body.event)
      }
      fs.writeFile(path,JSON.stringify(eventArray),()=>{
             console.log('done')
             })
          })

  }
  else if(res.body.flag===-2){    //deleting event; body is number of event
    console.log('deleting event nr' + res.body.event)
    fs.readFile(path,'utf8',(err,content)=>{
      let eventArray = [];
      eventArray= JSON.parse(content)
      eventArray.splice(res.body.flag,1)
      fs.writeFile(path,JSON.stringify(eventArray),()=>{
        console.log('array length is now' + eventArray.length)
        })
      
    })
  }
  else{                     //editing event
    console.log('editing event nr' + res.body.flag)
    fs.readFile(path,'utf8',(err,content)=>{
      let eventArray = [];
      eventArray= JSON.parse(content)
      eventArray.splice(res.body.flag,1,res.body.event)
      fs.writeFile(path,JSON.stringify(eventArray),()=>{
        console.log('done')
        })
      
    })
  }
}



//handling errors
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
  console.error('error:     '+err)
}


module.exports = router;
