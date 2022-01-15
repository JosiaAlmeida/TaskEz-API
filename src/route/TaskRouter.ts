import { Router } from "express";
import { TaskController } from "../Controller/TaskController";
import userLogin from '../middleware/userLogin'

const routerTask = Router()
const controller = new TaskController()

routerTask.get('/', userLogin, controller.handleList)
routerTask.get('/:id', userLogin, controller.handleFind)
routerTask.post('/', userLogin, controller.handleCreate)
routerTask.put('/', userLogin, controller.handleUpdate)
routerTask.delete('/:id', userLogin, controller.handleDelete)

export { routerTask }