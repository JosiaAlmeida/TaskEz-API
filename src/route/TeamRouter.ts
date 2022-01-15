import { Router } from 'express'
import { TeamController } from '../Controller/TeamController'
const routerTeam = Router()
const controller = new TeamController()

routerTeam.get('/', controller.handleList)
routerTeam.get('/:id', controller.handleFind)
routerTeam.post('/', controller.handleCreate)
routerTeam.put('/', controller.handleUpdate)
routerTeam.delete('/', controller.handleDelete)


export { routerTeam }