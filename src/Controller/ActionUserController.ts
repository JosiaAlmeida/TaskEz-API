import { Request, Response } from 'express'
import { ActionUserService } from '../Service/ActionsUserService'

const service = new ActionUserService()
class ActionUserController {
    async handleAddAction(req: Request, res: Response) {
        const user_id = req.user_id
        // return res.status(201).json(addNotify)
    }
} export { ActionUserController }