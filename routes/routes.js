const { Router } = require('express')
const express = require('express')
const router = express.Router()
const Article = require('../models/Article')
const controller = require('../controllers/controller')


router.get('/', controller.getArticels)
router.post('/', controller.addArticle)
router.get('/:id', controller.getById)
router.put('/:id', controller.updateArticle)
router.delete('/:id', controller.deleteArticle)

module.exports = router