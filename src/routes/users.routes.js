const { Router } = require('express')

const usersRoutes = Router()

const UsersController = require('../controllers/usersController')

const userscontroller = new UsersController();


usersRoutes.post('/', userscontroller.create);

module.exports = usersRoutes;