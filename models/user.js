const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

    const userSchema= new Schema({
        name:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        profileImage:{
            type:String
            
        },
        rating:{
            type:Number
        },
        completedTests:[{
            questionSetId:{
                type:Schema.Types.ObjectId
            },
            answers:[{
                questionNumber:{
                    type:Number
                },
                answer:{
                    type:String
                }
            }]
        }],
        isReviewer:{
            type:Boolean
        }
        
    });


    module.exports = mongoose.model('user', userSchema);