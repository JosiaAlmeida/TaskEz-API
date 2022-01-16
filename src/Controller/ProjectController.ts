import { Request, Response } from 'express'
import { Project } from '../models/Project'
import { ProjectRepository } from '../Repository/ProjectRepository'
import { GenericService } from "../Service/GenericService";
import { ActionUserService } from '../Service/ActionsUserService';

const Service = new GenericService(ProjectRepository)
const actionService = new ActionUserService()
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
        b.user_id = req.user_id
        const service = await Service.execute_create({ ...b })
        await actionService.execute_add_notify_project(b.user_id, b.user_receiver_id)
        res.status(201).json({ service })
    }
    async handleUpdate(req: Request, res: Response) {
        const { title, description, status, id } = req.body
        const user_id = req.user_id
        const point = Service.execute_point({ status })
        const project = await Service.execute_update(id, { user_id, title, description, status, point })
        // await actionService.execute_add_notify_project(user_id)
        res.status(201).json({ project })
    }
    async handleDelete(req: Request, res: Response) {
        const id = req.params['id']
        const service = await Service.execute_delete(id)
        return res.status(204).json({ message: "Dados excluidos" })
    }
} export { ProjectController }