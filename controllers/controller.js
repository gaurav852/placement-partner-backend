const Article = require('../models/Article')
const { param } = require('../routes/routes')

const getArticels = async(req,res,next) => {
    let articles
    try{
        articles = await Article.find()
    }catch(err){
        console.log(err)
    }

    if(!articles){
        return res.status(404).json({message : "Articles not found"})
    }
    return res.status(200).json({articles})  
}

const addArticle = async(req,res,next) => {
    const {name, email, company_name, position, experience} = req.body
    let article
    try{
        article = new Article({
            name,
            email,
            company_name,
            position,
            experience
        })
        await article.save()
    }catch(err){
        console.log(err)
    }

    if(!article){
       return res.status(404).json({message : "Unable to add your experience"})
    }
    res.status(200).json({article})
}

const getById = async(req,res,next) => {
    const id = req.params.id
    let article
    try{
        article = await Article.findById(id) 
    }catch(err){
        console.log(err)
    }

    if(!article){
        return res.status(404).json({message:"unable to find the article"})
    }
    return res.status(200).json({article})
}

const updateArticle = async(req,res,next) => {
    const id = req.params.id
    const {name, email, company_name, position, experience} = req.body
    let article
    try{
        article = await Article.findByIdAndUpdate(id, {
            name,
            email,
            company_name,
            position,
            experience
        })
        article = await article.save()
    }catch(err){
        console.log(err)
    }

    if(!article){
        return res.status(404).json({message:"unable to update"})
    }
    return res.status(200).json({article})
}

const deleteArticle = async(req,res,next) => {
    const id = req.params.id
    let article
    try{
        article = await Article.findByIdAndRemove(id)
    }catch(err){
        console.log(err)
    }

    if(!article){
        return res.status(404).json({message:"unable to delete the article"})
    }
    return res.status(200).json({message:"article deleted sucessfully"})
}

exports.getArticels = getArticels
exports.addArticle = addArticle
exports.getById = getById
exports.updateArticle = updateArticle
exports.deleteArticle = deleteArticle