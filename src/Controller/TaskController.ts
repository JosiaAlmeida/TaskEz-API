import { Request, Response } from 'express'
import { GenericService } from '../Service/GenericService'
import { Task } from '../models/Task'
import { TaskRepository } from '../Repository/TaskRepository'

const service = new GenericService(TaskRepository)

class TaskController {
    async handleList(req: Request, res: Response) {
        const task = await service.execute_list()
        return res.status(200).json(task)
    }
    async handleFind(req: Request, res: Response) {
        const { id } = req.params
        const task = await service.execute_find_id(id)
        return res.status(200).json(task)
    }
    async handleCreate(req: Request, res: Response) {
        const b = req.body
        const task = await service.execute_create({ ...b })
        return res.status(201).json(task)
    }
    async handleUpdate(req: Request, res: Response) {
        const { title, description, status, id, project_id, user_id } = req.body
        const point = service.execute_point({ status })
        const task = await service.execute_update(id, { title, description, status, point, project_id, user_id })
        return res.status(200).json(task)
    }
    async handleDelete(req: Request, res: Response) {
        const { id } = req.params
        const task = await service.execute_delete(id)
        return res.status(204).json({ message: "Excluido" })
    }
} export { TaskController }