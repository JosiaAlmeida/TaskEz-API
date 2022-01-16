import { Router } from 'express'
import { UserController } from '../Controller/UserController'
import { ActionUserController } from '../Controller/ActionUserController'

const routeUser = Router()

const controller = new UserController()
const actionController = new ActionUserController()

routeUser.get('/', controller.handleFindAll)
routeUser.get('/action', actionController.handleAddAction)

routeUser.post('/signup', controller.handleCreate)
routeUser.post('/sign', controller.handleSign)

export { routeUser }