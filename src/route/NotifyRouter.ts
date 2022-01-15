import { Router } from 'express'
import { NotifyController } from '../Controller/NotifyController'
import userLogin from '../middleware/userLogin'

const routeNotify = Router()

const controller = new NotifyController()

routeNotify.get('/', userLogin, controller.execut_list)
routeNotify.get('/:id', userLogin, controller.execut_find)
routeNotify.post('/', userLogin, controller.execute)
routeNotify.post('/search', userLogin, controller.search)
routeNotify.delete('/', userLogin, controller.elimine)

export { routeNotify }