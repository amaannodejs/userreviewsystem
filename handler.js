"use strict";
const AWS = require('aws-sdk')
const mongoose=require('mongoose')
const dbConnect=()=>mongoose.connect('mongodb+srv://amaan:9868439196@cluster0.zjmafzm.mongodb.net/userReview?retryWrites=true&w=majority')
const S3 = new AWS.S3()
const User=require('./models/user')
const JWT= require('jsonwebtoken');
const user = require('./models/user');
module.exports.hello = async (event) => {
  await dbConnect()
  // await dynamoDB.put({
  //   TableName:"user",
  //   Item:{
  //     id:String(Date.now()),
  //     name:"Amaan",
  //     profileImage:"/fasd/fas",
  //     rating:4.5,
  //     assigned_question_set:"2",
  //     conpletedTests:[],
  //     isReviewier:true
  //   }
  // }).promise()
  // await S3.putObject({
  //   Bucket:"profileimagesofuser",
  //   Body:JSON.stringify({test:"test"}),
  //   Key:String(Date.now())+".json"
  // }).promise()




  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Working Perfectly",
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.login = async (event) => {

const {body}=event
const {username,password}=JSON.parse(body)
const user=await User.findOne({"username":username})
if(!user || user.password!==password){
  return {
    statusCode: 500,
    body: JSON.stringify(
      {
        message: "User not found"
      },
      null,
      2
    ),
  };
}

const token = JWT.sign('fwerewv',{
  username:user.username,
  name:user.name,
  email:user.email
  
})
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Working Perfectly",
        token:token
      },
      null,
      2
    ),
  };
};

module.exports.register = async (event) => {
  const {body}=event
  const {password,email,name}=JSON.parse(body)
  if(await user.findOne({"email":email})){
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: "User Already exist",
          input: event,
        },
        null,
        2
      ),
    };
  }
  const newUser=new User({
    "email":email,
    "name":name,
    "password":password
  })
  await newUser.save()

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Working Perfectly",
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.updateProfileImage = async (event) => {

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Working Perfectly",
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.getTest = async (event) => {

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Working Perfectly",
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.answerTest = async (event) => {

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Working Perfectly",
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.addTest = async (event) => {

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Working Perfectly",
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.listTest = async (event) => {

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Working Perfectly",
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.listUsers = async (event) => {

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Working Perfectly",
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.addReviewToUser = async (event) => {

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Working Perfectly",
        input: event,
      },
      null,
      2
    ),
  };
};