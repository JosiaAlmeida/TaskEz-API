import { Router } from 'express'
import { NotifyController } from '../Controller/NotifyController'

const routeNotify = Router()

const controller = new NotifyController()

routeNotify.get('/', controller.execut_list)
routeNotify.get('/:id', controller.execut_find)
routeNotify.post('/', controller.execute)
routeNotify.post('/search', controller.search)
routeNotify.delete('/', controller.elimine)

export { routeNotify }