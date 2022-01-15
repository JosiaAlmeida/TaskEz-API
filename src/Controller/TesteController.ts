import { Request, Response } from "express";
import { GenericService } from "../Service/GenericService";
import { Project } from '../models/Project'
import { ProjectRepository } from '../Repository/ProjectRepository'

class TesteController {
    async handle(req: Request, res: Response) {
        const b = req.body
        const testeService = new GenericService<Project>()
        const service = await testeService.execute_create({ ...b }, ProjectRepository)
        res.status(201).json({ service })
    }
} export { TesteController }