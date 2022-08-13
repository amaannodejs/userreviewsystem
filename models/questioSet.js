const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

    const questionSetSchema= new Schema({
        questionSetName:{
            type:String
        },
      questions:[{
        question:{
            type:String
        }
      }]
        
    });


    module.exports = mongoose.model('questionSet', questionSetSchema);