import { Router } from "express";
import { TaskController } from "../Controller/TaskController";

const routerTask = Router()
const controller = new TaskController()

routerTask.get('/', controller.handleList)
routerTask.get('/:id', controller.handleFind)
routerTask.post('/', controller.handleCreate)
routerTask.put('/', controller.handleUpdate)
routerTask.delete('/:id', controller.handleDelete)

export { routerTask }