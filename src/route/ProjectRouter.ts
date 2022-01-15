import { Router } from 'express'
import { ProjectController } from '../Controller/ProjectController'

const routerProject = Router()
const controller = new ProjectController()

routerProject.get('/', controller.handleList)
routerProject.get('/:id', controller.handleFindId)
routerProject.post('/', controller.handleCreate)
routerProject.put('/', controller.handleUpdate)
routerProject.delete('/:id', controller.handleDelete)

export { routerProject }