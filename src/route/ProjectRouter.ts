import { Router } from 'express'
import { ProjectController } from '../Controller/ProjectController'
import userLogin from '../middleware/userLogin'

const routerProject = Router()
const controller = new ProjectController()

routerProject.get('/', userLogin, controller.handleList)
routerProject.get('/:id', userLogin, controller.handleFindId)
routerProject.post('/', userLogin, controller.handleCreate)
routerProject.put('/', userLogin, controller.handleUpdate)
routerProject.delete('/:id', userLogin, controller.handleDelete)

export { routerProject }