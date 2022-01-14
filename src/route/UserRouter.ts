import { Router } from 'express'
import { UserController } from '../Controller/UserController'

const routeUser = Router()

const controller = new UserController()

routeUser.post('/signup', controller.handleCreate)
routeUser.post('/sign', controller.handleSign)
routeUser.get('/', controller.handleFindAll)

export { routeUser }