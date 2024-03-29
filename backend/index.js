const express = require('express');
const bodyParser = require('body-parser');
const cors=require('cors');
const MongoClient =require('mongodb').MongoClient;
const ObjectId=require('mongodb').ObjectID;
var dbname="datacollection"
//var client = new MongoClient( 'mongodb://localhost:27017/mypro', {useNewUrlParser:true});
var client = new MongoClient( 'mongodb+srv://admin:admin@cluster0-mwcbo.mongodb.net/datacollection?retryWrites=true&w=majority', {useNewUrlParser:true});
 var connection;
client.connect((err,con)=>{
    if(!err)
    {
        connection=con;
        console.log("database connected");
    }
    else{
        console.log("database could not connect");
    }
})
const app= express();
app.use(cors());
app.get('/',(req,res)=>{
    res.send({status:"ok",data:"this is a test api"});
})
app.get('/user',(req,res)=>{
    var id=req.queryid;
    res.send({status:"ok",data:[{name:"X",age:78,id:id},{name:"Y",age:67}]});
})
app.post('/sign-in',bodyParser.json(),(req,res)=>{
var collection = connection.db(dbname).collection('users');
collection.find(req.body).toArray((err,docs)=>{
    if(!err && docs.length>0)
    {
        res.send({status:"ok",data:docs});
    }
    else{
        res.send({status:"failed", data:err});
    }
})
})
app.post('/sign-up', bodyParser.json() ,(req,res)=>{


  var collection = connection.db(dbname).collection('users');
  collection.find({email:req.body.email}).toArray((err,docs)=>{
  if(!err && docs.length>0)
  {
     res.send({status:"failed", data:"email already Exist"})
  }
  else{
        collection.insert(req.body, (err,result)=>{
            if(!err)
            {
                res.send({ status:"ok", data:"signup success" });
            }
            else{
                res.send({status:"failed", data:err});
            }
        
        })
    }
    })
})
app.post('/createShow', bodyParser.json() ,(req,res)=>{

    var collection = connection.db(dbname).collection('show');  
   
          collection.insert(req.body, (err,result)=>{
              if(!err)
              {
                  res.send({ status:"ok", data:"show created" });
              }
              else{
                  res.send({status:"failed", data:err});
              }
          
          })
      
      
  })


  app.get('/getAllShows',(req,res)=>{
    var collection = connection.db(dbname).collection('show');
    collection.find().toArray((err,docs)=>{
        if(!err && docs.length>0)
        {
            res.send({status:"ok",data:docs});
        }
        else{
            res.send({status:"failed", data:err});
        }
    })
    })
    app.post('/bookTheShow', bodyParser.json() ,(req,res)=>{


        console.log(req.body);  
        var collection = connection.db(dbname).collection('show');
        collection.find({id:req.body}).toArray((err,docs)=>{
        if(!err && docs.length>0)
        {
           res.send({status:"failed", data:"data insert"})
        }
        else{
              collection.update({_id:ObjectId(req.body.id)},{ $inc:{"front.booked":req.body.front, "middle.booked":req.body.middle, "balcony.booked":req.body.balcony}}, (err,result)=>{
                  if(!err)
                  {
                      res.send({ status:"ok", data:" success" });
                  }
                  else{
                      console.log(err);
                      res.send({status:"failed", data:err});
                  }
              
              })
          }
          })
      })
app.listen(3000,()=>{console.log("server is listening on port 3000")});