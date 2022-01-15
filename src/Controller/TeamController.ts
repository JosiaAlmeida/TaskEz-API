import { Request, Response } from "express";
import { TeamRepository } from "../Repository/TeamRepository";
import { GenericService } from "../Service/GenericService";

const service = new GenericService(TeamRepository)
class TeamController {
    async handleList(req: Request, res: Response) {
        const team = await service.execute_list()
        return res.status(200).json(team)
    }
    async handleFind(req: Request, res: Response) {
        const { id } = req.params
        const team = await service.execute_find_id(id)
        return res.status(200).json(team)
    }
    async handleCreate(req: Request, res: Response) {
        const b = req.body
        b.user_id = req.user_id
        const team = await service.execute_create({ ...b })
        return res.status(201).json(team)
    }
    async handleUpdate(req: Request, res: Response) {
        const b = req.body
        const team = await service.execute_update(b.id, { ...b })
        return res.status(201).json(team)
    }
    async handleDelete(req: Request, res: Response) {
        const { id } = req.params
        await service.execute_delete(id)
        return res.status(204).json({ message: "excluido" })
    }
} export { TeamController }
