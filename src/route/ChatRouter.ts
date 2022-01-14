import { Router } from 'express'
import { ChatController } from '../Controller/ChatController'

const routeChat = Router()

const controller = new ChatController()

routeChat.post('/', controller.execute)

export { routeChat }