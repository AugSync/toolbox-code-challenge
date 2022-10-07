const express = require('express')
const filesRoute = require('./files.route')

const router = express.Router()

const defaultRoutes = [
  {
    path: '/files',
    route: filesRoute
  }
]

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route)
})

module.exports = router
