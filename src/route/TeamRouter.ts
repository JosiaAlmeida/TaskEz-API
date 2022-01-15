import { Router } from 'express'
import { TeamController } from '../Controller/TeamController'
import userLogin from '../middleware/userLogin'
const routerTeam = Router()
const controller = new TeamController()

routerTeam.get('/', userLogin, controller.handleList)
routerTeam.get('/:id', userLogin, controller.handleFind)
routerTeam.post('/', userLogin, controller.handleCreate)
routerTeam.put('/', userLogin, controller.handleUpdate)
routerTeam.delete('/', userLogin, controller.handleDelete)


export { routerTeam }