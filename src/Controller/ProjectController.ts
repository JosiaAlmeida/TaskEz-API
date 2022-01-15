import { Request, Response } from 'express'
import { Project } from '../models/Project'
import { ProjectRepository } from '../Repository/ProjectRepository'
import { GenericService } from "../Service/GenericService";

const Service = new GenericService(ProjectRepository)

class ProjectController {
    async handleList(req: Request, res: Response) {
        const list = await Service.execute_list()
        return res.status(200).json(list)
    }
    async handleFindId(req: Request, res: Response) {
        const id = req.params['id']
        const service = await Service.execute_find_id(id)
        return res.status(200).json(service)
    }
    async handleCreate(req: Request, res: Response) {
        const b = req.body
        const service = await Service.execute_create({ ...b })
        res.status(201).json({ service })
    }
    async handleUpdate(req: Request, res: Response) {
        const { title, description, status, id, user_id } = req.body
        const point = Service.execute_point({ status })
        const project = await Service.execute_update(id, { user_id, title, description, status, point })
        res.status(201).json({ project })
    }
    async handleDelete(req: Request, res: Response) {
        const id = req.params['id']
        const service = await Service.execute_delete(id)
        return res.status(204).json({ message: "Dados excluidos" })
    }
} export { ProjectController }