const mongoose = require("mongoose");


const userSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            require:true,
            min:3,
            max:10,
            unique:true
        },

        email:{
            type:String,
            require:true,
            min:10,
            max:30,
            unique:true
        },
        password :{
            type:String,
            require:true,
            min:6
        },
        profilePicture:{
            type:String,
            default:""
        },
        coverPicture:{
            type:String,
            default:""
        },
        followers:{
            type:Array,
            default:[]
        },
        following:{
            type:Array,
            default:[]
        },
        isAdmin:{
            type:Boolean,
            default:false
        }
        
        

    }
)

module.exports = mongoose.model("User",userSchema)