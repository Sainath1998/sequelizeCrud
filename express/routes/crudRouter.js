const express = require('express')
const {create,read,remove,update} = require('../contorller/crudeController')
const router = express.Router()

router.route('/read').get(read)

router.route('/create').post(create)

router.route('/update').patch(update)

router.route('/remove').delete(remove)

module.exports = router