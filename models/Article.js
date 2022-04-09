const mongoose = require('mongoose')

const Schema = mongoose.Schema

const articleSchema = new Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    company_name:{
        type:String,
        require:true
    },
    position:{
        type:String,
        require:true
    },
    experience:{
        type:String,
        require:true
    }
})

module.exports = mongoose.model("Article", articleSchema)


