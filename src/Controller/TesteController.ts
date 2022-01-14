import { Request, Response } from "express";
import { TesteService } from "../Service/TesteService";

class TesteController {
    async handle(req: Request, res: Response) {
        const { nome } = req.body
        const testeService = new TesteService()
        const service = await testeService.execute(nome)
        res.status(201).json({ service })
    }
} export { TesteController }