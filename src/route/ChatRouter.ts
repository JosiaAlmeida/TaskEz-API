import { Router } from 'express'
import { ChatController } from '../Controller/ChatController'
import userLogin from '../middleware/userLogin'

const routeChat = Router()

const controller = new ChatController()

routeChat.get('/', userLogin, controller.execut_list)
routeChat.get('/:id', controller.execut_find)
routeChat.post('/', controller.execute)
routeChat.post('/search', controller.search)

export { routeChat }