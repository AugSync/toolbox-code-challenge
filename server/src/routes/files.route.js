const express = require('express')
const bodyParser = require('body-parser')
const dataController = require('../controllers/files/data.controller')

const router = express.Router()

router.use(bodyParser.json())

router.route('/data').get(dataController.getData)
router.route('/list').get(dataController.getList)

module.exports = router
